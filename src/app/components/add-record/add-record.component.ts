import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  addRecordForm = this.fb.group({
    name: [""],
    salary: [""],
    age: [""],
    id: [""],

  });
  constructor(private fb: FormBuilder, private mainService: MainService) { }

  ngOnInit(): void {
  }

  addRecord() {
    const params = {
      employee_name: this.addRecordForm.get("employee_name")?.value,
      employee_salary: this.addRecordForm.get("employee_salary")?.value,
      employee_age: this.addRecordForm.get("employee_age")?.value,
      id: this.addRecordForm.get("id")?.value,
    };
    this.mainService.addRecord(params).subscribe((response => {
      if (response.status === "success") {
        alert('درخواست شما با موفقیت انحام شد')
      } else {
        alert('درخواست شما ناموفق بود لطفا چند لحظه بعد دوباره امتحان کنید')
      }
    }))
  }
}
