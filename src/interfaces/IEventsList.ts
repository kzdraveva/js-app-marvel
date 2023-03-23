export interface IEventsListUrl {
  type: string;
  url: string;
}
export interface IEventsListComics {
  available: number;
  returned: number;
  collectionURI: string;
  items: [
    {
      resourceURI: string;
      name: string;
    },
  ];
}
export interface IEventsListStories {
  available: number;
  returned: number;
  collectionURI: string;
  items: [
    {
      resourceURI: string;
      name: string;
      type: string;
    },
  ];
}
export interface IEventsListSeries {
  available: number;
  returned: number;
  collectionURI: string;
  items: [
    {
      resourceURI: string;
      name: string;
    },
  ];
}
export interface IEventsListCharacters {
  available: number;
  returned: number;
  collectionURI: string;
  items: [
    {
      resourceURI: string;
      name: string;
      role: string;
    },
  ];
}
export interface IEventsListCreators {
  available: number;
  returned: number;
  collectionURI: string;
  items: [
    {
      resourceURI: string;
      name: string;
      role: string;
    },
  ];
}

export interface IEventsListNext {
  resourceURI: string;
  name: string;
}

export interface IEventsListPrevious {
  resourceURI: string;
  name: string;
}

export interface IEventsListResult {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: Array<IEventsListUrl>;
  modified: Date;
  start: Date;
  end: Date;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: IEventsListComics;
  stories: IEventsListStories;
  series: IEventsListSeries;
  characters: IEventsListCharacters;
  creators: IEventsListCreators;
  next: IEventsListNext;
  previous: IEventsListPrevious;
}

export interface IEventsList {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Array<IEventsListResult>;
  };
  etag: string;
}
