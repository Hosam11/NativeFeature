export class Place {
  constructor(title, imageUrl, loation) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.address = loation.address;
    this.loation = { lat: loation.lat, lng: loation.lng };
    this.id = new Date().toString() + Math.random().toString();
  }
}
