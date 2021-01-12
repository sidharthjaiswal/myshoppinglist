import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutAppComponent } from './about-app/about-app.component';
import { AboutMeComponent } from './about-me/about-me.component';
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
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
