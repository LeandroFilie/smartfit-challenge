import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UnitService } from '../../services/unit.service';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit {
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
