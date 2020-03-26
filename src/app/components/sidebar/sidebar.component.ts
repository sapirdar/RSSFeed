import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { RssFeedsService } from '../../services/rss-feeds.service';
import { Feed } from 'src/app/models/feed';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ap-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  public feedList: Feed[];
  public name: string;
  public url: string;

  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private rssFeedsService: RssFeedsService
  ) {
    this.handleData();
  }

  ngOnInit() {
  }

  handleData() {
    this.rssFeedsService.feedList$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((list: Feed[]) => {
        this.feedList = list;
      });
  }

  submit() {
    this.rssFeedsService.addFeed(this.url, this.name);
    this.url = null;
    this.name = null;
  }

  delete(url: string) {
    this.rssFeedsService.removeFeed(url);
  }

  toggleSelect(feed: Feed) {
    if (feed.selected === true) {
      this.rssFeedsService.unSelectFeed(feed.url);

    } else {
      this.rssFeedsService.selectFeed(feed.url);
    }
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
