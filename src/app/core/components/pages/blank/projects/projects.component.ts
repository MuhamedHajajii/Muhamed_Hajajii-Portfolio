import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { ProjectsService } from '../../../../Services/projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  constructor(
    private _Renderer2: Renderer2,
    public _ProjectsService: ProjectsService
  ) {}

  @ViewChildren('projLightBox') projLightBox!: QueryList<ElementRef>;

  onProjectBannerClick(e: any, event: Event): void {
    event.stopPropagation();
    e.classList.toggle('show');
    this.projLightBox.forEach((projLightBox: ElementRef) => {
      if (projLightBox.nativeElement.children[0] != e) {
        this._Renderer2.removeClass(
          projLightBox.nativeElement.children[0],
          'show'
        );
      }
    });
  }

  onAllProjectBannerClick(e: any): void {
    this.projLightBox.forEach((projLightBox: ElementRef) => {
      if (projLightBox.nativeElement.children[0] != e) {
        this._Renderer2.removeClass(
          projLightBox.nativeElement.children[0],
          'show'
        );
      }
    });
  }
}
