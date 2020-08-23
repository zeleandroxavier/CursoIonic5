import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl : AlertController) { }

  ngOnInit() {
  }
  async alert(){
    this.alertCtrl.create({});
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: "This is an alert message",
      buttons:['OK']
    });

    alert.present();
  }

  async multipleButton(){
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: "This is an alert message",
      buttons:['Cancel','Open Modal', 'Delete' ]
    });
    await alert.present();
  }

  async confirm(){
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: "Mensagem <strong>Texto aqui</strong>!!!",
      buttons:[
        {
          text:'Cancel',
          role:'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
          },  {
                text: 'Okay',
                handler: () => {
                console.log('Confirm Okay');
              }
          }
        ]
    });
    await alert.present();
  }

  async prompt(){
    const alert = await this.alertCtrl.create({
      header: 'Acesso Restrito',
      inputs: [
        {
          name: 'email',
          type: 'text',
          placeholder: 'Informe seu e-email'
        },
        {
          name: 'senha',
          type: 'password',
          id: 'senha',
          placeholder: 'Informe sua senha'
        }
      ],
      buttons : [
        {
          text: 'Cancelar',
          role: 'cancelar',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        { 
          text : 'OK',
          handler: (form) => {
            console.log(form);
          }
        }
      ]
    });
    await alert.present();
  }

}
