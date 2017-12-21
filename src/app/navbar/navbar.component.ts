import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { GlobalEventsManager } from '../_services/index';

import { MediaMatcher } from '@angular/cdk/layout';

@Component({
    selector: 'app-nav-bar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnDestroy {
    showNavBar = false;
    mobileQuery: MediaQueryList;

    fillerNav = Array(4).fill(0).map((_, i) => `Nav Item ${i + 1}`);

    fillerContent = Array(4).fill(0).map(() =>
        `Lorem ipsum dolor sit amet, consectetur adipiscing .`);

    private _mobileQueryListener: () => void;


    constructor(private globalEventsManager: GlobalEventsManager, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        console.log('NAVBAR', this.showNavBar);
        this.globalEventsManager.showNavBarEmitter.subscribe((mode) => {
            this.showNavBar = mode;
        });
        // if (localStorage.getItem('currentUser')) {
        //     this.showNavBar = true;
        // }

        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);

    }
    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}

