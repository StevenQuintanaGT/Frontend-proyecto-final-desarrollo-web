import { Component } from '@angular/core';

@Component({
  selector: 'app-nascar-page',
  standalone: true,
  templateUrl: './nascar-page.component.html',
  styleUrl: './nascar-page.component.css'
})
export class NascarPageComponent {
  protected readonly heroImage = 'url("/NASCAR-2.jpeg")';

  protected readonly stats = [
    { value: '38 carreras', label: 'Temporada completa incluyendo playoffs' },
    { value: '4 etapas', label: 'Stages por carrera con puntos extra' },
    { value: '320 km/h', label: 'Velocidad máxima en superspeedways' }
  ];

  protected readonly keyFacts = [
    'Los autos Next Gen usan chasis tubular, carrocería simétrica y caja secuencial de 5 marchas.',
    'Sistema de etapas (stages) reparte puntos parciales y mantiene la emoción hasta la bandera a cuadros.',
    'Playoffs con 16 pilotos y eliminación progresiva hasta la Championship 4.'
  ];

  protected readonly teams = [
    {
      name: 'Hendrick Motorsports',
      detail: 'Chevrolet Camaro dominantes en circuitos intermedios; Larson y Byron en forma.'
    },
    {
      name: 'Joe Gibbs Racing',
      detail: 'Toyota Camry con setups versátiles y estrategia de combustible impecable.'
    },
    {
      name: 'Team Penske',
      detail: 'Ford Mustang Dark Horse con gran velocidad en clasificaciones y pit crews letales.'
    }
  ];

  protected readonly drivers = [
    {
      name: 'Kyle Larson',
      highlight: 'Maestro del control deslizante; referencia en óvalos de alta carga.'
    },
    {
      name: 'Ryan Blaney',
      highlight: 'Actual campeón, siempre fuerte en etapas finales y restarts.'
    },
    {
      name: 'Bubba Wallace',
      highlight: 'Protagonista en superspeedways, mostró gran ritmo en Daytona y Talladega.'
    }
  ];

  protected readonly calendar = [
    { event: 'Daytona 500', date: '16 febrero', track: 'Daytona International Speedway' },
    { event: 'Coca-Cola 600', date: '25 mayo', track: 'Charlotte Motor Speedway' },
    { event: 'Chicago Street Race', date: '6 julio', track: 'Circuito callejero de Chicago' },
    { event: 'Championship Race', date: '16 noviembre', track: 'Phoenix Raceway' }
  ];

  protected readonly focus = [
    'Ajustes aerodinámicos con spoiler trasero variable según el tamaño del óvalo.',
    'Estrategia de combustible y neumáticos frescos al final de cada stage.',
    'Drafting y bump drafting coordinado para avanzar en paquetes cerrados.'
  ];

  protected readonly highlights = [
    { label: 'Pit Stop promedio', value: '9.5 s', detail: 'Nuevas pistolas de impacto y llantas de tuerca única.' },
    { label: 'Fans en circuito', value: '150k', detail: 'Afluencia récord en la Daytona 500 2025.' },
    { label: 'Circuitos road', value: '6', detail: 'Cada vez más fechas fuera de los óvalos clásicos.' }
  ];

  protected readonly bannerImage = 'url("/NASCAR-3.avif")';
}
