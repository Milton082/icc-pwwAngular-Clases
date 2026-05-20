import { Routes } from '@angular/router';

import { HomePage } from './features/home/pages/home-page/home-page';
import { StudentDetailPage } from './features/students/pages/student-detail-page/student-detail-page';
import { StudentPage } from './features/students/pages/student-page/student-page';
import { LayoutsPage } from './features/layouts/pages/layouts-page/layouts-page';
import { SignupPage } from './features/sign-up/page/signup-page/signup-page';

export const routes: Routes = [
  { path: ' ', component: HomePage },
  { path: 'students', component: StudentPage },
  { path: 'students/:id', component: StudentDetailPage },
  { path: 'layouts', component: LayoutsPage }, // <-- DEBE ESTAR AQUÍ
  { path: 'signup', component: SignupPage },
  //redireccionamiento
  { path: '**', redirectTo: ' ' },
];
