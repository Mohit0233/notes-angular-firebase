import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListsService} from './lists.service'

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  addingListStatus:boolean=false;
  indexToChild:number;

  @ViewChild('listNameInput') listName:ElementRef;
  @ViewChild('listDescriptionInput') listDescription:ElementRef;

  lists:[{'name' : string, 'description' : string, 'listElements' : string[] }];

  constructor(private listService:ListsService) { }

  ngOnInit(): void {
    this.lists=this.listService.lists
  }

  onDeleteList(i:number){
    if(confirm("You Sure You want to delete "+this.lists[i].name+" ?")){
      this.listService.onDeleteList(i);
      this.lists.splice(i,1);
    }
  }

  onAddList(){
    this.listService.onAddList(this.listName.nativeElement.value,
                              this.listDescription.nativeElement.value);
    this.addingListStatus=false;
  }

  onOpenList(index:number){
    this.indexToChild=index;
  }
}
