import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { LoaderComponent } from './body/loader/loader.component';
import { imagesPaths } from './constants/strings';
import { sleep } from './utils/misc';
import { Loader } from './utils/loader';
import { IntroComponent } from './body/intro/intro.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    readonly CHECK_INTERVAL = 1000;
    title = 'Biet Tubi';

    intervalId: any;

    loader: Loader = new Loader
    isLoading: boolean = true

    @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

    ngAfterViewInit() {
        this.loader.loadDependencies();
        this.intervalId = setInterval(() => {
            this.checkDependencies()
        }, this.CHECK_INTERVAL);
    }

    checkDependencies = () => {
        console.log('checkDependencies', this.loader.isDone)

        if (this.loader.isDone) {
            this.isLoading = false
            clearInterval(this.intervalId)
            this.createAllComponents()
        }
    }

    createAllComponents() {
        this.container.clear();
        const ref = this.container.createComponent(IntroComponent);
    }





}

