import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageHtmlDirective } from './manage-html.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ManageHtmlDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directiveDemo';
}
