import { Component, signal } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, NgClass, NgIf],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  protected readonly featuredCategories = [
    {
      id: 'f1',
      title: 'Fórmula 1',
      description: 'Gran circo, velocidad pura y estrategias milimétricas en los circuitos más icónicos del planeta.',
      image: '/F1.jpg',
      route: '/f1'
    },
    {
      id: 'wrc',
      title: 'World Rally Championship',
      description: 'Terrenos extremos, etapas cronometradas y pilotos que dominan barro, nieve y grava.',
      image: '/WRC.jpg',
      route: '/wrc'
    },
    {
      id: 'nascar',
      title: 'NASCAR Cup Series',
      description: 'Óvalos infinitos, adelantamientos rueda a rueda y espectáculo estadounidense sin límites.',
      image: '/NASCAR.jpg',
      route: '/nascar'
    },
    {
      id: 'motogp',
      title: 'MotoGP',
      description: 'La élite del motociclismo: inclinaciones imposibles, frenadas al filo y batallas épicas.',
      image: '/MOTOGP.png',
      route: '/motogp'
    },
    {
      id: 'lemans',
      title: '24 Horas de Le Mans',
      description: 'Resistencia máxima, trabajo en equipo y prototipos volando toda una noche en La Sarthe.',
      image: '/LEMANS.jpg',
      route: '/lemans'
    }
  ];

  protected readonly newsFlash = [
    'Max Verstappen clava la pole en Suzuka con récord absoluto del trazado.',
    'El WRC aterriza en Chile con nuevas zonas de espectadores y tramos nocturnos.',
    'Hendrick Motorsports domina en Daytona y suma histórico 1-2-3.',
    'Francesco Bagnaia vuelve a liderar el campeonato tras una carrera perfecta en Misano.',
    'Toyota confirma a López, Conway y Kobayashi para defender la corona en Le Mans 2025.'
  ];

  protected readonly submitted = signal(false);

  protected onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);
  }

  protected resetMessage(): void {
    if (this.submitted()) {
      this.submitted.set(false);
    }
  }
}
