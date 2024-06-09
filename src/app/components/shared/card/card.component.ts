import { Component, Input, input } from '@angular/core';
import { Character } from '../../../models/character.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() character!: Character;


  constructor(private router: Router) { }

  /*viewCharacter(): void {
    this.router.navigate(['/character', this.character.id]);
  }*/
}
