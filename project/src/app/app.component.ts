import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeroComponent, ExperienceComponent, ProjectsComponent, ContactComponent],
  template: `
    <main class="bg-gray-900 min-h-screen">
      <app-hero></app-hero>
      <app-experience></app-experience>
      <app-projects></app-projects>
      <app-contact></app-contact>
    </main>
  `
})
export class AppComponent {
  title = 'modern-portfolio';
}