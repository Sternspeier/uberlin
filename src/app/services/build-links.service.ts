import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuildLinksService {

  s_name = 'hello'
  s_num = 0
  s_end = false

  constructor() { }

  saveLocation(name: string, num: number, end: boolean){
    this.s_name = name;
    this.s_num = num;
    this.s_end = end;
  }

  consoleTest(){
    console.log(this.s_name)
    console.log(this.s_num)
  }

}
