export interface ISingleSerieUrls {
  type: string;
  url: string;
}

export interface ISingleSerieThumbnail {
  path: string;
  extension: string;
}

export interface ISingleSerieComics {
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

export interface ISingleSerieStories {
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

export interface ISingleSerieEvents {
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

export interface ISingleSerieCharacters {
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

export interface ISingleSerieCreators {
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

export interface ISingleSeriePrevious {
  resourceURI: string;
  name: string;
}

export interface ISingleSerieNext {
  resourceURI: string;
  name: string;
}

export interface ISingleSerieResult {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: Array<ISingleSerieUrls>;
  startYear: number;
  endYear: number;
  rating: string;
  modified: Date;
  thumbnail: ISingleSerieUrls;
  comics: ISingleSerieComics;
  stories: ISingleSerieStories;
  events: ISingleSerieEvents;
  characters: ISingleSerieCharacters;
  creators: ISingleSerieCreators;
  next: ISingleSerieNext;
  previous: ISingleSeriePrevious;
}

export interface ISingleSerie {
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
    results: Array<ISingleSerieResult>;
  };
  etag: string;
}
