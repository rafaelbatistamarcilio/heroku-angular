import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-photo-capture',
  templateUrl: './photo-capture.component.html',
  styleUrls: ['./photo-capture.component.css']
})
export class PhotoCaptureComponent implements OnInit {

  isMobile: boolean;
  photo: string;

  constructor() {
    this.photo = 'https://image.flaticon.com/icons/svg/23/23765.svg';

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

    input.onchange = (event: any) => {
      const file = event.target.files[0];
      // Do something with the image file.

      if (file) {

        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.photo = e.target.result;
          console.log(e.target.result);
        };

        reader.readAsDataURL(file);
      }

    };
  }
}
