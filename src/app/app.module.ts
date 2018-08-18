import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicesComponent } from './services/services.component';
import { TestimonalsComponent } from './testimonals/testimonals.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { SocailComponent } from './socail/socail.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainAbnnerComponent } from './main-abnner/main-abnner.component';
import { ConfigService } from './config.service';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListingComponent } from './blog-listing/blog-listing.component'
import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    GalleryComponent,
    ServicesComponent,
    TestimonalsComponent,
    ClientsComponent,
    PricingComponent,
    SocailComponent,
    NavigationComponent,
    MainAbnnerComponent,
    BlogComponent,
    BlogDetailComponent,
    BlogListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
