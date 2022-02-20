import { Component } from '@angular/core';

import { DataSharingService } from '../services/dataSharingService';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    constructor(private dataSharingService: DataSharingService) { }

    sendData(): void {
        // send data to subscribers via observable subject
        this.dataSharingService.sendData('Send Data from Home Component to App Component!');
    }

    clearData(): void {
        // clear data
        this.dataSharingService.clearData();
    }
}