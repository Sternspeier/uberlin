import { Component } from '@angular/core';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'app-t2-sounding-the-trumpet2',
  templateUrl: './t2-sounding-the-trumpet2.component.html',
  styleUrls: ['./t2-sounding-the-trumpet2.component.css']
})
export class T2SoundingTheTrumpet2Component extends TextComponent {

  override c_name = 'sounding-the-trumpet'
  override c_num = 2;
  override c_end: boolean = true;

}
