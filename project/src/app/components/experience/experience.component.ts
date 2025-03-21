import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  title: string;
  description: string;
  icon: any;
  tech: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-gray-900 text-white">
      <div class="max-w-6xl mx-auto px-8">
        <h2 class="text-4xl font-bold text-center mb-16 animate-fade-in">
          Professional Experience
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          @for (exp of experiences; track exp.title; let i = $index) {
            <div 
              class="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors animate-fade-in"
              [style.animation-delay]="i * 0.2 + 's'"
            >
              <ng-container [ngSwitch]="exp.icon">
                <lucide-code-2 *ngSwitchCase="'Code2'" class="w-12 h-12 text-blue-400 mb-4"></lucide-code-2>
                <lucide-database *ngSwitchCase="'Database'" class="w-12 h-12 text-blue-400 mb-4"></lucide-database>
                <lucide-test-tube *ngSwitchCase="'TestTube'" class="w-12 h-12 text-blue-400 mb-4"></lucide-test-tube>
              </ng-container>
              <h3 class="text-xl font-semibold mb-3">{{exp.title}}</h3>
              <p class="text-gray-300 mb-4">{{exp.description}}</p>
              <div class="flex flex-wrap gap-2">
                @for (tech of exp.tech; track tech) {
                  <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                    {{tech}}
                  </span>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .animate-fade-in {
      opacity: 0;
      animation: fadeIn 0.6s ease-out forwards;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: "Frontend Development",
      description: "Developed responsive web applications using Angular and TypeScript, React and JavaScript, implementing complex UI components and state management.",
      icon: "Code2",
      tech: ["Angular", "TypeScript", "React", "JavaScript", "Karma"]
    },
    {
      title: "Backend Development",
      description: "Built robust REST APIs using Java Spring Framework, implementing business logic and integrating with Oracle databases.",
      icon: "Database",
      tech: ["Java", "Spring", "Oracle", "Node.js", "Express", "Flask"]
    },
    {
      title: "Testing & Quality",
      description: "Implemented comprehensive unit tests using JUnit and Karma, ensuring code quality and maintaining test coverage.",
      icon: "TestTube",
      tech: ["JUnit", "Karma", "Testing"]
    }
  ];
}