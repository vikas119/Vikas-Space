export class Post {
    public author: string
    public authorId: string
    public thumbnail: string
    public title: string
    public subtitle: string
    public short_desc: string
    public published: any
    public content: string
    public id?: string

  constructor() {
    this.author = null;
    this.authorId = null;
    this.thumbnail = null;
    this.title = null;
    this.subtitle = null;
    this.short_desc = null;
    this.published = null;
    this.content = null;
  }
}
