import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
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
                    { label: 'Panel Principal', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] }
                ]
            },
            {
                label: 'Herramientas',
                items: [
                    { label: 'Alta de Pacientes', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'Tabla de pacientes', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                    { label: 'Solicitar medicamentos', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
                    { label: 'Citas pendientes', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] }
                ]
            },


        ];
    }
}
