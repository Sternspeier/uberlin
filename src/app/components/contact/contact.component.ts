import { Component, OnInit } from '@angular/core';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'div[app-contact]',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends TextComponent {

  
  override c_name: string = '';
  override c_num: number = 0;
  override c_end: boolean = true;
}
