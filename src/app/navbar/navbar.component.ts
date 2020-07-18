import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  //Dialog init
  constructor(public dialog: MatDialog) { }

// useless code but don't remove please
//  @Output() valueChange = new EventEmitter();
//  flag = true;
//  valueChanged() { // You can give any function name
//    console.log("Emitter emitting");
//    this.flag = !this.flag;
//    this.valueChange.emit(this.flag);
//  }

  flag: boolean;

  //dialog properties for init dialog
  openDialog(tabvalue: number) {
    console.log(tabvalue);
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { tabvalue },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  //just to see whether the value of flag is changing when clicked on Menu button 
  value() {
    console.log(this.flag);
  }

  //Init the value of flag here
  ngOnInit(): void {
    this.flag = true;
  }

}

// Instead of dialog.component.ts i just appended it here because it's is shown in official docs of Angular
@Component({
  selector: 'dialog-dialog',
  templateUrl: 'dialog.component.html',
})
export class DialogComponent {
  tabs = ['Login', 'Sign in'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  selected = this.data.tabvalue
}
