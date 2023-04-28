import { Component } from '@angular/core';
import { Material } from '../Material';

@Component({
  selector: 'app-ver-todos',
  templateUrl: './ver-todos.component.html',
  styleUrls: ['./ver-todos.component.css']
})
export class VerTodosComponent {
  container = 'container';
  banner = 'banner';
  content = 'content';
  dives = 'dives';
  row = 'row';
  column = 'column'

  materiais: Material[] = [
    { "id": 1, "text": "Turca" },
    { "id": 2, "text": "Tom" },
    { "id": 3, "text": "Frida" },
    { "id": 4, "text": "Bob", },
    { "id": 5, "text": "Paco", },
    { "id": 6, "text": "Pacos", }
  ];

  number: number = this.materiais.length
  app = document.getElementById('app')





}
