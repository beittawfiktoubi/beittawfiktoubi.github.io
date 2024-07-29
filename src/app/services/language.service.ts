// src/app/services/language.service.ts
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private renderer: Renderer2;

  constructor(private translate: TranslateService, rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.translate.onLangChange.subscribe((event) => {
      this.updateDirection(event.lang);
    });
  }

  public updateDirection(lang: string) {
    const direction = (lang === 'he') || (lang === 'ar') ? 'rtl' : 'ltr';
    this.renderer.setAttribute(document.documentElement, 'dir', direction);
  }
}