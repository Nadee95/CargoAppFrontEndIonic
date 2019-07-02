import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cargoservices",
  templateUrl: "./cargoservices.page.html",
  styleUrls: ["./cargoservices.page.scss"]
})
export class CargoservicesPage implements OnInit {
  services = [
    {
      id: "01",
      name: "Service Provider #01",
      image: "../assets/images/s1.jpg",
      rating:"88"
    },
    {
      id: "02",
      name: "Service Provider #02",
      image: "../assets/images/s2.jpg",
      rating:"12"
    },
    {
      id: "03",
      name: "Service Provider #03",
      image: "../assets/images/s3.jpg",
      rating:"24"
    },
    { id: "04", name: "Service Provider #04", image: "../assets/images/s4.jpg",rating:"56" }
  ];

  constructor() {}

  ngOnInit() {}
}
