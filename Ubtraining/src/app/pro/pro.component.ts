import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../products';
@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.css']
})
export class ProComponent implements OnInit {
  @Input()
  products: Products | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
