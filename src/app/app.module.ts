import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouteRoutingModule } from './route/route-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchRepoComponent } from './search-repo/search-repo.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SearchRepoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouteRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
