import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doRefresh(event) {
    console.log('Inicio do Processamento');

    setTimeout(() => {
      console.log('Fim do processamendo');
      event.target.complete();
    }, 2000);
  }

}
