import { NgStyle } from '@angular/common';
import { GOTApiService } from '../../servicios/gotapi-service';
import { GOTPersonajesInterface } from './../../common/GOTPersonajesInterface';
import { Component, inject, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-personaje',
  imports: [NgStyle, RouterLink],
  templateUrl: './personaje.html',
  styleUrl: './personaje.css',
})
export class Personaje {
  @Input('id') id!: string;
  

  personaje!: GOTPersonajesInterface;

  private readonly apiService: GOTApiService = inject(GOTApiService)

  constructor() { }
  ngOnInit(): void {
    this.loadCharacter();
  }

  loadCharacter() {
    this.apiService.getPersonaje(this.id).subscribe(
      {
        next: (data) => {
          this.personaje = data;
        },
        error: (err) => {
          console.log('error al cagar los datos del productos por:' + err);
        },
        complete: () => {
          console.log('carga de producto exitosa');
        }
      }
    )
  }

  colorFamily: { family: string, color: string; backgroundColor: string }[] = [
    { family: "House Stark", color: "#FFFFFF", backgroundColor: "#A9A9A9" },        // Texto blanco sobre gris acero
    { family: "House Lannister", color: "#FFFFFF", backgroundColor: "#C21807" },    // Blanco sobre rojo fuego
    { family: "House Targaryen", color: "#FF6666", backgroundColor: "#000000" },    // Rojo suave sobre negro
    { family: "House Baratheon", color: "#000000", backgroundColor: "#F5D300" },    // Negro sobre amarillo dorado
    { family: "House Greyjoy", color: "#FFFFFF", backgroundColor: "#2E4057" },      // Blanco sobre azul oscuro
    { family: "House Tyrell", color: "#FFFFFF", backgroundColor: "#4CAF50" },       // Blanco sobre verde intenso
    { family: "House Martell", color: "#FFFFFF", backgroundColor: "#FF6F00" },      // Blanco sobre naranja cálido
    { family: "House Arryn", color: "#FFFFFF", backgroundColor: "#2196F3" },        // Blanco sobre azul cielo
    { family: "House Tully", color: "#FFFFFF", backgroundColor: "#1976D2" },        // Blanco sobre azul profundo
    { family: "House Bolton", color: "#FFFFFF", backgroundColor: "#8B0000" },       // Blanco sobre rojo oscuro
    { family: "House Frey", color: "#FFFFFF", backgroundColor: "#654321" },         // Blanco sobre marrón madera
    { family: "House Other", color: "#3d1c55ff", backgroundColor: "#CCCCCC" },     // Negro sobre gris neutro
  ];
  getFamilyColors(family: string) {
    const found = this.colorFamily.find(f => f.family === family);

    // Si encuentra la familia en el listado, devuelve sus colores
    if (found) {
      return { color: found.color, 'background-color': found.backgroundColor , 'padding': '20px', 'border-radius': '50px'};
    } else {
      // Si no se encuentra, color amarillo sobre fondo morado
      return { color: '#FFD700', 'background-color': '#800080', 'padding': '20px' , 'border-radius': '50px'};
    }
  }

  getCharacterTitle(title: string): string {
    if (title === 'No One') {
      return 'Personaje sin titulo'
    } else return title
  }
  getCharacterTitle2(title: string): string {
  return title === 'No One' ? "Personaje sin Título" : title;
}

}
