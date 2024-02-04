export class Place {
  constructor(title, imageUrl, loation) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.address = loation.address;
    this.location = { lat: loation.lat, lng: loation.lng };
    this.id = new Date().toString() + Math.random().toString();
  }
}
