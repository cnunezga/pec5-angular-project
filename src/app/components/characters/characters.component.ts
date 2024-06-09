import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

import { Character } from '../../models/character.interface';
import { animate, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];
  currentPage: number = 1;
  viewMode: string = 'cards';
  isLoading: boolean = true;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.getCharacters(this.currentPage);
  }

  getCharacters(page: number): void {
    this.charactersService.getAllCharacters(page)
      .subscribe((characters) => {
        setTimeout(() => {
          this.characters = characters;
          this.isLoading = false;
        }, 1000);
      });
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

  setView(view: string): void {
    this.viewMode = view;
  }

}
