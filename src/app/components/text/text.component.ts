import { Component, OnInit } from '@angular/core';
import { TrueDateService } from 'src/app/services/true-date.service';
import { BuildLinksService } from 'src/app/services/build-links.service'

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  c_name = ''
  c_num = 0
  c_end = true

  tDate: string = this.trueDate.makeDate();

  constructor(private trueDate: TrueDateService, private bLink: BuildLinksService) {}

  ngOnInit(): void {
    this.bLink.saveLocation(this.c_name, this.c_num, this.c_end)
  }

}
