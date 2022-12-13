import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'div[app-text-wrapper]',
  templateUrl: './text-wrapper.component.html',
  styleUrls: ['./text-wrapper.component.css']
})
export class TextWrapperComponent implements OnInit {
  @Input() twTextSource: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
