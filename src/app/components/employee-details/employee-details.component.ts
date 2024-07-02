import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../../main.service';
import { interval, mergeMap } from 'rxjs';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  detilsParametr: any;
  public detailsId: any;

  constructor(private activatedRoute: ActivatedRoute, private mainService: MainService) { }

  ngOnInit(): void {
    this.detailsId = this.activatedRoute.snapshot.paramMap.get('id');
    // interval(1 * 60 * 1000)
    // .pipe(
    //     mergeMap(() => this.mainService.getEmployeesDetails(this.detailsId))
    // )
    // .subscribe(data => console.log(data))
    this.mainService.getEmployeesDetails(this.detailsId).subscribe((response => {
      if (response.status === "success") {
        this.detilsParametr = response;
        console.log(this.detilsParametr)
      } 
      
      else {

        // alert('درخواست شما ناموفق بود لطفا چند لحظه بعد دوباره امتحان کنید');
      }
    }))
  }

}
