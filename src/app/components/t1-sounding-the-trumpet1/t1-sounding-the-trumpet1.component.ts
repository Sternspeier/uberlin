import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TrueDateService } from 'src/app/services/true-date.service'
import { BuildLinksService } from 'src/app/services/build-links.service'

@Component({
  selector: 'div[app-t1-sounding-the-trumpet1]',
  templateUrl: './t1-sounding-the-trumpet1.component.html',
  styleUrls: ['./t1-sounding-the-trumpet1.component.css']
})
export class T1SoundingTheTrumpet1Component implements OnInit {

  c_name = 'sounding-the-trumpet'
  c_num = 1
  c_end = false;

  tDate: string = this.trueDate.makeDate();

  constructor(private trueDate: TrueDateService, private bLink: BuildLinksService) {}

  ngOnInit(): void {

    this.bLink.saveLocation(this.c_name, this.c_num, this.c_end)
  }

}
