import { Component } from '@angular/core';

@Component({
  selector: 'app-motogp-page',
  standalone: true,
  templateUrl: './motogp-page.component.html',
  styleUrl: './motogp-page.component.css'
})
export class MotogpPageComponent {
  protected readonly heroImage = 'url("/MOTOGP-2.jpg")';

  protected readonly stats = [
    { value: '356 km/h', label: 'Récord de velocidad punta' },
    { value: '21 carreras', label: 'Calendario MotoGP 2025' },
    { value: '62º', label: 'Ángulo máximo de inclinación registrado' }
  ];

  protected readonly keyFacts = [
    'Prototipos de 1000 cc, cuatro cilindros y electrónica unificada por Magneti Marelli.',
    'Neumáticos Michelin con compound específico para sprint y carrera larga.',
    'Cada fin de semana incluye sprint race el sábado y carrera principal el domingo.'
  ];

  protected readonly teams = [
    {
      name: 'Ducati Lenovo Team',
      detail: 'Paquete aerodinámico con alerones dobles y récords en rectas largas.'
    },
    {
      name: 'Aprilia Racing',
      detail: 'RS-GP con gran agarre en curvas rápidas, Viñales y Espargaró siempre en el podio.'
    },
    {
      name: 'Red Bull KTM',
      detail: 'Gran salida de curvas gracias al chasis tubular y evolución constante.'
    }
  ];

  protected readonly riders = [
    { name: 'Francesco Bagnaia', highlight: 'Bicampeón buscando el tricampeonato con ritmo demoledor en sprint.' },
    { name: 'Jorge Martín', highlight: 'Explosivo a una vuelta; especialista en meterse a la pole position.' },
    { name: 'Marc Márquez', highlight: 'Nuevo capítulo con Ducati satélite, vuelve el rey de los adelantamientos imposibles.' }
  ];

  protected readonly calendar = [
    { event: 'Gran Premio de Qatar', date: '7-9 marzo', track: 'Lusail International Circuit' },
    { event: 'Gran Premio de España', date: '25-27 abril', track: 'Jerez - Ángel Nieto' },
    { event: 'Gran Premio de Argentina', date: '4-6 julio', track: 'Termas de Río Hondo' },
    { event: 'Gran Premio de Valencia', date: '14-16 noviembre', track: 'Circuit Ricardo Tormo' }
  ];

  protected readonly focus = [
    'Aerodinámica con alerones delanteros, difusores y dispositivos de altura para maximizar aceleración.',
    'Gestión electrónica: control de tracción, anti-wheelie y mapas de motor adaptados a cada curva.',
    'Paquetes de frenos de carbono Brembo que requieren calentar discos a más de 250 °C.'
  ];

  protected readonly highlights = [
    { label: 'Sprint en juego', value: '12 pts', detail: 'Sábado entrega puntos cruciales para el campeonato.' },
    { label: 'Pit lane', value: '50 km/h', detail: 'Límite estricto con penalizaciones inmediatas.' },
    { label: 'Espectadores', value: '200k', detail: 'Multitudes récord en Mugello y Silverstone.' }
  ];

  protected readonly bannerImage = 'url("/MOTOGP-1.jpeg")';
}
