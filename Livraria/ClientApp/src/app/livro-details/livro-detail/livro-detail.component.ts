import { Component, OnInit } from '@angular/core';
import { LivroService } from 'src/app/shared/livro.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-livro-detail',
  templateUrl: './livro-detail.component.html',
  styles: []
})
export class LivroDetailComponent implements OnInit {

  constructor(private service: LivroService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
       Id: 0,
       Nome: ''
    };
  }

  onSubmit(form: NgForm){
    this.service.postLivro(form.value).subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err);
      }
    );
  }

}
