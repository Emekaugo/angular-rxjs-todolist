import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';

// import httpclientmodule to be able to perform http requests
import { HttpClientModule } from '@angular/common/http';

// import forms module to be able to use 2-way [(binding)]
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [AppComponent, TodosComponent, FormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, //  add into imports the formsmodule to be accessible from the components
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
