import { Component, OnInit,Input } from '@angular/core';
import { Company } from '../company/Company';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  @Input() selectedCompany: Company;
  constructor() { }

  ngOnInit() {
  }

}
