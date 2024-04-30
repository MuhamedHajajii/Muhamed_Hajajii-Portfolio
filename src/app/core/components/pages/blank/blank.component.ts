import { Component, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from '../../../core.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [RouterOutlet, CoreModule, CommonModule],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.scss',
})
export class BlankComponent {
  isSideBarOpen: boolean = false;
  onCloseSideBarClick(): void {
    if (this.isSideBarOpen == true) {
      this.isSideBarOpen = false;
    }
  }
  onClickSmallScreens(e: boolean): void {
    if (this.isSideBarOpen === false) {
      this.isSideBarOpen = e;
    } else {
      this.isSideBarOpen = false;
    }
  }
}
