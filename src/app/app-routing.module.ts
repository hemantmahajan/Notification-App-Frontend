import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeiwComponent } from './View/veiw/veiw.component';

const routes: Routes = [  
  { path: '', redirectTo: '/view', pathMatch: 'full' },
  { path: 'view', component: VeiwComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
