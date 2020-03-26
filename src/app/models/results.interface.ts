export interface ResultsInterface {
  status: string;
  feed: FeedInterface;
  items: ItemInterface[];
}

export interface FeedInterface {
  url: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
}

export interface ItemInterface {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: {};
  categories: [];
}
