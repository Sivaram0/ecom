import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { MennComponent } from './components/menn/menn.component';
import { WomennComponent } from './components/womenn/womenn.component';
import { FormsModule } from '@angular/forms';
import { ContactManagerComponent } from './component/contact-manager/contact-manager.component';
import { AddContactComponent } from './component/add-contact/add-contact.component';
import { EditContactComponent } from './component/edit-contact/edit-contact.component';
import { ViewContactComponent } from './component/view-contact/view-contact.component';
import { SpinnerComponent } from './component/spinner/spinner.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    MennComponent,
    WomennComponent,
    ContactManagerComponent,
    AddContactComponent,
    EditContactComponent,
    ViewContactComponent,
    SpinnerComponent,
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
