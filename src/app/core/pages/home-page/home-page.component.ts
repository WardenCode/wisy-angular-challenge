import { Component } from '@angular/core';
import { Link } from '../../interfaces/link.interface';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  public links: Link[] = [
    { label: 'Kansas', path: '/weather/TOP' },
    { label: 'Columbia', path: '/weather/LWX' },
  ];
}
