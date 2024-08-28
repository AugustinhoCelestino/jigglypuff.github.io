import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../shared/material/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ana-maria-resume',
  standalone: true,
  templateUrl: './ana-maria-resume.component.html',
  styleUrls: ['./ana-maria-resume.component.scss'],
  imports: [MaterialModule, CommonModule, FormsModule],
})
export class AnaMariaResumeComponent implements OnInit {
  info_types: any = [];
  constructor() {}

  ngOnInit() {
    this.info_types = [
      {
        title: 'Basic Info',
        infos: [
          {
            labelPT: 'CPF',
            valuePT: '415.586.888-11',
            labelEN: 'CPF',
            valueEN: '415.586.888-11',
            selected: true,
          },
          {
            labelPT: 'Data de Nascimento',
            valuePT: '24/05/1993 (31 Anos)',
            labelEN: 'Birth Date',
            valueEN: 'May 24th, 1993. (31 yo)',
            selected: true,

          },
          {
            labelPT: 'RG',
            valuePT: '48.933.351-5',
            labelEN: 'RG',
            valueEN: '48.933.351-5',
            selected: true,

          },
          {
            labelPT: 'Naturalidade',
            valuePT: 'São José dos Campos - São Paulo',
            labelEN: 'Citizenship',
            valueEN: 'São José dos Campos - São Paulo',
            selected: true,

          },
          {
            labelPT: 'Celular',
            valuePT: '+55 (12) 98858-3383',
            labelEN: 'Cell Phone',
            valueEN: '+55 (12) 98858-3383',
            selected: true,

          },
          {
            labelPT: 'E-mail',
            valuePT: 'augustinhocelestino@gmail.com',
            labelEN: 'E-mail',
            valueEN: 'augustinhocelestino@gmail.com',
            selected: true,

          },
          {
            labelPT: 'Endereço',
            valuePT: 'Av. Malek Assad 956, Jardim Santa Maria - Jacareí',
            labelEN: 'Address',
            valueEN: 'augustinhocelestino@gmail.com',
            selected: true,

          },
          {
            labelPT: 'CEP',
            valuePT: '12328-080',
            labelEN: 'Zip code',
            valueEN: '12328-080',
            selected: true,

          },
        ],
      },
    ];
  }
}
