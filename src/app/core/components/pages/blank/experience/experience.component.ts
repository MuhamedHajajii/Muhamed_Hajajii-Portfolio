import { Component } from '@angular/core';
import { ExperienceService } from '../../../../Services/experience.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
constructor(public _ExperienceService:ExperienceService) {
  
}
}
