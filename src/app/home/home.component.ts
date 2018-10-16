import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  date: Date;
  number: number;
  currency: number;

  constructor(@Inject(LOCALE_ID) public locale: string) { }

  ngOnInit() {
    this.date = new Date();
    this.number = 1000000;
    this.currency = 10000;
  }
}
