import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-welkin-header',
  templateUrl: './welkin-header.component.html',
  styleUrls: ['./welkin-header.component.scss']
})
export class WelkinHeaderComponent implements OnInit, OnChanges {

  @Input() scrolledDown = false;

  navBarDiv: any;
  logoImage: any;
  logoDiv: any;
  navOptionDiv: any;

  constructor() {
  }

  ngOnInit(): void {
    this.navBarDiv = document.getElementById('welkin-nav-bar');
    this.logoImage = document.getElementById('main-logo');
    this.logoDiv = document.getElementById('logo-div');
    this.navOptionDiv = document.getElementsByClassName('nav-option');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.scrolledDown && (changes.scrolledDown.currentValue === true || changes.scrolledDown.currentValue === false)) {
      if (this.scrolledDown) {
        if (this.navBarDiv && this.logoImage && this.logoDiv && this.navOptionDiv) {
          this.navBarDiv.style.height = '70px';
          this.logoImage.style.width = '65px';
          this.logoDiv.style.lineHeight = '4.4';
          // tslint:disable-next-line:prefer-for-of
          for (let i=0; i<this.navOptionDiv.length; i++) {
            this.navOptionDiv[i].style.padding = '1rem 0';
          }
          // this.navOptionDiv.forEach((el: any) => el.style.padding = '1rem 0');
        }
      } else {
        if (this.navBarDiv && this.logoImage && this.logoDiv && this.navOptionDiv) {
          this.navBarDiv.style.height = '100px';
          this.logoImage.style.width = '100px';
          this.logoDiv.style.lineHeight = '6';
          // tslint:disable-next-line:prefer-for-of
          for (let i=0; i<this.navOptionDiv.length; i++) {
            this.navOptionDiv[i].style.padding = '2rem 0';
          }
        }
      }
    }
  }

}
