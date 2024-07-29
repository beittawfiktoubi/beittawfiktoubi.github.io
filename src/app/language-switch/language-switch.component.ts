import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-language-switch',
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.scss'
})
export class LanguageSwitchComponent {
  icon = faLanguage

  constructor(private translate: TranslateService) {
  }

  selectLang(lang: "en" | "he") {
    this.translate.use(lang)
  }

  handlerOpenMenu(): void {
    document.documentElement.style.setProperty('--backdrop-color', 'transparent');
  }

  readonly CHECK_INTERVAL = 2000;
  intervalId?: NodeJS.Timeout;

  onMenuClosed() {
    this.intervalId = setInterval(() => {
      const v = document.documentElement.style.getPropertyValue('--background-light');
      document.documentElement.style.setProperty('--backdrop-color', v);
      clearInterval(this.intervalId)
    }, this.CHECK_INTERVAL);
  }
}
