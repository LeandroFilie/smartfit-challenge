import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UnitService } from 'src/app/services/unit.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  results: any[] = [];
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private unitService: UnitService
  ) { }

  ngOnInit(): void {
    this.unitService.getAllUnits().subscribe(data => console.log({data})
    )
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false,
    })
  }

  onSubmit(): void {
    console.log(this.formGroup.value);
  }

  onClear(): void {
    this.formGroup.reset();
  }

}
