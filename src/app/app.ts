import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  //Criando um objeto da biblioteca Http Client
  httpClient = inject(HttpClient);
  
  //Atributo parar capturar o nome do produto
  nomeProduto: string = ' ';

  //Função para ser executada quando o botão de pesquisa for clicado
  pesquisarProdutos(){
    
    //Fazendo uma requisição HTTP GET para consultar os produtos na API
    this.httpClient
    .get('http://localhost:8081/api/v1/produtos/listar?nome=' + this.nomeProduto)
    .subscribe((data) => {//Capturando a resposta da API
      console.log(data); //Exibindo a resposta no console do navegador
    });
  }
  
}
