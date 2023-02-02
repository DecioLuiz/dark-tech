import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itemsCarrinho: IProdutoCarrinho[] = [];
  total = 0;
  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itemsCarrinho = this.carrinhoService.obtemCarrinho()
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.itemsCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  }

  removerProdutoCarrinho(produtoId: number){
    this.itemsCarrinho = this.itemsCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calcularTotal();
  }

  comprar() {
    alert("Parabéns! Compra finalizada!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }

}
