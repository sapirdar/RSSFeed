import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RssFeedsService } from 'src/app/services/rss-feeds.service';
import { Subject } from 'rxjs';
import { Feed } from 'src/app/models/feed';
import { takeUntil, map, filter } from 'rxjs/operators';
import { ResultsInterface, ItemInterface } from 'src/app/models/results.interface';


@Component({
  selector: 'ap-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit, OnDestroy {
  public items: ItemInterface[];
  public filteredItems: ItemInterface[];
  public searchTerm;
  public isLoading: boolean;

  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private rssFeedsService: RssFeedsService
  ) {
    this.handleData();
    rssFeedsService.isLoading$.subscribe(isLoading => this.isLoading = isLoading);
  }

  ngOnInit() {
  }

  handleData() {
    // Subscribe to feed content
    this.rssFeedsService.contentList$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((list: ResultsInterface[]) => {
        this.searchTerm = null;
        if (list && list.length > 0) {
          const mapped = [].concat(...list.map(i => i.items));
          if (mapped.length > 0) {
            // Sort by date descending
            this.items = mapped.sort((a, b) => (new Date(b.pubDate) as any) - (new Date(a.pubDate) as any));
            this.filteredItems = this.items;
          }
        } else {
          this.items = [];
          this.filteredItems = [];
        }
      });
  }

  search() {
    if (this.searchTerm.length > 1) {
      this.filteredItems = this.items.filter(i =>
        i.content.indexOf(this.searchTerm) > -1 ||
        i.title.indexOf(this.searchTerm) > -1
      );
    } else {
      this.filteredItems = this.items;
    }
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
