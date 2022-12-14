import { Component, OnInit } from '@angular/core';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'div[app-archive]',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent extends TextComponent {

  override c_name: string = '';
  override c_num: number = 0;
  override c_end: boolean = true;

}
