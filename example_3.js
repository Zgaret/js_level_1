'use strict';
// es5

/*function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit =  function (text) {
        this.text = text;
};
function AttachedPost(author, text, date, highlighted = false) {
    Post.call(this, author, text, date);
    this.highlighted = highlighted;
}
// унаследовали методы из Post
AttachedPost.prototype = Object.create(Post.prototype);
// пересоздали сонструктор
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}*/


// es6
class Post{
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text){
        this.text = text;
    }
}
class AttachedPost  extends Post{
    constructor(author, text, date, highlighted = false) {
        super(author, text, date);
        this.highlighted = highlighted;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const post1 = new Post('Ivan', 'some text', '12.04.1987');
// console.log(post1);
post1.edit('Lorem ipsum bla bla bla');
// console.log(post1.text);

const attachedPost1 = new AttachedPost('Lola', 'hello world', '12.05,2005');
console.log(attachedPost1.highlighted);

attachedPost1.makeTextHighlighted();

attachedPost1.edit('hello big word');
console.log(attachedPost1);