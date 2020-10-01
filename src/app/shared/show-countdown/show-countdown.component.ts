import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-countdown',
  templateUrl: './show-countdown.component.html',
  styleUrls: ['./show-countdown.component.scss'],
})
export class ShowCountdownComponent implements OnInit {

  @Input() countdown: number;

  constructor() { }

  ngOnInit() {}

}
