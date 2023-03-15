export interface ISingleCharacterComics {
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

export interface ISingleCharacterStories {
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

export interface ISingleCharacterSeries {
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

export interface ISingleCharacterEvents {
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

export interface ISingleCharacterThumbnail {
  path: string;
  extension: string;
}

export interface ISingleCharacterUrls {
  type: string;
  url: string;
}

export interface ISingleCharacterResult {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Array<ISingleCharacterUrls>;
  thumbnail: ISingleCharacterThumbnail;
  comics: ISingleCharacterComics;
  stories: ISingleCharacterStories;
  events: ISingleCharacterEvents;
  series: ISingleCharacterSeries;
}

export interface ISingleCharacter {
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
    results: Array<ISingleCharacterResult>;
  };
  etag: string;
}
