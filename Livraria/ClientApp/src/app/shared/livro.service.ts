import { Injectable } from '@angular/core';
import { Livro } from './livro.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  formData: Livro;
  list: Livro[];
  readonly urlBase = 'http://localhost:64662/api';

  constructor(private http: HttpClient) { }

  postLivro(){
    return this.http.post(this.urlBase+"/Livro" ,this.formData);
  }

  putLivro(){
    return this.http.put(this.urlBase+"/Livro/"+this.formData.Id, this.formData);
  }

  deleteLivro(id: number){
    return this.http.delete(this.urlBase+"/Livro/"+id);
  }

  refresList(){
    this.http.get(this.urlBase+"/Livro")
      .toPromise()
      .then(resp => this.list = resp as Livro[]);
  }
}
