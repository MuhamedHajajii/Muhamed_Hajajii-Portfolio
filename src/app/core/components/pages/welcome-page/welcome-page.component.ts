import { CommonModule } from '@angular/common';
import { Component, Host } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxTypedJsModule } from 'ngx-typed2';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [NgxTypedJsModule, CommonModule, RouterLink],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss',
  host: { ngSkipHydration: 'true' },
})
export class WelcomePageComponent {
  isTypeingCompleted: boolean = false;
  onTypingCompletedAdd(): void {
    this.isTypeingCompleted = true;
  }
}
