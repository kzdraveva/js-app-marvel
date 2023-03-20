export interface ICharactersListUrl {
  type: string;
  url: string;
}

export interface ICharactersListThumbnail {
  path: string;
  extension: string;
}

export interface ICharactersListComics {
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

export interface ICharactersListStories {
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

export interface ICharactersListEvents {
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

export interface ICharactersListSeries {
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

export interface ICharactersListResult {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Array<ICharactersListUrl>;
  thumbnail: ICharactersListThumbnail;
  comics: ICharactersListComics;
  stories: ICharactersListStories;
  events: ICharactersListEvents;
  series: ICharactersListSeries;
}

export interface ICharactersList {
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
    results: Array<ICharactersListResult>;
  };
  etag: string;
}
