import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';
import { BuildLinksService } from 'src/app/services/build-links.service'


@Component({
  selector: 'div[app-sidebar]',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  name = 'sidebar'
  num = 0

  p_disabled = false
  n_disabled = false

  prevLink = ''
  nextLink = ''

  constructor(private router: Router, private bLink: BuildLinksService) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { setTimeout(() => {
        this.name = this.bLink.s_name
        this.num = this.bLink.s_num
        if(this.name != '' && this.num != 0){
          this.makeLinks()
        }
      }, 10);
    }
    });
  }


  ngOnInit(): void {
    }

  makeLinks(){

    this.prevLink = '/' + this.name + '-' + (this.num -1)
    this.nextLink = '/' + this.name + '-' + (this.num + 1)

    if(this.num - 1 < 1) {
      this.p_disabled = true;
    } else {
      this.p_disabled = false;
      console.log('Route found');
    }

    if(this.bLink.s_end) {
      this.n_disabled = true;
      console.log('Route not found, redirection stopped with no error raised');
    } else {
      this.n_disabled = false;
    }

    return
  }

}