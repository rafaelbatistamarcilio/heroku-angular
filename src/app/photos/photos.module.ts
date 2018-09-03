import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoCaptureComponent } from './photo-capture/photo-capture.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotosRouting } from './photos.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PhotosRouting,
    FormsModule
  ],
  declarations: [PhotoCaptureComponent, PhotoListComponent]
})
export class PhotosModule { }
