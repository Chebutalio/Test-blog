export interface Blog {
  id?: number;
  title: string;
  author: string;
  body: string;
  comments: [{
    id?: number;
    body: string;
    comment_author: string;
  }]
}
