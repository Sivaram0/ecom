import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './component/add-contact/add-contact.component';
import { ContactManagerComponent } from './component/contact-manager/contact-manager.component';
import { EditContactComponent } from './component/edit-contact/edit-contact.component';
import { ViewContactComponent } from './component/view-contact/view-contact.component';
import { AboutComponent } from './components/about/about.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MennComponent } from './components/menn/menn.component';
import { WomennComponent } from './components/womenn/womenn.component';

const routes: Routes = [
  {path:'', component:AdminDashboardComponent,
   children:[
       {path:'home', component:HomeComponent},
       {path:'about',component:AboutComponent},
       {path:'menn',component:MennComponent},
       {path:'womenn',component:WomennComponent},
       {path:'contact',component:ContactComponent},
       {path:'contact-manager',component:ContactManagerComponent},
       {path:'add-contact',component:AddContactComponent},
       {path:'edit-contact',component:EditContactComponent},
       {path:'view-contact',component:ViewContactComponent},
       {path:'',redirectTo:'/admin/home',pathMatch:'full'},
   ],  
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }