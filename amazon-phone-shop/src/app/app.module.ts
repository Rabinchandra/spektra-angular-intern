import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavSearchComponent } from './nav-search/nav-search.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { RouterOutlet } from '@angular/router';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavSearchComponent,
    SidebarComponent,
    SearchResultsComponent,
    ProductItemComponent,
    ProductDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterOutlet],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
