import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-exercise',
  templateUrl: './event-exercise.component.html',
  styleUrls: ['./event-exercise.component.css']
})
export class EventExerciseComponent implements OnInit {

  eventName = '';
  eventDescription = '';

  constructor() { }

  ngOnInit(): void {
  }

  onKeyupEvent(event: any) {
    console.log(event.target.value);
  }

}
