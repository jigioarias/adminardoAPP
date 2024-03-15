import { Component, OnInit } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Inicio',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Ventas',
                items: [
                    { label: 'Report', icon: 'pi pi-fw pi-list', routerLink: [''] },
                ]
            },
            {
                label: 'Seguridad',
                items: [
                    { label: 'Users', icon: 'pi pi-fw pi-user', routerLink: [''] },
                ]
            }
        ];
    }
}
