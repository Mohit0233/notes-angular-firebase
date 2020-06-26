import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  showFiller = false;
  tt = true;
  @ViewChild('drawer') sidenav: MatSidenav;
  constructor() { }

  toggleCustom( t) {
    console.log(t);
    this.sidenav.toggle();
  }

  ngOnInit(): void {
  }

}
