import { Component, OnInit } from '@angular/core';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'div[app-about]',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent extends TextComponent {

  override c_name: string = '';
  override c_num: number = 0;
  override c_end: boolean = true;

}
