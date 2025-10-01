import { Component, signal } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgClass, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'MOTORMANIA';
  protected readonly menuOpen = signal(false);
  protected readonly navLinks = [
    { label: 'Inicio', path: '/', exact: true },
    { label: 'F1', path: '/f1' },
    { label: 'WRC', path: '/wrc' },
    { label: 'NASCAR', path: '/nascar' },
    { label: 'MotoGP', path: '/motogp' },
    { label: '24H Le Mans', path: '/lemans' },
    { label: 'Login', path: '/login' }
  ];
  protected readonly currentYear = new Date().getFullYear();

  protected toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
