import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivroDetailsComponent } from './livro-details/livro-details.component';
import { LivroDetailComponent } from './livro-details/livro-detail/livro-detail.component';
import { LivroListComponent } from './livro-details/livro-list/livro-list.component';
import { LivroService } from './shared/livro.service';

@NgModule({
  declarations: [
    AppComponent,
    LivroDetailsComponent,
    LivroDetailComponent,
    LivroListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LivroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
