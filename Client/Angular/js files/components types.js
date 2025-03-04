///////////////////////////////////                class component                     /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// <app-icon-date [date]="post.date"></app-icon-date>
        
//ts 

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-date',
  templateUrl: './icon-date.component.html',
  styleUrls: ['./icon-date.component.css']
})
export class IconDateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public date: Date;

}

//html

<div>
    <p class="month">{{date | date:'monthHeb' }}</p>
    <p class="day">{{date | date:'day' }}</p>
</div>



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//  <app-header (OpenMenu)="changeMenuStatus()"></app-header>
                
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Output()
  public OpenMenu = new EventEmitter<string>(); // Our event

  public userOpenedMenu(): void {
    this.OpenMenu.emit(); // Raising the event - העלאת ארוע
  }
}