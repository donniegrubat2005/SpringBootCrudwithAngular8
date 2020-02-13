import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmplistComponent } from './main/pages/emplist/emplist.component';
import { CreateComponent } from './main/pages/create/create.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: EmplistComponent },
  { path: 'create', component: CreateComponent },
  { path: '**', redirectTo: 'home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents =[
  EmplistComponent,
  
]

