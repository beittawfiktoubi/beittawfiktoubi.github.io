import { Component, ElementRef, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { Loader } from './utils/loader';
import { IntroComponent } from './body/intro/intro.component';
import { GalleryComponent } from './body/gallery/gallery.component';
import { ActivitiesComponent } from './body/activities/activities.component';
import { FooterComponent } from './body/footer/footer.component';
import { LanguageService } from './services/language.service';
import { ReadMoreComponent } from './read-more/read-more.component';
import { AboutToubiComponent } from './about-toubi/about-toubi.component';
import { AboutHouseComponent } from './about-house/about-house.component';
import { NavbarComponent } from './body/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private languageService: LanguageService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    this.languageService.updateDirection("he")
  }

  readonly CHECK_INTERVAL = 1000;

  intervalId: any;

  loader: Loader = new Loader
  isLoading: boolean = true

  @ViewChild('container', { read: ViewContainerRef, static: true }) container?: ViewContainerRef;

  ngAfterViewInit() {
    this.loader.loadDependencies();
    this.intervalId = setInterval(() => {
      this.checkDependencies()
    }, this.CHECK_INTERVAL);
  }

  checkDependencies = () => {
    if (this.loader.isDone) {
      this.isLoading = false
      clearInterval(this.intervalId)
      this.removeCssClassFromHost("full-screen")
    }
  }

  removeCssClassFromHost(className: string) {
    this.renderer.removeClass(this.el.nativeElement, className);
  }

}

