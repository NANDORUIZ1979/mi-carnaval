import { Component } from '@angular/core';
import { ChatIaComponent } from "../../../shared/components/chat-ia/chat-ia.component";

@Component({
    selector: 'app-header',
    imports: [ChatIaComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {

}
