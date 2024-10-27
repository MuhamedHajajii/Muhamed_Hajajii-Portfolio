import { Component } from '@angular/core';
import { ExperienceService } from '../../../../Services/experience.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
constructor(public _ExperienceService:ExperienceService) {
  
}
}
