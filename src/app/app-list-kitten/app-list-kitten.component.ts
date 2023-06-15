import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-app-list-kitten',
  templateUrl: './app-list-kitten.component.html',
  styleUrls: ['./app-list-kitten.component.css']
})
export class AppListKittenComponent {

  constructor (private appComponent: AppComponent) {}

  kittens = [
    { name: 'Chaton 1', race: 'Race 1', birthdate: '01/01/2022', photo: 'https://example.com/kitten1.jpg' },
    { name: 'Chaton 2', race: 'Race 2', birthdate: '02/02/2022', photo: 'https://example.com/kitten2.jpg' },
    { name: 'Chaton 3', race: 'Race 3', birthdate: '03/03/2022', photo: 'https://example.com/kitten3.jpg' }
  ];

  adoptKitten(kitten : any) {
    const index = this.kittens.indexOf(kitten);
    if (index !== -1) {
      this.kittens.splice(index, 1);
      // Ajouter le chaton à la liste des chatons adoptés par l'utilisateur
    }
  }

}
