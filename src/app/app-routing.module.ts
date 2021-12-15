import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { UsersTableComponent } from './components/users-table/users-table.component';

const routes: Routes = [
  {path : '' , component : UsersTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
