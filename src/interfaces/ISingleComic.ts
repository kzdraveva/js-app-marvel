export interface ISingleComicCreators {
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

export interface ISingleComicCharacters {
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

export interface ISingleComicStories {
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

export interface ISingleComicEvents {
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

export interface ISingleComicImages {
  path: string;
  extension: string;
}

export interface ISingleComicThumbnail {
  path: string;
  extension: string;
}

export interface ISingleComicPrices {
  type: string;
  price: number;
}

export interface ISingleComicDates {
  type: string;
  date: Date;
}

export interface ISingleComicCollectedIssues {
  resourceURI: string;
  name: string;
}

export interface ISingleComicCollections {
  resourceURI: string;
  name: string;
}

export interface ISingleComicVariants {
  resourceURI: string;
  name: string;
}

export interface ISingleComicSeries {
  resourceURI: string;
  name: string;
}

export interface ISingleComicUrls {
  type: string;
  url: string;
}

export interface ISingleComicTextObjects {
  type: string;
  language: string;
  text: string;
}

export interface ISingleComicResult {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: Array<ISingleComicTextObjects>;
  resourceURI: string;
  urls: Array<ISingleComicUrls>;
  series: ISingleComicSeries;
  variants: Array<ISingleComicVariants>;
  collections: Array<ISingleComicCollections>;
  collectedIssues: Array<ISingleComicCollectedIssues>;
  dates: Array<ISingleComicDates>;
  prices: Array<ISingleComicPrices>;
  thumbnail: ISingleComicThumbnail;
  images: Array<ISingleComicImages>;
  creators: ISingleComicCreators;
  characters: ISingleComicCharacters;
  stories: ISingleComicStories;
  events: ISingleComicEvents;
}

export interface ISingleComic {
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
    results: Array<ISingleComicResult>;
  };
  etag: string;
}
