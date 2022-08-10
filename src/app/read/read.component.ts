import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  getData:any;

  deleteMessage:any;

  constructor(private service:ApiService) { }

  ngOnInit(): void {
    this.getTheData();
    
  }

  deleteReadData(userid:number){
    this.service.deleteMyData(userid).subscribe((res)=>{

      console.log(res,"res==>");
      
      this.deleteMessage=res.message;

      alert("Data Deleted Successfully");

      this.getTheData();
    })
  }


  getTheData(){
    this.service.getMydata().subscribe((res)=>{

      console.log(res,"res==>");

      this.getData=res.data;

    
      

    })

  }

}
