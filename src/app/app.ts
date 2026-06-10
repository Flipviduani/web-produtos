import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule, CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  //Criando um objeto da biblioteca Http Client
  httpClient = inject(HttpClient);

  //Variável Signal para armazenar a lista de produtos obtidos na API
  produtos = signal<any[]>([]);
  
  //Atributo parar capturar o nome do produto
  nomeProduto: string = '';

  //Função para ser executada quando o botão de pesquisa for clicado
  pesquisarProdutos(){
    
    //Fazendo uma requisição HTTP GET para consultar os produtos na API
    this.httpClient
    .get<any[]>('http://localhost:8081/api/v1/produtos/listar?nome=' + this.nomeProduto)
    .subscribe((data) => {//Capturando a resposta da API
      //Armazenar os dados obtidos da API no SIGNAL
      this.produtos.set(data);
    });
  }
  
}
