import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-app-create-kitten',
  templateUrl: './app-create-kitten.component.html',
  styleUrls: ['./app-create-kitten.component.css']
})
export class AppCreateKittenComponent {
  constructor (private appComponent: AppComponent) {}
  addKitten(event : any) {
    event.preventDefault();
    const name = event.target.name.value;
    const race = event.target.race.value;
    const birthdate = event.target.birthdate.value;
    const photo = event.target.photo.value;
    const newKitten = { name, race, birthdate, photo };
    this.appComponent.addKitten(newKitten);
    // Ajouter le nouveau chaton à la collection globale
  }
}