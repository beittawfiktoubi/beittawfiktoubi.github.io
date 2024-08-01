import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitchComponent } from '../language-switch/language-switch.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReadMoreComponent } from '../read-more/read-more.component';
import { ReadMoreCardComponent } from '../read-more-card/read-more-card.component';
import { AboutToubiComponent } from '../about-toubi/about-toubi.component';
import { AboutHouseComponent } from '../about-house/about-house.component';
import { ImageComponent } from '../image/image.component';

@NgModule({
    declarations: [
        NavbarComponent,
        GalleryDotsComponent,
        GalleryComponent,
        ActivitiesComponent,
        VideoComponent,
        IntroComponent,
        FooterComponent,
        LogoComponent,
        LoaderComponent,
        DialogImageComponent,
        ActivityComponent,
        LanguageSwitchComponent,
        ReadMoreComponent,
        ReadMoreCardComponent,
        AboutToubiComponent,
        AboutHouseComponent,
        ImageComponent
    ],
    imports: [
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        TranslateModule,
        FontAwesomeModule,
        CommonModule,
    ],
    exports: [
        LanguageSwitchComponent,
        LoaderComponent,
        IntroComponent,
        GalleryComponent,
        ActivitiesComponent,
        FooterComponent,
    ],
})
export class BodyModule { }
