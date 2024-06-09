import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../models/character.interface';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent implements OnInit {

  character: Character | undefined;

  constructor(
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id')

    if (identifier !== null) {
      this.charactersService.getCharacterById(identifier)
        .subscribe((character) => {

          if (character) {
            this.character = character;
          } else {
            this.router.navigateByUrl('/');
          }

        })
    }
  }
}
