import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <section class="py-20 bg-gray-900 text-white">
      <div class="max-w-4xl mx-auto px-8">
        <h2 class="text-4xl font-bold text-center mb-16 animate-fade-in">
          Get In Touch
        </h2>

        <div class="bg-gray-800 p-8 rounded-lg animate-fade-in">
          <form class="space-y-6" (ngSubmit)="onSubmit()">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                [(ngModel)]="formData.name"
                class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your name"
              >
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                [(ngModel)]="formData.email"
                class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="your@email.com"
              >
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                [(ngModel)]="formData.message"
                rows="4"
                class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
              <lucide-send [size]="20"></lucide-send>
            </button>
          </form>
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
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Add your form submission logic here
  }
}