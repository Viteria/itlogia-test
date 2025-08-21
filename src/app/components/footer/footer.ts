import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgxMaskDirective, provideNgxMask} from 'ngx-mask';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-footer',
  imports: [
    ReactiveFormsModule,
    NgxMaskDirective
  ],
  templateUrl: './footer.html',
  standalone: true,
  styleUrl: './footer.scss',
  providers: [provideNgxMask()],
})
export class FooterComponent implements OnInit {

  orderForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,private http: HttpClient) {}

  ngOnInit() {
    this.orderForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required,]]
    });
  }

  onSubmit() {
    console.log('Form Data:', this.orderForm.value);
    this.http.post('url', this.orderForm.value);//example http
    this.orderForm.reset()
    alert('Спасибо за заказ')
  }

  blockDot(event: KeyboardEvent) {
    if (event.key === '.') {
      event.preventDefault();
    }
  }

}
