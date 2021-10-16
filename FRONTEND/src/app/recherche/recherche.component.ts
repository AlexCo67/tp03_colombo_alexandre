import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MonservService } from '../monserv.service';
import { Produit } from '../produit';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  recherche='';
  constructor(private monservService: MonservService) {}

  catalogue?: Observable<Array<Produit>>;

  ngOnInit() {
    this.catalogue = this.monservService.getCatalogue();
  }
}
