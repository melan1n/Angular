
export class Article {
    
    constructor(
        public title: string,
        public description: string,
        public author: string,  
        public imageUrl: string) {

        this.author = author;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}
