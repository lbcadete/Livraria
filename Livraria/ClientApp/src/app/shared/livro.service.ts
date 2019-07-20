import { Injectable } from '@angular/core';
import { Livro } from './livro.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  formData: Livro;
  readonly urlBase = 'http://localhost:64662/api';

  constructor(private http: HttpClient) { }

  postLivro(formData: Livro){
    return this.http.post(this.urlBase+"/Livro" ,formData);
  }
}
