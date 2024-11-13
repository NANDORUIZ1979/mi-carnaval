import { Component } from '@angular/core';
import { ChatIaComponent } from "../../shared/chat-ia/chat-ia.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ChatIaComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
