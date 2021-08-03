import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProjectPageComponent } from "./project-page/project-page.component";
import { AddPageComponent } from "./add-page/add-page.component";
import { OrdersPageComponent } from "./orders-page/orders-page.component";
import { EditPageComponent } from "./edit-page/edit-page.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthGuard } from "../shared/auth.guard";
import { QuillModule } from 'ngx-quill';
import { SelectorComponent } from './project-page/selector/selector.component';
import { CalendarComponent } from './project-page/calendar/calendar.component';
import { OrganizerComponent } from './project-page/organizer/organizer.component';
import { MomentPipe } from "./project-page/shared/moment.pipe";


@NgModule ({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'project', component: ProjectPageComponent, canActivate: [AuthGuard]},
          {path: 'add', component: AddPageComponent, canActivate: [AuthGuard]},
          {path: 'orders', component: OrdersPageComponent, canActivate: [AuthGuard]},
          {path: 'product/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]}
        ]
      }
    ]),
  ],
  exports: [RouterModule],
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    ProjectPageComponent,
    AddPageComponent,
    OrdersPageComponent,
    EditPageComponent,
    SelectorComponent,
    CalendarComponent,
    OrganizerComponent,
    MomentPipe
  ]
})

export class AdminModule{

}