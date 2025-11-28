import { GOTApiService } from './../../servicios/gotapi-service';
import { Component, inject, OnInit } from '@angular/core';
import { GOTPersonajesInterface } from '../../common/GOTPersonajesInterface';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-personajes',
  imports: [RouterLink],
  templateUrl: './personajes.html',
  styleUrl: './personajes.css',
})
export class Personajes implements OnInit {

  allPersonajes: GOTPersonajesInterface[] = [];

private readonly apiService: GOTApiService = inject(GOTApiService)

  constructor() { }
  ngOnInit(): void {
    this.loadCharacters();
  }
  loadCharacters() {
    this.apiService.getPersonajes().subscribe(
      {
        next: (data) => {
          this.allPersonajes = data;
        },
        error: (err) => {
          console.log('error al cargar los personajes por:' + err);
        },
        complete: () => {
          console.log('carga de personajes exitosa');
        }
      }
    )
  }

}
