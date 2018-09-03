import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoCaptureComponent } from './photo-capture/photo-capture.component';

const routes: Routes = [
  {
    path: '',
    component: PhotoListComponent
  },
  {
    path: 'new',
    component: PhotoCaptureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRouting { }
