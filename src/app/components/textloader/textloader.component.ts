import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-textloader',
  templateUrl: './textloader.component.html',
  styleUrls: ['./textloader.component.css']
})
export class TextloaderComponent implements OnInit {

  tDate: string = this.makeDate();

  constructor( ) {}

  ngOnInit(): void {
    this.getText();
  }

  getText() {
    $("#Content").load("/assets/text/sounding_the_trumpet.html");
  }

  makeDate(): string {
    const d = new Date();
    const td = String(d.getFullYear() + 1);
    return td
  }


}
