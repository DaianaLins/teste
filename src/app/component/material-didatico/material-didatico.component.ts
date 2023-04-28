import { Component } from '@angular/core';
import { Material } from '../Material';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-material-didatico',
  templateUrl: './material-didatico.component.html',
  styleUrls: ['./material-didatico.component.css']
})
export class MaterialDidaticoComponent {
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

  constructor(private loginService: LoginService){
    this.getAllDesign()
  }


  getAllDesign(){
    this.loginService.listAllDesigns().subscribe((response) => {
      console.log(response)
    }, (err)=>{
      console.log(err)
  })
  }


}
