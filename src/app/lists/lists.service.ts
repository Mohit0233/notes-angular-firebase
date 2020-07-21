import { Injectable } from "@angular/core";

@Injectable()

export class ListsService{
    lists:[{
        'name':string,
        'description':string,
        'listElements':string[]
    }]= [{ 'name': 'TestList', 'description': 'This is a test list', 'listElements': [] }];

    onAddList(receivedName:string,receiveDescription:string){
        this.lists.push({'name': receivedName,
                         'description': receiveDescription, 
                         'listElements':[]
                        });
    }

    onDeleteList(i:number){
        this.lists.splice(i,0);
    }

    onAddListElement(i:number , element:string){
        this.lists[i].listElements.push(element);
    }

    onDeleteElement(listsIndex:number,listElementsIndex:number){
        delete this.lists[listsIndex].listElements[listElementsIndex];
    }
}