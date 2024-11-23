import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/components/header/header.component";
import { NavMenuComponent } from "./core/components/nav-menu/nav-menu.component";

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        HeaderComponent,
        NavMenuComponent,
    ],
    templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'mi-carnaval';
}
