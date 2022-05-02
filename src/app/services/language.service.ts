import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import all from '../../data/translations.json';
import en from '../../data/translations-en.json';
import pl from '../../data/translations-pl.json';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  cookieName: string = environment.languageCookieName;
  selectedLanguage!: string | null;
  translations: any[] = [];

  constructor(private cookieService: CookieService) {
    this.setTranslations();
  }

  public setLanguage(languageName: string): void {
    this.cookieService.set(this.cookieName, languageName);
    this.selectedLanguage = this.getLanguage();
    if (this.selectedLanguage != '') {
      this.setTranslations();
    }
  }
  public getLanguage(): string {
    const c = this.cookieService.get(this.cookieName);
    return c != null ? c : "";
  }
  private setTranslations() {
    if (this.getLanguage() == '') {
      this.setLanguage(environment.pl);
    }
    else {
      this.selectedLanguage = this.getLanguage();
    }
    this.translations = [];
    switch (this.selectedLanguage) {
      case environment.en:
        this.translations.push(...en.translations);
        break;
      case environment.pl:
        this.translations.push(...pl.translations);
        break;
    }
    this.translations.push(...all.translations);
  }
  public get(k: string, inputs: string[] = []): string {
    const translation = this.translations.find(a => a.k == k.trim());
    let result = translation != null ? translation.v : k;
    for (let i = 0; i < inputs.length; i++) {
      result = result.replace(`((${i}))`, inputs[i])
    }
    return result;
  }
}
