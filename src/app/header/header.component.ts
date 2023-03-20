import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  clickOpne():void{
    let clic=document.querySelector("#content-modal");
     clic?.classList.remove("content-modal");
  }

  clickClose():void{
    let clic=document.querySelector("#content-modal");
     clic?.classList.add("content-modal");
  }

}

