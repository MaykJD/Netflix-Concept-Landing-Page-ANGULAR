import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-nav-filme',
  templateUrl: './nav-filme.component.html',
  styleUrls: ['./nav-filme.component.scss']
})
export class NavFilmeComponent implements OnInit {

  constructor() { }
  opaci(){
    $('#opac').css({'opacity':'0.5'})
  }
  ngOnInit(): void {
  }

}
