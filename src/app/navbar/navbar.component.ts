import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  @Output() valueChange = new EventEmitter();
  flag = true;
  valueChanged() { // You can give any function name
    this.flag = !this.flag;
    this.valueChange.emit(this.flag);
  }

  openDialog(tabvalue: number) {
    console.log(tabvalue);
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { tabvalue },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
@Component({
  selector: 'dialog-dialog',
  templateUrl: 'dialog.component.html',
})
export class DialogComponent {
  tabs = ['Login', 'Sign in'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  selected = this.data.tabvalue
}
