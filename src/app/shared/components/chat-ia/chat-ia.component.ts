import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-ia',
  standalone: true,
  imports: [],
  templateUrl: './chat-ia.component.html',
  styleUrl: './chat-ia.component.css'
})
export class ChatIaComponent {
  isOpen = false;

  // Función para abrir el drawer
  openDrawer() {
    this.isOpen = true;
    document.getElementById('chatDrawer')?.classList.remove('translate-x-full');
  }

  // Función para cerrar el drawer
  closeDrawer() {
    this.isOpen = false;
    document.getElementById('chatDrawer')?.classList.add('translate-x-full');
  }
}
