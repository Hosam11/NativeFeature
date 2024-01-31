class Place {
  constructor(title, imageUrl, address, loation) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.address = address;
    this.loation = loation;
    this.id = new Date().toString() + Math.random().toString();
  }
}
