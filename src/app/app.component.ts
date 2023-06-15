import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kitten-story';
  kittens = [
    { name: 'Chaton 1', race: 'Race 1', birthdate: '01/01/2022', photo: 'https://example.com/kitten1.jpg' },
    { name: 'Chaton 2', race: 'Race 2', birthdate: '02/02/2022', photo: 'https://example.com/kitten2.jpg' },
    { name: 'Chaton 3', race: 'Race 3', birthdate: '03/03/2022', photo: 'https://example.com/kitten3.jpg' }
  ];
  addKitten(newKitten : any) {
    this.kittens.push(newKitten);
  }
  
}
