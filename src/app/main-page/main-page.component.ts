import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent  {
  userName: string = "";
  response: any;

  constructor(private http: HttpClient) {

  }
  search() {
    this.http.get('https://api.github.com/users/' + this.userName)
    .subscribe((response)=>{
      this.response = response;
      console.log(this.response);
    })
  }
}