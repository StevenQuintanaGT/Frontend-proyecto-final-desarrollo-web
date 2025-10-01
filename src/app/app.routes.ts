import { Routes } from '@angular/router';

import { HomePageComponent } from './pages/home/home-page.component';
import { F1PageComponent } from './pages/f1/f1-page.component';
import { WrcPageComponent } from './pages/wrc/wrc-page.component';
import { NascarPageComponent } from './pages/nascar/nascar-page.component';
import { MotogpPageComponent } from './pages/motogp/motogp-page.component';
import { LemansPageComponent } from './pages/lemans/lemans-page.component';
import { LoginPageComponent } from './pages/login/login-page.component';

export const routes: Routes = [
	{ path: '', component: HomePageComponent, title: 'MOTORMANIA · Inicio' },
	{ path: 'f1', component: F1PageComponent, title: 'MOTORMANIA · Fórmula 1' },
	{ path: 'wrc', component: WrcPageComponent, title: 'MOTORMANIA · WRC' },
	{ path: 'nascar', component: NascarPageComponent, title: 'MOTORMANIA · NASCAR' },
	{ path: 'motogp', component: MotogpPageComponent, title: 'MOTORMANIA · MotoGP' },
	{ path: 'lemans', component: LemansPageComponent, title: 'MOTORMANIA · 24H Le Mans' },
	{ path: 'login', component: LoginPageComponent, title: 'MOTORMANIA · Login' },
	{ path: '**', redirectTo: '' }
];
