import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [],
    imports: [
        HeaderComponent, IntroComponent, GalleryComponent, ActivitiesComponent, ReadMoreComponent, FooterComponent
    ],
    exports: [HeaderComponent, IntroComponent, GalleryComponent, ActivitiesComponent, ReadMoreComponent, FooterComponent]
})
export class BodyModule { }
