import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FormUserComponent } from './pages/form-user/form-user.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { MatDialogModule } from "@angular/material/dialog";
import { PlanFormComponent } from './pages/plan-form/plan-form.component';
import { from } from 'rxjs';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/';
import { environment } from 'src/environments/environment';
import { AsignacionPlanComponent } from './pages/asignacion-plan/asignacion-plan.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    TableComponent,
    DashboardComponent,
    FormUserComponent,
    LoginFormComponent,
    PopUpComponent,
    PlanFormComponent,
    AsignacionPlanComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    LayoutModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatDialogModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [PopUpComponent],

})
export class AppModule { }
