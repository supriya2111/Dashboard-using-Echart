import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuotaService } from 'src/app/Services/qouta.service';
import { Quota } from 'src/app/interfaces/quota.interface';

@Component({
  selector: 'app-table-comp',
  templateUrl: './table-comp.component.html',
  styleUrls: ['./table-comp.component.css']
})
export class TableCompComponent implements OnInit {

  storageUsages = [1, 2, 3, 4];

  singleUserQuota!: Quota;
  
  userList : Quota[] =[];
  userList$ =this.quotaService.userPerquota$

  reactiveForm!: FormGroup;
  nameEntered: boolean = false;
  formStatus: any;

  constructor(private fb:FormBuilder,
    private router: Router,
    private quotaService: QuotaService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
  
    this.reactiveForm=this.fb.group({
      username : ['',[Validators.required]]
    });

    this.reactiveForm.statusChanges.subscribe((value) => {
      console.log(value);
      this.formStatus = value;
    });

    this.quotaService.userPerquota$.subscribe((data: any)=>{
      this.userList = data;
    })

  }

  getName():void{
   // this.nameEntered = this.reactiveForm.get('username')?.value.trim() !== '';
    if(this.reactiveForm.valid){
      console.log(this.reactiveForm.value);
        this.nameEntered =true;
        this.quotaService.getName(this.reactiveForm.value).subscribe({
          next: (val: any) => {
            this.singleUserQuota=val;
          },
          error: (err: any) => {
            console.error(err);
          }
        })
      
    }

  }

}
