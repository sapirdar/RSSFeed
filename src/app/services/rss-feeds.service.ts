import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Feed } from '../models/feed';
import { ResultsInterface } from '../models/results.interface';
import { LocalStorageService } from './local-storage.service';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class RssFeedsService {

  private feedList: Feed[] = [];
  feedList$: BehaviorSubject<Feed[]> = new BehaviorSubject<Feed[]>(null);

  private contentList: ResultsInterface[] = [];
  contentList$: BehaviorSubject<ResultsInterface[]> = new BehaviorSubject<ResultsInterface[]>(null);

  private isLoading = false;
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private rssToJsonBaseUrl = environment.rssToJsonBaseUrl;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.init();
  }

  init() {
    this.feedList = this.localStorageService.getFeedList();
    if (this.feedList.length > 0) {
      this.feedList$.next(this.feedList);
      this.feedList.filter(feed => feed.selected === true).forEach(feed => this.getFeedContent(feed));
    }
  }

  addFeed(url: string, name: string) {
    // Keep name unique
    if (this.feedList.filter(i => i.name === name).length === 0) {
      const feed = new Feed(name, url);
      this._addItem(feed);
    }
  }

  removeFeed(url: string) {
    this._deleteItem(url);
    this._deleteContent(url);
  }

  selectFeed(url: string) {
    const feed: Feed = this.feedList.find(i => i.url === url);
    if (!feed.selected) {
      this._setSelected(feed, true);
      this.getFeedContent(feed);
    }
  }

  unSelectFeed(url: string) {
    const feed: Feed = this.feedList.find(i => i.url === url);
    this._setSelected(feed, false);
    this._deleteContent(url);
  }

  getFeedContent(feed: Feed) {
    this.isLoading$.next(true);
    this.http.get(this.rssToJsonBaseUrl + feed.url).subscribe((res: ResultsInterface) => {
      if (res && res.status === 'ok') {
        this._addContent(res);
      }
      this.isLoading$.next(false);
    }, (error) => {
      this.isLoading$.next(false);
    });
  }


  // Private:

  private _addItem(item: Feed) {
    this.feedList = [...this.feedList, item];
    this.feedList$.next(this.feedList);
    this.localStorageService.setFeedList(this.feedList);
  }

  private _deleteItem(url: string) {
    this.feedList = this.feedList.filter((i) => i.url !== url);
    this.feedList$.next(this.feedList);
    this.localStorageService.setFeedList(this.feedList);
  }

  private _setSelected(item: Feed, isSelected: boolean) {
    item.selected = isSelected;
    this._modifyItem(item);
    this.localStorageService.setFeedList(this.feedList);
  }

  private _modifyItem(item: Feed) {
    const ind = this.feedList.findIndex(i => i.name === item.name);
    this.feedList[ind] = item;
    this.feedList$.next(this.feedList);
  }

  private _addContent(content: ResultsInterface) {
    this.contentList = [...this.contentList, content];
    this.contentList$.next(this.contentList);
  }

  private _deleteContent(url: string) {
    this.contentList = this.contentList.filter((i) => i.feed.url !== url);
    this.contentList$.next(this.contentList);
  }

  private _setLoading(isLoading: boolean) {
    this.isLoading = isLoading;
    this.isLoading$.next(isLoading);
  }
}
