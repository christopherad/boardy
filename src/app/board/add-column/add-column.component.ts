import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-column',
  templateUrl: './add-column.component.html',
  styleUrls: ['./add-column.component.scss']
})
export class AddColumnComponent implements OnInit {

  @Output() onColumnAdded: EventEmitter<ColumnForm> = new EventEmitter();
  name = 'Angular';
  public form!: FormGroup


  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required])
    });
  }


  // method to remove specific item control by index into form.items FormArray
  removeItem(index: string): void {
    console.log('--->', index);
    const control = this.form.get('items') as FormArray;
    control.removeAt(+index);
  }

  submit(): void {
    console.log(this.form.value)
    const title = this.form.get("title")?.value;
    this.onColumnAdded.emit({title: title});
   // if (this.form.valid) {
     //   console.log('form value: ', this.form.value);
   // } else {
   //     console.log('ERROR, FAUT ECRIRE!  ');
  //  }
  }
}

  export interface ColumnForm {
    title: string;
  }