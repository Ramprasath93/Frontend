import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  myForm:FormGroup  | any;

  createData:any;
  patchData:any;

  
  updateData:any;


  constructor(private fb:FormBuilder,private service:ApiService,private route:Router,public router:ActivatedRoute) { 

    this.patchData=this.router.snapshot.paramMap.get('id');
    console.log(this.patchData);
    

    this.service.getSingleData(this.patchData).subscribe((res)=>{
      console.log(res);
      

      this.myForm.patchValue({

        username:res.data[0].username,
        employeecode:res.data[0].employeecode,
        usermail:res.data[0].usermail,
        usermobile:res.data[0].usermobile

      })
    })



  }

  ngOnInit(): void {

    this.myForm=this.fb.group({
      username:['',Validators.required],
      employeecode:['',Validators.required],
      usermail:['',Validators.required],
      usermobile:['',Validators.required]
    })
  }

  

  myFormSubmit(){
    if(this.myForm.valid){
      console.log(this.myForm.value);

      this.service.createMydata(this.myForm.value).subscribe((res)=>{

        this.createData=res.data;

        this.myForm.reset();

        alert("Create the data successfully")
        
        this.route.navigateByUrl('/read')

      })
      
    }
  }

  updateFormSubmit(){

    this.service.updateMyData(this.myForm.value,this.patchData).subscribe((res)=>{

      console.log(res,"Update the Data successfully");

      this.updateData=res.data;

      alert("Update the Data successfully")

      this.route.navigateByUrl('/read');

      
      
    })

  }
}
