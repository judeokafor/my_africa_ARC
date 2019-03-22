import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OtherTodosComponent } from "./components/other-todos/other-todos.component";
import { UserinfoComponent } from "./components/userinfo/userinfo.component";
import { ContactusComponent } from "./components/contactus/contactus.component";
import { UserdetailsComponent } from "./components/userdetails/userdetails.component"

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'other-todos', component: OtherTodosComponent
  },
  {
    path: 'userinfo', component: UserinfoComponent
  },
  {
    path: 'contactus', component: ContactusComponent
  },
  {
    path: 'details/:id', component: UserdetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
