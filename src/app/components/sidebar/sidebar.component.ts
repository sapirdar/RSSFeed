import { Component, OnInit } from '@angular/core';
import { RSSFeed } from '../../../models/rssFeed';

@Component({
  selector: 'ap-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public newFeed = new RSSFeed();

  constructor() { }

  ngOnInit() {
  }
}
