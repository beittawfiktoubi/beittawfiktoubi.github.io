import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { hideBackdrop } from '../utils/misc';

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
    hideBackdrop()
  }
}
