import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

import { Character } from '../../models/character.interface';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];
  currentPage: number = 1;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    /*this.charactersService
      .getAllCharacters()
      .subscribe((characters) => this.characters = characters);*/
      this.getCharacters(this.currentPage);
  }

  getCharacters(page: number): void {
    this.charactersService.getAllCharacters(page)
      .subscribe((characters) => this.characters = characters);
  };

  nextPage(): void {
    this.currentPage++;
    this.getCharacters(this.currentPage);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getCharacters(this.currentPage);
    }
  }

}
