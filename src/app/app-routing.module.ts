import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicesComponent } from './services/services.component';
import { TestimonalsComponent } from './testimonals/testimonals.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { MainAbnnerComponent } from './main-abnner/main-abnner.component';
import { BlogComponent } from './blog/blog.component';
const appRoutes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full' },
  { path: 'home', component: MainAbnnerComponent },
  { path: 'about', component: IntroComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'testimonials', component: TestimonalsComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'blog', component: BlogComponent },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
	CommonModule,
	RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
