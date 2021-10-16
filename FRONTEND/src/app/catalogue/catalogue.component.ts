import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MonservService } from '../monserv.service';
import { Produit } from '../produit';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent implements OnInit {
  constructor(private monservService: MonservService) {}

  catalogue?: Observable<Array<Produit>>;

  ngOnInit() {
    this.catalogue = this.monservService.getCatalogue();
  }
}
