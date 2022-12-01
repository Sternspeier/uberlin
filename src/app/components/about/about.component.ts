import { Component, OnInit } from '@angular/core';
import { TrueDateService } from 'src/app/services/true-date.service';

@Component({
  selector: 'div[app-about]',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  tDate: string = this.trueDate.makeDate();

  constructor(private trueDate: TrueDateService) {}

  ngOnInit(): void {
  }

}
