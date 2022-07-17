import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  animations: [
    trigger(
        'inOutAnimation',
        [
          transition(
              ':enter',
              [
                style({ transform: 'translateX(-400px)', opacity: 0}),
                animate('0.1s ease-out',
                    style({ transform: 'translateX(-10px)', opacity: 1}))
              ]
          ),
          transition(
              ':leave',
              [
                style({ transform: 'translateX(-10px)', opacity: 1}),
                animate('0.1s ease-in',
                    style({ transform: 'translateX(-400px)', opacity: 0}))
              ]
          )
        ]
    ),
  ]
})
export class SideBarComponent implements OnInit {

  showCall = false;
  showQuote = false;
  showDownload = false;
  showMail = false;
  showLinkedIn = false;

  constructor() { }

  ngOnInit(): void {
  }

  refreshDisplays() {
    this.showCall = this.showQuote = this.showDownload = this.showMail = this.showLinkedIn = false;
  }

  displayCallContent(iconName: string) {
    this.refreshDisplays();
    if (iconName === 'call') {
      this.showCall = true;
    } else if (iconName === 'quote') {
      this.showQuote = true;
    } else if (iconName === 'download') {
      this.showDownload = true;
    } else if (iconName === 'mail') {
      this.showMail = true;
    } else if (iconName === 'linkedIn') {
      this.showLinkedIn = true;
    }
  }

  hideCallContent() {
    this.refreshDisplays();
  }
}
