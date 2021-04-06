import { Component, OnInit, EventEmitter,Input, Output } from '@angular/core';
import { Hero } from './database';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  @Input() hero: Hero;
  @Output() delete = new EventEmitter();

  ngOnInit() {}

  onDeleteClick($event): void {
    this.delete.emit(true);
  }

  getHeroStrength() {
    return this.hero.strength;
  }

}
