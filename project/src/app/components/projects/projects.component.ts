import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LucideAngularModule } from "lucide-angular";

interface Project {
     title: string;
     description: string;
     image: string;
     tech: string[];
     github?: string;
     demo?: string;
}

@Component({
     selector: "app-projects",
     standalone: true,
     imports: [CommonModule, LucideAngularModule],
     template: `
          <section class="py-20 bg-gray-800 text-white">
               <div class="max-w-6xl mx-auto px-8">
                    <h2
                         class="text-4xl font-bold text-center mb-16 animate-fade-in"
                    >
                         Featured Projects
                    </h2>

                    <div class="grid md:grid-cols-2 gap-8">
                         @for (project of projects; track project.title; let i =
                         $index) {
                         <div
                              class="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 animate-fade-in"
                              [style.animation-delay]="i * 0.2 + 's'"
                         >
                              <img
                                   [src]="project.image"
                                   [alt]="project.title"
                                   class="w-full h-48 object-cover"
                              />
                              <div class="p-6">
                                   <h3 class="text-xl font-semibold mb-3">
                                        {{ project.title }}
                                   </h3>
                                   <p class="text-gray-300 mb-4">
                                        {{ project.description }}
                                   </p>
                                   <div class="flex flex-wrap gap-2 mb-4">
                                        @for (tech of project.tech; track tech)
                                        {
                                        <span
                                             class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                                        >
                                             {{ tech }}
                                        </span>
                                        }
                                   </div>
                                   <div class="flex gap-4">
                                        @if (project.github) {
                                        <a
                                             [href]="project.github"
                                             class="text-gray-300 hover:text-white transition-colors"
                                        >
                                             <lucide-github
                                                  [size]="24"
                                             ></lucide-github>
                                        </a>
                                        } @if (project.demo) {
                                        <a
                                             [href]="project.demo"
                                             class="text-gray-300 hover:text-white transition-colors"
                                        >
                                             <lucide-external-link
                                                  [size]="24"
                                             ></lucide-external-link>
                                        </a>
                                        }
                                   </div>
                              </div>
                         </div>
                         }
                    </div>
               </div>
          </section>
     `,
     styles: [
          `
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
          `,
     ],
})
export class ProjectsComponent {
     projects: Project[] = [
          {
               title: "E-Learning Platform for Toddlers",
               description:
                    "Developed a speech recognition-based web app to assist toddlers in learning numbers, alphabets, and shapes.",
               image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
               tech: ["Angular", "TypeScript", "Python", "Flask"],
               github: "https://github.com/TSHA20/heykid",
          },
          {
               title: "Clothing Web Application",
               description:
                    "Developed an online clothing web application for Laksiri Batiks, enabling users to browse, filter, and purchase products seamlessly.",
               image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
               tech: ["React", "JavaScript", "MongoDB", "Express", "Node.js"],
               github: "https://github.com/yourusername/task-manager",
          },
     ];
}
