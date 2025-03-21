import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LucideAngularModule } from "lucide-angular";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
     selector: "app-hero",
     standalone: true,
     imports: [CommonModule, LucideAngularModule],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
     template: `
          <section
               class="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8"
          >
               <div class="max-w-4xl mx-auto text-center">
                    <div class="animate-fade-in-down">
                         <h1 class="text-5xl md:text-7xl font-bold mb-6">
                              Software Engineer
                         </h1>
                         <p class="text-xl md:text-2xl text-gray-300 mb-8">
                              Final Year Student at Informatics Institute of
                              Technology
                         </p>
                    </div>

                    <div
                         class="flex justify-center gap-6 mb-12 animate-fade-in"
                    >
                         <a
                              href="https://github.com/yourusername"
                              class="hover:text-blue-400 transition-colors"
                         >
                              <lucide-github [size]="32"></lucide-github>
                         </a>
                         <a
                              href="https://linkedin.com/in/yourusername"
                              class="hover:text-blue-400 transition-colors"
                         >
                              <lucide-linkedin [size]="32"></lucide-linkedin>
                         </a>
                         <a
                              href="mailto:your.email@example.com"
                              class="hover:text-blue-400 transition-colors"
                         >
                              <lucide-mail [size]="32"></lucide-mail>
                         </a>
                    </div>

                    <div
                         class="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm animate-fade-in-up"
                    >
                         <h2 class="text-2xl font-semibold mb-4">
                              Experience Highlight
                         </h2>
                         <p class="text-gray-300">
                              Full Stack Software Engineer Intern at DirectFN -
                              From June 2023 to June 2024
                              <br />
                              <span class="text-blue-400"
                                   >Angular • TypeScript • Karma • Java • Spring
                                   • JUnit • Oracle</span
                              >
                         </p>
                    </div>
               </div>
          </section>
     `,
     styles: [
          `
               .animate-fade-in-down {
                    animation: fadeInDown 0.8s ease-out;
               }

               .animate-fade-in {
                    animation: fadeIn 0.8s ease-out 0.5s both;
               }

               .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out 0.8s both;
               }

               @keyframes fadeInDown {
                    from {
                         opacity: 0;
                         transform: translateY(-20px);
                    }
                    to {
                         opacity: 1;
                         transform: translateY(0);
                    }
               }

               @keyframes fadeIn {
                    from {
                         opacity: 0;
                    }
                    to {
                         opacity: 1;
                    }
               }

               @keyframes fadeInUp {
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
export class HeroComponent {}
