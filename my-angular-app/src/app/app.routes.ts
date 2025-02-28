import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component'
import { RegistrationComponent } from './pages/registration/registration.component'

export const routes: Routes = [
    {path: '', component: LoginComponent},
    { path: 'registrazione', component: RegistrationComponent }
];
