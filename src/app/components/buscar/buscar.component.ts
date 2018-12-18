import { Heroe } from "./../../services/heroes.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "src/app/services/heroes.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-buscar",
  templateUrl: "./buscar.component.html"
})
export class BuscarComponent implements OnInit {
  heroes: any[];
  termino:string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesServices: HeroesService
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesServices.buscarHeroes(params["termino"]);
      console.log(this.heroes);
    });
  }
}
