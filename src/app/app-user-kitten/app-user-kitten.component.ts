import { Component } from '@angular/core';

@Component({
  selector: 'app-app-user-kitten',
  templateUrl: './app-user-kitten.component.html',
  styleUrls: ['./app-user-kitten.component.css']
})
export class AppUserKittenComponent {

  userKittens = [
    { name: 'Chaton 1', photo: 'https://example.com/kitten1.jpg' },
    { name: 'Chaton 2', photo: 'https://example.com/kitten2.jpg' },
    { name: 'Chaton 3', photo: 'https://example.com/kitten3.jpg' }
  ];
  kittens: any;

  adoptKitten(kitten:any) {
    const index = this.kittens.indexOf(kitten);
    if (index !== -1) {
      this.kittens.splice(index, 1);
      this.userKittens.push(kitten);
    }
  }

}
