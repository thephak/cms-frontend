import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'CMS API';
  backend_url = "http://localhost:8000";
  contents: JSON = null;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getContents();
  }

  getContents() {
    this.appService.getContents().subscribe(contents => this.contents = contents);
  }

}
