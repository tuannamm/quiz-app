class Novel {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  getAuthor() {
    return "The author is " + this.author;
  }
}

let myNovel = new Novel("Tôi thấy hoa vàng trên cỏ xanh", "Nguyễn Nhật Ánh");
