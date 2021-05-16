import { Component, OnInit, ViewChild } from "@angular/core";
import { IplResponse } from "../shared/model/ipl-response";
import { SharedService } from "../shared/shared.service";

@Component({
  selector: "welcome-component",
  templateUrl: "./welcome.component.html",
})
export class WelcomeComponent implements OnInit {

  constructor(private sharedService: SharedService) {}
  
  ngOnInit(): void {}
}
