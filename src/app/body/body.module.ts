import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { VideoComponent } from './intro/video/video.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
    declarations: [NavbarComponent, GalleryComponent, ActivitiesComponent, CardComponent, VideoComponent, HeaderComponent, IntroComponent, ReadMoreComponent, FooterComponent],
    imports: [
        CommonModule
    ],
    exports: [HeaderComponent, IntroComponent, GalleryComponent, ActivitiesComponent, ReadMoreComponent, FooterComponent]
})
export class BodyModule { }
