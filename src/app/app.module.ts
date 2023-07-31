import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateBookComponent } from './update-book/update-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { LibraryuserListComponent } from './libraryuser-list/libraryuser-list.component';
import { CreateLibraryuserComponent } from './create-libraryuser/create-libraryuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { SearchuserComponent } from './searchuser/searchuser.component';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { CreatebookissueComponent } from './createbookissue/createbookissue.component';
import { CreatebookreturnComponent } from './createbookreturn/createbookreturn.component';
import { UserrecordComponent } from './userrecord/userrecord.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CreateBookComponent,
    UpdateBookComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserComponent,
    LibraryuserListComponent,
    CreateLibraryuserComponent,
    UpdateuserComponent,
    SearchuserComponent,
    SearchbookComponent,
    CreatebookissueComponent,
    CreatebookreturnComponent,
    UserrecordComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
