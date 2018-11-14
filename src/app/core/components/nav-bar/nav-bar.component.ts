import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'sw-nav-bar',
  template: `
    <header class="w-full bg-white shadow-md fixed pin-t pin-l">
      <nav class="relative select-none flex items-stretch">
        <div class="flex flex-no-shrink items-stretch h-6x">
          <a routerLink=""
             class="text-black flex-no-grow flex-no-shrink relative py-1x px-2x leading-none no-underline flex items-center hover:bg-grey-lightest font-semibold">
            Star Search
          </a>
        </div>
        <div class="flex items-stretch flex-no-shrink flex-grow">
          <div class="flex items-stretch justify-end ml-auto">
            <p class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-none no-underline flex items-center">
              {{ user }}
            </p>
            <a *ngIf="!user"
               routerLink=""
               class="text-black flex-no-grow flex-no-shrink relative py-2 px-4 leading-none no-underline flex items-center hover:bg-pink-light">
              Login
            </a>
            <a *ngIf="!!user"
               routerLink=""
               class="text-black flex-no-grow flex-no-shrink relative py-2 px-4 leading-none no-underline flex items-center hover:bg-pink-light">
              Logout
            </a>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {

  @Input()
  user: string;
}
