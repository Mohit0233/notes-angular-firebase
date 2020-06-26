import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  @Output() valueChange = new EventEmitter();
    flag = true;
    valueChanged() { // You can give any function name
        this.flag = !this.flag;
        this.valueChange.emit(this.flag);
    }
  constructor() { }

  ngOnInit(): void {
  }

}
