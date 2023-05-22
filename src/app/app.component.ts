import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent:string | null = null;
  msgHijo:string = "";
  showImg = true;

  

  onLoaded(event: string):void{
    this.msgHijo = event;
  }

  toggleImg(){
    this.showImg = !this.showImg;
  }
}
