import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoCaptureComponent } from './photo-capture/photo-capture.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotosRouting } from './photos.routing';

@NgModule({
  imports: [
    CommonModule,
    PhotosRouting
  ],
  declarations: [PhotoCaptureComponent, PhotoListComponent]
})
export class PhotosModule { }
