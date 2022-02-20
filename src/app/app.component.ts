import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataSharingService } from './services/dataSharingService';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent implements OnDestroy {
    data: any[] = [];
    subscription: Subscription;

    constructor(private dataSharingService: DataSharingService) {
        // subscribe to home component data
        this.subscription = this.dataSharingService.getData().subscribe(res => {
            if (res) {
                this.data.push(res);
            } else {
                // clear data when empty data received
                this.data = [];
            }
        });
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
}