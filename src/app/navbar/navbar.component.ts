import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  flag: boolean;
  currentDialog: MatDialogRef<any> = null;
  //destroy = new Subject<any>();
  //router: Router;

  //Dialog init
  constructor(public dialog: MatDialog, private route: ActivatedRoute, private router: Router) {
    //route.params.pipe(takeUntil(this.destroy)).subscribe(params => {
    //  if (this.currentDialog) {
    //    this.currentDialog.close();
    //  }

      //this.currentDialog = matDialog.open(DialogComponent, {
      //  data: {tabvalue},
    //})
  //})
      //this.router = router;
      //console.log(this.router)
      //console.log(params)
      //console.log(params.id)

   }


  //ngOnDestroy() {
  //  this.destroy.next()
  //}

  //dialog properties for init dialog
  openDialog(tabvalue: number) {
    console.log(tabvalue);
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
    this.route.params.subscribe(params => {
      /*if (params["login"] == true) {
        this.openDialog(0);
      }
      if (params["signup"] == true) {
        this.openDialog(1);
      }*/
      console.log("route", this.route);
      console.log("params", params);
      console.log("snapshot", this.route.snapshot);
      console.log("URL", this.route.url);
      console.log("querryParams", this.route.queryParams);
      console.log("component", this.route.component);
      console.log("FirstChild", this.route.firstChild);
      console.log("children", this.route.children);
      console.log("this", this);
      console.log("paramsMap", this.route.paramMap);
      console.log("data", this.route.data)
      console.log("fragment", this.route.fragment);
      console.log("outlet", this.route.outlet);
      console.log("pathFromRoot", this.route.pathFromRoot);
      console.log("parent", this.route.parent);
      console.log("queryParamMap", this.route.queryParamMap)
      console.log("root", this.route.root);
      console.log("routeconfig", this.route.routeConfig);
    });
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

  // tabvalue have only two values 0 -> tabs[0] -> Login and 1 -> tabs[1] -> SignIn
  selected = this.data.tabvalue
}
