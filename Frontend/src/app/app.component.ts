import { Component, OnInit, ViewChild  } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { GlobalService } from './global.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
declare var $: any;

interface PeriodicElement {
  date: string;
  indian: number;
  usa: number;
  rate: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static:true}) sort: MatSort;
  
  displayedColumns: string[] = ['date', 'indian', 'usa', 'exchange'];
  file;
  ELEMENT_DATA: PeriodicElement[] = [
];

constructor(
    public global:GlobalService,
    private ngxService: NgxUiLoaderService) { 
    }
    
dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);



ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
 
 uploadFile(event) {
     var input:any = event.target.files;
     console.log(event)
     Array.from(event.target.files).forEach((item:Blob, i) => {
      var reader = new FileReader();
      reader.onload = ()=>{
        var dataURL:any = reader.result;
        this.file=event.target.files[0]
        this.update()
      }
      reader.readAsDataURL(item);
      })
   }

   update(){
     let newFormData = new FormData();
     newFormData.append("csv",this.file);
    this.ngxService.start();   
    this.global.post(
      "",
      newFormData,
      data => {
        this.ngxService.stop();
        console.log(data)
        if (data.status) {
         this.dataSource = new MatTableDataSource<PeriodicElement>(data.response);
        } else {
          this.global.showDangerToast("",data.message);
          console.log(data.message)
        }
      },
      err => {
        this.global.showDangerToast("", err.message);
      },
      true
    );

     }

 triggerFile(){
       $("#file-input").trigger('click');
  }
   
}
