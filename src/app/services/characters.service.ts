import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Character } from '../models/character.interface';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getAllCharacters(page: number = 1): Observable<Character[]> {
    return this.http.get<{ info: any, results: Character[] }>(`${this.apiUrl}?page=${page}`).pipe(
      map(response => response.results)
    );
  }

  getCharacterById(id: String): Observable<Character> {
    return this.http.get<Character>(this.apiUrl + '/' + id);
  }
}
