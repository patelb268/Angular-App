import {AfterViewInit, Component} from '@angular/core';
// import SmoothScrollbar from 'smooth-scrollbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'welkin';
  scrolledDown = false;

  ngAfterViewInit() {
    // SmoothScrollbar.init(document.getElementById('mainContainer') as HTMLElement, {});
    // scrollBar.updatePluginOptions('overscroll', {
    //   effect: 'glow',
    //   damping: 0.14,
    //   maxOverscroll: 300,
    //   glowColor: '#222a2d'
    // });
    // console.log(scrollBar);
  }

  scrolledDownUpdate($event: any) {
    this.scrolledDown = $event;
  }
}
