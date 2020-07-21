import { Component, OnInit } from '@angular/core';
import { ListsService } from "../lists/lists.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ListsService]
})
export class MainComponent implements OnInit {
  constructor(private listService:ListsService) { }

  ngOnInit(): void {}

}
