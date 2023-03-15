export interface ISeriesListUrls {
  type: string;
  url: string;
}

export interface ISeriesListPrevious {
  resourceURI: string;
  name: string;
}

export interface ISeriesListNext {
  resourceURI: string;
  name: string;
}
export interface ISeriesListCreators {
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
export interface ISeriesListCharacters {
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

export interface ISeriesListEvents {
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

export interface ISeriesListStories {
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

export interface ISeriesListComics {
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

export interface ISeriesListThumbnail {
  path: string;
  extension: string;
}

export interface ISeriesListResult {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: Array<ISeriesListUrls>;
  startYear: number;
  endYear: number;
  rating: string;
  modified: Date;
  thumbnail: ISeriesListThumbnail;
  comics: ISeriesListComics;
  stories: ISeriesListStories;
  events: ISeriesListEvents;
  characters: ISeriesListCharacters;
  creators: ISeriesListCreators;
  next: ISeriesListNext;
  previous: ISeriesListPrevious;
}

export interface ISeriesList {
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
    results: Array<ISeriesListResult>;
  };
  etag: string;
}
