import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doReorder(ev: any){
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    ev.dentail.complete();
  }

  togleReorderGroup(){
    this.reorderGroup.disable = !this.togleReorderGroup.disabled;
  }

}
