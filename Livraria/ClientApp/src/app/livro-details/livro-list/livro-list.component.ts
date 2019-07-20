import { Component, OnInit } from '@angular/core';
import { LivroService } from 'src/app/shared/livro.service';
import { Livro } from 'src/app/shared/livro.model';

@Component({
  selector: 'app-livro-list',
  templateUrl: './livro-list.component.html',
  styles: []
})
export class LivroListComponent implements OnInit {

  constructor(private service: LivroService) { }

  ngOnInit() {
    this.service.refresList();
  }

  preencherForm(livro: Livro){
    this.service.formData = Object.assign({}, livro);
  }
}
