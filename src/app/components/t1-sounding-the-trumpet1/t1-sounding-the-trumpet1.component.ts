import { Component } from '@angular/core';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'div[app-t1-sounding-the-trumpet1]',
  templateUrl: './t1-sounding-the-trumpet1.component.html',
  styleUrls: ['./t1-sounding-the-trumpet1.component.css']
})
export class T1SoundingTheTrumpet1Component extends TextComponent{

  override c_name = 'sounding-the-trumpet'
  override c_num = 1
  override c_end: boolean = false;

}
