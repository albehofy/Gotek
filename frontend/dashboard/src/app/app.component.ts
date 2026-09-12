import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from './components/shared/toast/toast.component';
import { ConfirmModalComponent } from './components/shared/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastComponent, ConfirmModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Media Glow Dashboard';

  ngOnInit() {
    try {
      const theme = localStorage.getItem('mediaglow_theme');
      if (theme === 'light') {
        document.documentElement.classList.add('light-theme');
        document.body.classList.add('light-theme');
      } else {
        document.documentElement.classList.remove('light-theme');
        document.body.classList.remove('light-theme');
      }
    } catch (e) {}
  }
}
