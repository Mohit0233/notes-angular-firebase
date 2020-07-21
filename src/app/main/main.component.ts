import { Component, OnInit } from '@angular/core';
import { ListsService } from "./lists.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ListsService]
})
export class MainComponent implements OnInit {
  lists:[{
    'name' : string, 'description' : string, 'listElements' : string[] }] 
    = [{ 'name': 'TestList', 'description': 'This is a test list', 'listElements': [] }];

  constructor(private listService:ListsService) { }

  ngOnInit(): void {
    this.lists=this.listService.lists
  }

}
