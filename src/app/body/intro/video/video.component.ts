import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent implements AfterViewInit {
  @ViewChild('videoIframe') videoIframe!: ElementRef;
  icon = faCircleChevronDown;

  ngAfterViewInit(): void {
    this.checkVideoInView();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkVideoInView();
  }

  checkVideoInView(): void {
    const rect = this.videoIframe.nativeElement.getBoundingClientRect();
    const isInView =
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight);
    const iframe = this.videoIframe.nativeElement.contentWindow;
    if (isInView) {
      iframe.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        '*'
      );
    } else {
      iframe.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        '*'
      );
    }
  }

  scrollDown(): void {
    const introElement = document.querySelector('app-about-toubi');
    if (introElement) {
      introElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
