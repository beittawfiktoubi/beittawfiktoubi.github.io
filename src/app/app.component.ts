import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { LoaderComponent } from './body/loader/loader.component';
import { imagesPaths } from './constants/strings';
import { sleep } from './utils/misc';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    readonly CHECK_INTERVAL = 1000;
    title = 'Biet Tubi';
    isLoading: boolean = true;

    intervalId: any;
    countImagesLoaded: number = 0;

    @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

    ngAfterViewInit() {
        this.loadDependencies();
        this.intervalId = setInterval(() => {
            this.checkDependencies()
        }, this.CHECK_INTERVAL);
    }

    checkDependencies = () => {
        if (this.countImagesLoaded === imagesPaths.length) {
            this.isLoading = false
            clearInterval(this.intervalId)
            this.createAllComponents()
        }
    }

    createAllComponents() {
        // this.container.clear();
        // const ref = this.container.createComponent(LoaderComponent);
    }

    async loadDependencies() {
        this.loadImages()
    }

    async loadImages() {
        for (const p of imagesPaths) {
            let img = new Image();
            img.onload = this.handleImageLoaded.bind(this);
            img.src = p;
        }
    }

    handleImageLoaded() {
        this.countImagesLoaded++;
    }

}

