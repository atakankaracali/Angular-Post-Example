import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name:String | undefined
  result:String | undefined


  constructor(private http:HttpClient){

  }


  postData(): void{
    let url = "http://httpbin.org/post"
    this.http.post(url,{
      name:this.name
    }).toPromise().then((data: any) => {
      console.log(data)
      console.log(JSON.stringify(data.json.name))
      this.result = JSON.stringify(data.json.name)

    }) 

  }
}
