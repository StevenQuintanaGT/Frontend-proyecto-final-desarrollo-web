import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {
  protected readonly teamMembers = [
    {
      name: 'Equipo Editorial',
      role: 'Redacción y Contenido Premium',
      description: 'Periodistas especializados y expertos en automovilismo con décadas de experiencia cubriendo las principales competencias mundiales, desde el paddock hasta la línea de meta.'
    },
    {
      name: 'Equipo Técnico',
      role: 'Desarrollo y Tecnología',
      description: 'Desarrolladores e ingenieros apasionados por el motor y la innovación tecnológica, trabajando incansablemente para ofrecerte la plataforma más rápida y confiable.'
    },
    {
      name: 'Analistas Deportivos',
      role: 'Análisis y Estadísticas',
      description: 'Especialistas en análisis de datos, telemetría y rendimiento deportivo que transforman números en insights valiosos para profundizar tu conocimiento del automovilismo.'
    }
  ];

  protected readonly values = [
    {
      icon: '🎯',
      title: 'Precisión',
      description: 'Información verificada, datos exactos en tiempo real y fuentes confiables'
    },
    {
      icon: '❤️',
      title: 'Pasión',
      description: 'Amor genuino por el automovilismo y dedicación en cada detalle'
    },
    {
      icon: '🌍',
      title: 'Comunidad Global',
      description: 'Conectando fans de todas partes del mundo en una sola familia'
    },
    {
      icon: '⚡',
      title: 'Innovación',
      description: 'Tecnología de vanguardia para la experiencia más inmersiva'
    }
  ];
}
