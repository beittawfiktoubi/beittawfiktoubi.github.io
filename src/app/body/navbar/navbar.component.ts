import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { hideBackdrop } from 'src/app/utils/misc';

type Titles = {
    name: string;
    id: string;
}

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    readonly SECTION = 'navbar'
    public titles: Titles[] = [];
    icon = faBars

    constructor(private translate: TranslateService) {
        this.translate.get(this.SECTION).subscribe((res: Object) => {
            for (const [key, value] of Object.entries(res)) {
                this.titles.push({ id: key, name: value });
            }
        });
    }

    scrollToSection(id: string): void {
        if (id) {
            const section = document.querySelector(id);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    handlerOpenMenu(): void {
        hideBackdrop()
    }
}
