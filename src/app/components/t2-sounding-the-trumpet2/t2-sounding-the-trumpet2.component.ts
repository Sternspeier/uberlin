import { Component, OnInit } from '@angular/core';
import { TrueDateService } from 'src/app/services/true-date.service'
import { BuildLinksService } from 'src/app/services/build-links.service'

@Component({
  selector: 'app-t2-sounding-the-trumpet2',
  templateUrl: './t2-sounding-the-trumpet2.component.html',
  styleUrls: ['./t2-sounding-the-trumpet2.component.css']
})
export class T2SoundingTheTrumpet2Component implements OnInit {

  c_name = 'sounding-the-trumpet'
  c_num = 2
  c_end = true;

  tDate: string = this.trueDate.makeDate();

  constructor(private trueDate: TrueDateService, private bLink: BuildLinksService) {}

  ngOnInit(): void {

    this.bLink.saveLocation(this.c_name, this.c_num, this.c_end)
  }

}
