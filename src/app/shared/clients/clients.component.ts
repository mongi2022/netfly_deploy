import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  public clients:any;
  public config: SwiperConfigInterface = { };
  constructor(public appService:AppService) { }

  ngOnInit() {
   this.getClients()
  }
  getClients(){
     this.appService.getClients().subscribe(data=>{
      this.clients=data
      console.log(this.clients);
      
      
    });
  }
  


  ngAfterViewInit(){
    this.config = {
      observer: true,
      slidesPerView: 7,
      spaceBetween: 16,       
      keyboard: true,
      navigation: false,
      pagination: false,
      grabCursor: true,        
      loop: false,
      preloadImages: false,
      lazy: true,  
      autoplay: {
        delay: 6000,
        disableOnInteraction: false
      },
      speed: 500,
      effect: "slide",
      breakpoints: {
        320: {
          slidesPerView: 2
        },
        480: {
          slidesPerView: 3
        },
        600: {
          slidesPerView: 4
        },
        960: {
          slidesPerView: 5
        },
        1280: {
          slidesPerView: 6
        },
        1500: {
          slidesPerView: 7
        }
      }
    }
  }

}