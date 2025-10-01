import { Component } from '@angular/core';

@Component({
  selector: 'app-lemans-page',
  standalone: true,
  templateUrl: './lemans-page.component.html',
  styleUrl: './lemans-page.component.css'
})
export class LemansPageComponent {
  protected readonly heroImage = 'url("/LEMANS-2.jpeg")';

  protected readonly stats = [
    { value: '24 horas', label: 'Duración total de carrera' },
    { value: '13.626 km', label: 'Longitud del circuito de La Sarthe' },
    { value: '16 zonas', label: 'Puestos de comisarios y slow zones' }
  ];

  protected readonly keyFacts = [
    'Tres categorías en pista: Hypercar, LMGT3 y LMP2 invitacional.',
    'Reglamento de Balance of Performance iguala la energía por vuelta entre prototipos.',
    'La noche concentra el 70% de los adelantamientos cuando baja la temperatura.'
  ];

  protected readonly teams = [
    {
      name: 'Toyota Gazoo Racing',
      detail: 'El GR010 Hybrid busca recuperar la corona con consistencia y paradas sin errores.'
    },
    {
      name: 'Ferrari AF Corse',
      detail: 'Ferrari 499P destaca por su velocidad punta en Hunaudières y trabajo de piloto nocturno.'
    },
    {
      name: 'Porsche Penske Motorsport',
      detail: 'LMDh con enorme eficiencia energética y experiencia en estrategia multicoche.'
    }
  ];

  protected readonly drivers = [
    { name: 'Brendon Hartley', highlight: 'Especialista en ritmo nocturno y gestión de tráfico.' },
    { name: 'Antonio Fuoco', highlight: 'Ferrari apuesta por su agresividad en clasificación Hyperpole.' },
    { name: 'Laurens Vanthoor', highlight: 'Piloto completo, rápido en lluvia y defensor del legado Porsche.' }
  ];

  protected readonly schedule = [
    { event: 'Test Day', date: '1 junio', detail: 'Primeras vueltas oficiales con pista abierta todo el día.' },
    { event: 'Hyperpole', date: '12 junio', detail: 'Sesión definitiva para definir las posiciones de salida.' },
    { event: 'Parade de los Pilotos', date: '13 junio', detail: 'Fiesta en el centro de Le Mans con aficionados y tripulaciones.' },
    { event: 'Carrera', date: '14-15 junio', detail: 'La resistencia máxima con amanecer mágico sobre la recta Mulsanne.' }
  ];

  protected readonly focus = [
    'Control de tráfico: gestionar la convivencia con GT más lentos sin perder tiempo.',
    'Gestión energética: respetar la energía por vuelta para evitar penalizaciones.',
    'Trabajo en boxes: cambios de piloto, recarga híbrida y ajustes aerodinámicos veloces.'
  ];

  protected readonly highlights = [
    { label: 'Paradas totales', value: '30+', detail: 'Relevos calculados para cubrir 3-4 stints por piloto.' },
    { label: 'Temperatura', value: '8-28 °C', detail: 'Cambios drásticos exigen ajustes de neumáticos constantes.' },
    { label: 'Espectadores', value: '300k', detail: 'Una ciudad entera se moviliza alrededor del circuito.' }
  ];

  protected readonly bannerImage = 'url("/LEMANS-3.png")';
}
