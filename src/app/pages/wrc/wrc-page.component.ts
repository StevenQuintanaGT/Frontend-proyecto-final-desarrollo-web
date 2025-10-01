import { Component } from '@angular/core';

@Component({
  selector: 'app-wrc-page',
  standalone: true,
  templateUrl: './wrc-page.component.html',
  styleUrl: './wrc-page.component.css'
})
export class WrcPageComponent {
  protected readonly heroImage = 'url("/WRC-2.jpeg")';

  protected readonly stats = [
    { value: '13 rallies', label: 'Calendario 2025 alrededor del mundo' },
    { value: '500 km', label: 'Promedio de tramos cronometrados por fecha' },
    { value: 'Híbridos', label: 'Potencia extra con boost eléctrico Rally1' }
  ];

  protected readonly keyFacts = [
    'Autos Rally1 híbridos con 500 hp combinados y tracción integral.',
    'Nuevos neumáticos sostenibles con fibras de origen biológico.',
    'Power Stage entrega 5 puntos extra para los más rápidos del domingo.'
  ];

  protected readonly teams = [
    {
      name: 'Toyota Gazoo Racing',
      detail: 'El GR Yaris Rally1 sigue siendo referencia en fiabilidad y ritmo en grava.'
    },
    {
      name: 'Hyundai Shell Mobis',
      detail: 'Neuville lidera un equipo agresivo en asfalto con mejoras en suspensión.'
    },
    {
      name: 'M-Sport Ford',
      detail: 'El Puma Rally1 apuesta por jóvenes talentos y estrategia arriesgada.'
    }
  ];

  protected readonly drivers = [
    {
      name: 'Kalle Rovanperä',
      highlight: 'El campeón finlandés regresa a tiempo completo buscando un tercer título.'
    },
    {
      name: 'Thierry Neuville',
      highlight: 'Consistencia absoluta; lidera la tabla tras Montecarlo y Suecia.'
    },
    {
      name: 'Ott Tänak',
      highlight: 'Siempre rápido en las especiales de grava pesada y clima extremo.'
    }
  ];

  protected readonly calendar = [
    { event: 'Rally de Montecarlo', date: '23-26 enero', terrain: 'Asfalto de montaña' },
    { event: 'Rally de Croacia', date: '17-20 abril', terrain: 'Asfalto técnico y variable' },
    { event: 'Rally de Chile', date: '25-28 septiembre', terrain: 'Bosques rápidos y superficie abrasiva' },
    { event: 'Rally de Japón', date: '20-23 noviembre', terrain: 'Asfalto estrecho entre bosques' }
  ];

  protected readonly focus = [
    'Gestión energética: activar el boost híbrido en salidas de curvas lentas es crucial.',
    'Notas de pacenotes cada 25 metros permiten atacar sin referencias visuales.',
    'Neumáticos Pirelli Scorpion con clavos opcionales para tramos de nieve.'
  ];

  protected readonly highlights = [
    { label: 'Saltos épicos', value: '55 m', detail: 'Record en el clásico salto de Ouninpohja en Finlandia.' },
    { label: 'Service Park', value: '45 min', detail: 'Tiempo máximo para reparar el auto entre secciones.' },
    { label: 'Nuevos fans', value: '+30%', detail: 'Aumento en asistencia presencial en tramos latinoamericanos.' }
  ];

  protected readonly bannerImage = 'url("/WRC-3.jpg")';
}
