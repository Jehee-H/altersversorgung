import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isSticky: boolean = false;


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const stickyPosition = 170; // Position in Pixeln, ab wann die Navbar kleben soll

    if (offset > stickyPosition) {
      this.isSticky = true;

    } else {
      this.isSticky = false;

    }
  }

}
