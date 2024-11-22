import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-loading',
    imports: [NgStyle],
    templateUrl: './loading.component.html',
    styleUrl: './loading.component.css'
})
export class LoadingComponent {
  @Input() size: number = 16; // Tamaño predeterminado (en unidades Tailwind)
  @Input() color: string = 'blue-500'; // Color de la barra activa
  @Input() borderColor: string = 'gray-300'; // Color de la barra inactiva
}
