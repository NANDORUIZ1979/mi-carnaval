import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-loading',
    imports: [NgStyle, NgClass],
    templateUrl: './loading.component.html',
    styleUrl: './loading.component.css'
})
export class LoadingComponent {
  @Input() size: number = 16; // Tamaño predeterminado (en unidades Tailwind)
  @Input() color: string = 'teal-500'; // Color de la barra activa
  @Input() borderColor: string = 'teal-300'; // Color de la barra inactiva
}
