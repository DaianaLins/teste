import { Component } from '@angular/core';
import { Material } from '../Material';

@Component({
  selector: 'app-video-aulas',
  templateUrl: './video-aulas.component.html',
  styleUrls: ['./video-aulas.component.css']
})
export class VideoAulasComponent {
  container = 'container';
  banner = 'banner';
  content = 'content';
  dives = 'dives';
  week = 'week';
  materiais: Material[] = [
    { "id": 1, "text": "Turca" },
    { "id": 2, "text": "Tom" },
    { "id": 3, "text": "Frida" },
    { "id": 4, "text": "Bob", },
    { "id": 5, "text": "Paco", }
    ];
}
