import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  visibleList: boolean = false;
  item: string[] = ['arti', 'jiri', 'sumi', 'antxi oues monxtxi'];
  
  toggleList () {
    this.visibleList = !this.visibleList;
  }
}
