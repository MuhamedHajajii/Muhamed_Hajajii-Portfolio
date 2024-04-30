import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/pages/blank/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ProjectsComponent } from './components/pages/blank/projects/projects.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { BlankComponent } from './components/pages/blank/blank.component';
import { WelcomePageComponent } from './components/pages/welcome-page/welcome-page.component';
import { NotfoundComponent } from './components/shared/notfound/notfound.component';
import { AboutComponent } from './components/pages/blank/about/about.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    ProjectsComponent,
    SidebarComponent,
    BlankComponent,
    WelcomePageComponent,
    NotfoundComponent,
    AboutComponent,
  ],
  exports: [
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    ProjectsComponent,
    SidebarComponent,
    BlankComponent,
    WelcomePageComponent,
    NotfoundComponent,
    AboutComponent,
  ],
})
export class CoreModule {}
