import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ParkingComponent } from './parking/parking.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: '', canActivate: [AuthGuard], component: HomeComponent },
    //     children: [
    //         { path: 'parking', component: ParkingComponent, canActivate: [AuthGuard] },
    //         { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }]
    // },
    { path: 'login', component: LoginComponent },
    { path: 'parking', component: ParkingComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
