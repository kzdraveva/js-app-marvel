export interface IStoriesListThumbnail {
  path: string;
  extension: string;
}
export interface IStoriesListComics {
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
export interface IStoriesListSeries {
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
export interface IStoriesListEvents {
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
export interface IStoriesListCharacters {
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

export interface IStoriesListCreators {
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

export interface IStoriesListOriginalIssue {
  resourceURI: string;
  name: string;
}

export interface IStoriesListResult {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  type: string;
  modified: Date;
  thumbnail: IStoriesListThumbnail;
  comics: IStoriesListComics;
  series: IStoriesListSeries;
  events: IStoriesListEvents;
  characters: IStoriesListCharacters;
  creators: IStoriesListCreators;
  originalissue: IStoriesListOriginalIssue;
}

export interface IStoriesList {
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
    results: Array<IStoriesListResult>;
  };
  etag: string;
}
