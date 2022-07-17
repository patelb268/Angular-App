import {Component, HostListener, EventEmitter, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-product-bird-diverter',
  templateUrl: './product-bird-diverter.component.html',
  styleUrls: ['./product-bird-diverter.component.scss'],
  animations: [
      trigger(
        'inOutAnimation',
        [
          transition(
              ':enter',
              [
                style({ transform: 'translateY(40px)', opacity: 0}),
                animate('0.6s ease-out',
                    style({ transform: 'translateY(0px)', opacity: 1}))
              ]
          ),
          transition(
              ':leave',
              [
                style({ transform: 'translateY(0px)', opacity: 1}),
                animate('0.6s ease-in',
                    style({ transform: 'translateY(-40px)', opacity: 0}))
              ]
          )
        ]
      ),
      trigger(
          'detailsAnimation1',
          [
              transition(
                  ':enter',
                  [
                      style({ transform: 'translateX(-40px)', opacity: 0}),
                      animate('0.5s ease-out',
                          style({ transform: 'translateX(0px)', opacity: 1}))
                  ]
              ),
              transition(
                  ':leave',
                  [
                      style({ transform: 'translateX(0px)', opacity: 1}),
                      animate('0.5s ease-in',
                          style({ transform: 'translateX(40px)', opacity: 0}))
                  ]
              )
          ]
      )
  ],
})
export class ProductBirdDiverterComponent implements OnInit {

    scrolledDown = false;
    fireflyWireframe1: any;
    windmillWings: any;
    clampDiv: any;
    featuresSubsection: any;
    showClampDetails = false;
    showUVDetails = false;
    showSizeDetails = false;
    showGlowDetails = false;

    @Output() scrollDownStatus = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
      this.clampDiv = document.getElementById('eff-clamp');
      this.featuresSubsection = document.getElementById('features-subsection');
      this.fireflyWireframe1 = document.getElementById('firefly-wireframe-1');
      this.windmillWings = document.getElementById('windmill-wings');
  }

  getMinimum(a: number, b: number): number {
      return a < b ? a : b;
  }

  toggleVisibility(scrollPosition: any, scrollValue: any) {
      if (scrollPosition > scrollValue) {
          return true;
      } else {
          return false;
      }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any){
      // this.scrolledDown = this.toggleVisibility(window.scrollY, 100);
      if (window.scrollY > 100) {
          this.scrolledDown = true;
          this.scrollDownStatus.emit(this.scrolledDown);
          this.windmillWings.style.top = '50%';
      } else {
          this.scrolledDown = false;
          this.scrollDownStatus.emit(this.scrolledDown);
          this.windmillWings.style.top = '53%';
      }
      // this.featuresSubsection.style.overflow = this.toggleVisibility(window.scrollY, 844) ? 'auto' : 'hidden';
      if (window.scrollY >= 845) {
          this.featuresSubsection.style.overflow = 'auto';
      } else {
          this.featuresSubsection.style.overflow = 'hidden';
          this.fireflyWireframe1.style.left = window.scrollY/20 + 'px';
          this.fireflyWireframe1.style.height = (95 + (window.scrollY/20)) + 'vh';
      }
      this.showClampDetails = this.toggleVisibility(window.scrollY, 320);
      this.clampDiv.style.padding = this.getMinimum(30, window.scrollY/20) + 'px';
  }

  featuresSubsectionScrolled($event: any) {
      console.log($event.target.scrollTop);
      // @ts-ignore
      document.querySelector('body').style.overflow = this.toggleVisibility($event.target.scrollTop, 0) ? 'hidden' : 'auto';
      // if ($event.target.scrollTop > 0) {
      //     // @ts-ignore
      //     document.querySelector('body').style.overflow = 'hidden';
      // } else {
      //     // @ts-ignore
      //     document.querySelector('body').style.overflow = 'auto';
      // }
      // this.showUVDetails => 330
      // this.showSizeDetails => 1140
      // this.showGlowDetails => 2160
      this.showUVDetails = this.toggleVisibility($event.target.scrollTop, 400);
      this.showSizeDetails = this.toggleVisibility($event.target.scrollTop, 1200);
      this.showGlowDetails = this.toggleVisibility($event.target.scrollTop, 2220);
  }

}
