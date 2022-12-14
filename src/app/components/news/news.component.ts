import { Component, OnInit } from '@angular/core';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'div[app-news]',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent extends TextComponent {

  override c_name: string = '';
  override c_num: number = 0;
  override c_end: boolean = true;

}
