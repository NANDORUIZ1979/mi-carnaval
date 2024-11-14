import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/components/header/header.component";
import { NavMenuComponent } from "./core/components/nav-menu/nav-menu.component";
import { CardComponent } from "./shared/components/card/card.component";
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterLinkWithHref,
    HeaderComponent,
    NavMenuComponent,
    CardComponent,
    HomeComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'mi-carnaval';
}
