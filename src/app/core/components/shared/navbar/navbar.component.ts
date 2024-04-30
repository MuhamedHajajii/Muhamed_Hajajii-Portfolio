import { CommonModule } from '@angular/common';
import { Component, Output, output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Output() isSideBarOpen = new EventEmitter<boolean>();
  onClickOpenAside(): void {
    this.isSideBarOpen.emit(true);
  }
}
