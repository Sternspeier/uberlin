import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mb-links',
  templateUrl: './mb-links.component.html',
  styleUrls: ['./mb-links.component.css']
})
export class MbLinksComponent implements OnInit {

  @Input() c_name = '';
  @Input() c_num = 0;
  @Input() c_end = true;

  constructor() { }

  ngOnInit(): void {
  }

}
