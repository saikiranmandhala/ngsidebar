import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styleUrls: ['./app/app.component.css'],
    templateUrl: './app/app.component.html'
})
export class AppComponent {

    name: string;

    message: string;

    private _opened: boolean = false;

    private _toggleSidebar() {
        this._opened = !this._opened;
    }

    onClick() {
        this.message = 'Hello ' + this.name;
    }
}
