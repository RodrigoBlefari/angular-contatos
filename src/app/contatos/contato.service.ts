import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  contatosUrl = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<any[]>(`${this.contatosUrl}`);
  }
}
