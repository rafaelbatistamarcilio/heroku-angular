import { Injectable } from '@angular/core';
import Photo from './photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  photos: Photo[];

  constructor() {
    if (!this.photos) {
      this.photos = [];
    }
  }

  public addPhoto(photo: Photo) {
    this.photos.push(photo);
  }
}
