import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from './component/layout/side-bar/side-bar.component';
import { LoginPageComponent } from './component/layout/login-page/login-page.component';
import { DashboardComponent } from './component/layout/dashboard/dashboard.component';
import { HomeComponent } from './component/layout/home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'login',component: LoginPageComponent},
  {
    path:'',component:  DashboardComponent,
    children:[
      {path:'home',component:HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
