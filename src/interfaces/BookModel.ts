export interface BookModel{
    id: string;
    volumeInfo: {
      title: string;
      authors: string[];
      description : string;
      publisher : string;
      publishedDate : string;
      pageCount : string;
      imageLinks: {
        thumbnail?: string | undefined;
        smallThumbnail? : string | undefined;
      } 
    }
  }