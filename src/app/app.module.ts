import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'page',      component: PageComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
