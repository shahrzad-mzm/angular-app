import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public employeesList = ([] as any[]);

  constructor(private mainService: MainService) {
  }


  ngOnInit(): void {
    this.mainService.getEmployee().subscribe((res) => {
      this.employeesList=res.data;
    })
  }
}
