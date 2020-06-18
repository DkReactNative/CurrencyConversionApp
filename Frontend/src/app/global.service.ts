import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { ToastrService } from "ngx-toastr";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  apiUrl = environment.apiUrl;
 constructor(
    public http: Http,
    public toastrService: ToastrService,
   
  ) {
    toastrService["options"] = {
      preventDuplicates: true,
      preventOpenDuplicates: true
    };
  }

  public post(
    url,
    body,
    successCallback,
    failedCallback,
    loader = false,
    text = "Please wait..."
  ) {
    
    this.http
      .post(this.apiUrl + url, body)
      .map(res => res.json())
      .subscribe(
        data => {
         
          if (data.success ) {
            
          }
          successCallback(data);

        },
        err => {
         
          failedCallback(err);
        }
      );
  }


  showToast(title = "", message = "") {
    this.toastrService.success(title, message);
  }

  showDangerToast(title = "", message = "") {
    this.toastrService.error(title, message);
  }

  showWarningToast(title = "", message = "") {
    this.toastrService.warning(title, message);
  

}
}
