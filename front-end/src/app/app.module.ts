import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { MatToolbarModule} from  '@angular/material/toolbar';
import { StoreComponent } from './components/store/store.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { HeaderAdminComponent } from './admin/header-admin/header-admin.component';
import { ManageAdminsComponent } from './admin/manage-admins/manage-admins.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { ManageSalesComponent } from './admin/manage-sales/manage-sales.component';
import { MatTableModule } from '@angular/material/table'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { DialogDeleteProductComponent } from './admin/dialog-delete-product/dialog-delete-product.component';
import { DialogAlterProductComponent } from './admin/dialog-alter-product/dialog-alter-product.component';
import { MatInputModule } from '@angular/material/input';
import { DialogCreateProductComponent } from './admin/dialog-create-product/dialog-create-product.component';
import { DialogAlterUserComponent } from './admin/dialog-alter-user/dialog-alter-user.component';
import { DialogDeleteUserComponent } from './admin/dialog-delete-user/dialog-delete-user.component';
import { DialogCreateUserComponent } from './admin/dialog-create-user/dialog-create-user.component';
import { DialogChooseProductComponent } from './components/dialog-choose-product/dialog-choose-product.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthInterceptor } from './security/auth.interceptor';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatSelectModule } from '@angular/material/select';
import { KartComponent } from './components/kart/kart.component';
import { DialogFinalizeComponent } from './components/dialog-finalize/dialog-finalize.component';
import { DialogDeleteChooseProductComponent } from './components/dialog-delete-choose-product/dialog-delete-choose-product.component';
import { SpecialComponent } from './components/special/special.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    StoreComponent,
    HomeAdminComponent,
    HeaderAdminComponent,
    ManageAdminsComponent,
    ManageUsersComponent,
    ManageProductsComponent,
    ManageSalesComponent,
    DialogDeleteProductComponent,
    DialogAlterProductComponent,
    DialogCreateProductComponent,
    DialogAlterUserComponent,
    DialogDeleteUserComponent,
    DialogCreateUserComponent,
    DialogChooseProductComponent,
    NotFoundComponent,
    KartComponent,
    DialogFinalizeComponent,
    DialogDeleteChooseProductComponent,
    SpecialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSlideToggleModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
