import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnChanges {

  // show filter is used to extend the sidenav
  showFiller = false;

  // it's like document.getElementById("drawer") and name it sidenav 
  @ViewChild('drawer') sidenav: MatSidenav;

  //BreakpointObserver is a property use by isHandset$ to do it's functioning
  constructor(private breakpointObserver: BreakpointObserver) { }


  // Trying to toggle sidenav when there is a change in flag value of parent component (navbar)
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (propName === 'flag')
        this.sidenav.toggle();
    }
  }

  // This is made to test that sidenav.toggle() works or not
  //chg() {
  //  this.sidenav.toggle();
  //}

  //For making sidebar responsible isHandset$ is a Observable used when there is any change is the width (Laptop width, Mobile width) it changes properties of sidebar 
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
