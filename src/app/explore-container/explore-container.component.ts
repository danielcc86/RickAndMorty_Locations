import { Component, OnInit, Input } from '@angular/core';
import { RickAndMortyLocacionesService } from '../services/rick-and-morty-locaciones.service';
import { RickAndMortyService } from '../services/rick-and-morty.service';
@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor(randmService: RickAndMortyService) { }  

  ngOnInit() {}

  

}

export class ExploreContainerComponent2 implements OnInit {
  @Input() name: string;  

  constructor(randmService: RickAndMortyLocacionesService){}

  ngOnInit() {}

}
