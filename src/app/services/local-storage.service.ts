import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Feed } from '../models/feed';
import { ResultsInterface } from '../models/results.interface';
import { RssFeedsService } from './rss-feeds.service';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  constructor(
  ) {
  }
  setFeedList(list: Feed[]) {
    localStorage.setItem('feedList', JSON.stringify(list));
  }

  public getFeedList(): Feed[] {
    const listJson = localStorage.getItem('feedList');
    if (listJson) {
      return JSON.parse(listJson) as Feed[];
    } else {
      return [];
    }
  }
}
