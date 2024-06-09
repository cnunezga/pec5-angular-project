import { Component, Input } from '@angular/core';
import { Character } from '../../../models/character.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  @Input() characters: Character[] = [];
}
