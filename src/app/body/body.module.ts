import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ActivitiesComponent } from './activities/activities.component';
import { FooterComponent } from './footer/footer.component';
import { VideoComponent } from './intro/video/video.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { LoaderComponent } from './loader/loader.component';
import { ActivityComponent } from './activity/activity.component';
import { GalleryDotsComponent } from '../gallery-dots/gallery-dots.component';
import { DialogImageComponent } from '../dialog-image/dialog-image.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        NavbarComponent,
        GalleryDotsComponent,
        GalleryComponent,
        ActivitiesComponent,
        VideoComponent,
        HeaderComponent,
        IntroComponent,
        FooterComponent,
        LogoComponent,
        LoaderComponent,
        DialogImageComponent,
        ActivityComponent
    ],
    imports: [
        FontAwesomeModule,
        CommonModule,
    ],
    exports: [
        LoaderComponent,
        HeaderComponent,
        IntroComponent,
        GalleryComponent,
        ActivitiesComponent,
        FooterComponent,
    ],
})
export class BodyModule { }
