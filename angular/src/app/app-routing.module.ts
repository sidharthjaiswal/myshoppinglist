import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutAppComponent } from './about-app/about-app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
const routes: Routes =
  [
    {
      path: 'about-me',
      component: AboutMeComponent
    },
    {
      path: 'about-app',
      component: AboutAppComponent
    },
    { path: 'shopping-item', component: ShoppingItemComponent },

    { path: 'about-me', component: AboutMeComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
   // { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    //{ path: 'profile/:id', component: UserProfileComponent, canActivate: [AuthGuard] }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
