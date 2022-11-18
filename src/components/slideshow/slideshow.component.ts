import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images=["./assets/images/recruit.jpg", "./assets/images/scorer.jpg", "./assets/images/tiktok.jpg"];
  currentImage=0;
  loaded=0;

  onChangeCurrentImage(value: number){
    this.currentImage+=value;
    if (this.currentImage<0){
      this.currentImage=this.images.length-1;
    }
    if (this.currentImage>this.images.length-1){
      this.currentImage=0;
    }
  }

  onChangeCurrentImageFull(value: number){
    this.currentImage=value;
  }
  onLoad(){
    this.loaded++;
    console.log(this.loaded);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
