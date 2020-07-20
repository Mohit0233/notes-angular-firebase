import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, Params, NavigationEnd } from '@angular/router';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  flag: boolean;
  currentDialog: MatDialogRef<any> = null;

  //Dialog init
  constructor(public dialog: MatDialog, private route: ActivatedRoute, private router: Router) {
    //console.log("♥ router", this.router.url);
    //console.log("this.currentDialog",this.currentDialog);
    //if (this.currentDialog != 'null')
    //  console.log("get dialog state", this.currentDialog.getState);
    if (this.router.url == '/login') {
      this.openDialog(0);
    } else if (this.router.url == '/signin') {
      this.openDialog(1);
    }

   }

  //dialog properties for init dialog
  openDialog(tabvalue: number) {
    console.log(tabvalue);
    //if (!this.dialog.openDialogs || !this.dialog.openDialogs.length) return;
    //console.log(this.dialog.openDialogs);
    //console.log(this.dialog.openDialogs.length);
    if (this.dialog.openDialogs.length != 0) return;
    this.currentDialog = this.dialog.open(DialogComponent, {
      data: {tabvalue},
    });

    this.currentDialog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.router.navigateByUrl('/');
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
  links = [
    { link: 'login', tab: this.tabs[0] },
    { link: 'signin', tab: this.tabs[1] }
  ];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  // tabvalue have only two values 0 -> tabs[0] -> Login and 1 -> tabs[1] -> SignIn
  c() {
    console.log("working");
    if (this.selected == 0) {
      this.selected = 1;
    }
    else {
      this.selected = 0;
    }
  }
  onC(a) {
    console.log("one zero", a);
  }
  selected = this.data.tabvalue
}
