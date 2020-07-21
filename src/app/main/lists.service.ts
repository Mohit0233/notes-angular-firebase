import { Injectable } from "@angular/core";

@Injectable()

export class ListsService{
    lists:[{
        'name':string,
        'description':string,
        'listElements':string[]
    }]

    onAddList(receivedName:string,receiveDescription:string){
        this.lists.push({'name': receivedName,
                         'description': receiveDescription, 
                         'listElements':[]
                        });
    }

    onDeleteList(i:number){
        delete this.lists[i];
    }

    onAddListElement(i:number , element:string){
        this.lists[i].listElements.push(element);
    }

    onDeleteElement(listsIndex:number,listElementsIndex:number){
        delete this.lists[listsIndex].listElements[listElementsIndex];
    }
}