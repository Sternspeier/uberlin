import { Component, OnInit } from '@angular/core';
import { TrueDateService } from '../../services/true-date.service'

@Component({
  selector: 'app-t1-sounding-the-trumpet1',
  templateUrl: './t1-sounding-the-trumpet1.component.html',
  styleUrls: ['./t1-sounding-the-trumpet1.component.css']
})
export class T1SoundingTheTrumpet1Component implements OnInit {

  tDate: string = this.trueDate.makeDate();

  constructor(private trueDate: TrueDateService) {}

  ngOnInit(): void {
  }

}
