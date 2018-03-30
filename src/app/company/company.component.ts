import { Component, OnInit } from '@angular/core';
import { Company } from './Company';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['../app.component.css','./company.component.css']
})
export class CompanyComponent implements OnInit {
  companyList: Company[];
  selectedCompany: Company;
 
  constructor(private companyService: CompanyService) {}
  
  getCompanyList(): void {
    this.companyService.getCompanyList().subscribe(companyList => this.companyList = companyList);    
  }
  onSelect(company: Company): void {
    this.selectedCompany = company;
  }
  ngOnInit() {
    this.getCompanyList();
  }

}
