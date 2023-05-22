import { Component, Input, Output, EventEmitter, OnInit, OnDestroy , SimpleChange, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnDestroy, OnChanges{

  img: string = "";
 
  @Input('imagen')
  set changeImg(newImg: string){
    this.img = newImg;
  }

  //@Input('imagen') img?:string | null;
  @Output('loadedImg') loaded = new EventEmitter<string>();
  imageDefault = "../../../assets/images/default-img.png";
  counter = 0;
  counterFunction: number | undefined;

  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
    console.warn("CAMBIOS:",changes)
  }

  ngOnInit(): void {
    /*this.counterFunction = window.setInterval(()=>{
      this.counter += 1;
    },1000);*/
  }


  imageError():void{
    this.img = this.imageDefault;
  }

  imgLoaded():void{
    this.loaded.emit("Imagen Cargada");
  }

  ngOnDestroy(): void {
    /*console.warn("DESTRROY");
    window.clearInterval(this.counterFunction);*/
  }


}
