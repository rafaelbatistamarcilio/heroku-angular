import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import Photo from '../photo.model';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-capture',
  templateUrl: './photo-capture.component.html',
  styleUrls: ['./photo-capture.component.css']
})
export class PhotoCaptureComponent implements OnInit {

  isMobile: boolean;
  photo: Photo;

  constructor(private photoService: PhotosService) {
    this.photo = new Photo();
    this.photo.imageData = 'https://image.flaticon.com/icons/svg/23/23765.svg';

  }

  ngOnInit() {
    this.verifyScreenSize();
  }

  verifyScreenSize() {
    this.isMobile = window.innerWidth < 600;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.verifyScreenSize();
  }

  takePhoto() {
    const input: any = document.createElement('input');
    input.type = 'file';
    input.accept = 'image';
    input.capture = 'camera';
    input.click();
    input.onchange = (event: any) => this.extractImage(event.target.files[0]);
  }

  extractImage(file) {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.photo.imageData = e.target.result;
      this.photo.captureDate = new Date();
      reader.readAsDataURL(file);
    }
  }

  savePhoto() {
    this.photoService.addPhoto(this.photo);
  }
}
