import {Component, OnDestroy} from '@angular/core';
import {HeaderComponent} from '../components/header/header';
import {FooterComponent} from '../components/footer/footer';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {ImgViewer} from '../components/img-viewer/img-viewer';

@Component({
  selector: 'app-home-page',
  imports: [
    HeaderComponent,
    FooterComponent,
    ImgViewer,
  ],
  templateUrl: './home-page.html',
  standalone: true,
  styleUrl: './home-page.scss'
})
export class HomePage implements OnDestroy{
  pizzaList: any = [];
  selectedImage: string | null = null;
  subscriptions: Subscription[] = [];

  constructor(private http: HttpClient) {
    this.subscriptions.push(this.getJSON().subscribe(data => {
      this.pizzaList = data
    }));
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/pizzas.json");
  }

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }
  ngOnDestroy(){
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
