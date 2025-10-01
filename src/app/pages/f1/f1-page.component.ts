import { Component } from '@angular/core';

@Component({
  selector: 'app-f1-page',
  standalone: true,
  templateUrl: './f1-page.component.html',
  styleUrl: './f1-page.component.css'
})
export class F1PageComponent {
  protected readonly heroImage = 'url("/F1-2.jpeg")';

  protected readonly stats = [
    { value: '360 km/h', label: 'Velocidad punta con DRS' },
    { value: '20', label: 'Curvas promedio por circuito' },
    { value: '24', label: 'Grandes premios en 2025' }
  ];

  protected readonly keyFacts = [
    'Motores híbridos V6 de 1.6 litros con sistema ERS mejorado.',
    'Presupuesto limitado a 135 millones USD que nivela la competencia.',
    'Nuevas regulaciones aerodinámicas para facilitar adelantamientos rueda a rueda.'
  ];

  protected readonly teams = [
    {
      name: 'Oracle Red Bull Racing',
      detail: 'RB21 con efecto suelo optimizado y control de degradación de neumáticos sobresaliente.'
    },
    {
      name: 'Scuderia Ferrari',
      detail: 'Estrategia agresiva con Leclerc/Sainz y paquete aerodinámico específico para circuitos callejeros.'
    },
    {
      name: 'Mercedes-AMG Petronas',
      detail: 'Nueva filosofía de chasis con pontones amplios y desarrollo constante en simulador.'
    }
  ];

  protected readonly drivers = [
    {
      name: 'Max Verstappen',
      highlight: 'Tricampeón buscando romper el récord histórico de victorias consecutivas.'
    },
    {
      name: 'Charles Leclerc',
      highlight: 'Poleman habitual con gran desempeño en clasificación nocturna.'
    },
    {
      name: 'Lando Norris',
      highlight: 'McLaren mantiene ritmo consistente y su primera victoria ya no es sorpresa.'
    }
  ];

  protected readonly calendar = [
    { event: 'Gran Premio de Bahréin', date: '1-3 marzo', track: 'Circuito Internacional de Sakhir' },
    { event: 'Gran Premio de España', date: '23-25 mayo', track: 'Circuit de Barcelona-Catalunya' },
    { event: 'Gran Premio de México', date: '24-26 octubre', track: 'Autódromo Hermanos Rodríguez' },
    { event: 'Gran Premio de Las Vegas', date: '20-22 noviembre', track: 'Las Vegas Strip Circuit' }
  ];

  protected readonly techFocus = [
    'Mapeo híbrido más eficiente para recuperar energía en frenadas cortas.',
    'Simulaciones CFD dedicadas a encontrar flujos limpios debajo del monoplaza.',
    'Paradas en boxes por debajo de 2.0 segundos como estándar competitivo.'
  ];

  protected readonly highlights = [
    { label: 'Récord mundial', value: '1.82 s', detail: 'Pit stop más rápido realizado por McLaren en Catar 2024.' },
    { label: 'Pilotos rookies', value: '2', detail: 'Oliver Bearman y Theo Pourchaire debutan a tiempo completo.' },
    { label: 'Puntos en juego', value: '660', detail: 'Más puntos que nunca con sprints en 6 fines de semana.' }
  ];

  protected readonly bannerImage = 'url("/F1-3.jpeg")';
}
