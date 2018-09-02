import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '404', component: NotFoundComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: '**', redirectTo: '404' }

];


@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes, { useHash: true })],
})
export class AppRoutingModule { }
