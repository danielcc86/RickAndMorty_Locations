import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { RickAndMortyLocacionesService } from '../../services/rick-and-morty-locaciones.service';


@Component({
  selector: 'app-all-locaciones',
  templateUrl: './all-locaciones.component.html',
  styleUrls: ['./all-locaciones.component.scss'],
})
export class AllLocacionesComponent implements OnInit {
  allLocaciones: any;

  constructor(private randmService: RickAndMortyLocacionesService, private modalController: ModalController)
   { }

  ngOnInit() {
    this.randmService.getAllLocations().then( (res: any) => {
      this.allLocaciones = res;
      console.log(this.allLocaciones);
    }) 
  }
}
