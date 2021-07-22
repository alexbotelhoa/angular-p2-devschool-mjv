import { Component, Input, OnInit } from '@angular/core';
import { Colaborador } from './../../models/colaborador.models';

@Component({
  selector: 'app-contributor-card',
  templateUrl: './contributor-card.component.html',
  styleUrls: ['./contributor-card.component.css']
})
export class ContributorCardComponent implements OnInit {

  @Input()
  colaborador?: Colaborador;

  constructor() { }

  ngOnInit(): void {
  }

}
