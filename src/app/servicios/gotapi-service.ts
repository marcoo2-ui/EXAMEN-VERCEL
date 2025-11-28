import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GOTPersonajesInterface } from '../common/GOTPersonajesInterface';

@Injectable({
  providedIn: 'root',
})
export class GOTApiService {
  private readonly URL = 'https://thronesapi.com/api/v2/Characters/';

  private http: HttpClient = inject(HttpClient)

  constructor() { }

  getPersonajes(): Observable<GOTPersonajesInterface[]> {
    return this.http.get<GOTPersonajesInterface[]>(this.URL);
  }

  getPersonaje(id: string): Observable<GOTPersonajesInterface> {
    return this.http.get<GOTPersonajesInterface>(this.URL + id);
  }

}
