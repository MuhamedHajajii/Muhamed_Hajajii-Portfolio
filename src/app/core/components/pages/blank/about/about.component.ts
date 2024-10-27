import { Component } from '@angular/core';
import { AboutService } from '../../../../Services/about.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.scss',
    '/node_modules/papercss/dist/paper.min.css',
  ],
})
export class AboutComponent {
  constructor(public _AboutService:AboutService){}
}
