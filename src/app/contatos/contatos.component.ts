import { Component, OnInit } from '@angular/core';
import { ContatoService } from './contato.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {
  contatos: Array<any>;
  constructor(private ContatoService: ContatoService) { }

  ngOnInit() {
    this.listar();
  }
  listar(){
    this.ContatoService.listar().subscribe(dados => this.contatos = dados);
  }
}
