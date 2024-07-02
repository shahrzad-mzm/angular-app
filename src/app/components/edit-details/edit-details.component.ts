import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../../main.service';
import { interval,mergeMap } from 'rxjs';
import { FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  public detailsContent:any;
  public detailsId: any;

  editDetailsForm = this.fb.group({
    name: [""],
    salary:[""],
    age: [""],
    id: [""],

  });


  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute, private mainService: MainService) { }

  ngOnInit(): void {

    this.detailsId = this.activatedRoute.snapshot.paramMap.get('id');
    // interval(1 * 60 * 1000)
    // .pipe(
    //     mergeMap(() => this.mainService.getEmployeesDetails(this.detaisId))
    // )
    // .subscribe(data => console.log(data))
    this.mainService.getEmployeesDetails(this.detailsId).subscribe((response => {
     this.detailsContent=response;
    }))
  }

  sendEdit(){
  const params = { 
    name : this.editDetailsForm.get("name")?.value,
    salary: this.editDetailsForm.get("salary")?.value,
    age: this.editDetailsForm.get("age")?.value,
    id:this.editDetailsForm.get("id")?.value,
  };
this.mainService.getEdit(this.detailsId,params).subscribe((response=>{
  if (response.status === "success") {
    alert('درخواست شما با موفقیت انحام شد')
  } else {
    alert('درخواست شما ناموفق بود لطفا چند لحظه بعد دوباره امتحان کنید')
  }
}))
  }

}
