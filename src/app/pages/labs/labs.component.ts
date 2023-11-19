import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Bienvenido a mi primer app';
  tasks= signal([
    'Instalar angular CLI',
    'Crear proyecto',
    'Crear componente',
    'crear servicio'
  ]);

  name = signal('Rosso');
  person = signal({
    name: 'Pablo',
    age: 34,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  });

  clickHandler(){
    alert('Hola a todos');
  }
  changeHandler(event: Event) {
    console.log(event);
    const input =event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
