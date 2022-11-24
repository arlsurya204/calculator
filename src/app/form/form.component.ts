import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit  {

  constructor() {
    // console.log(this.test1+this.test2);
    
   }
  // test1:number= 5;
  // test2:number= 4;

  
  

  first:any = 'First';
  second:any = 'Second';
  third:any = 'Third';

  sub1name:string = 'English:'
  sub2name:string = 'Math/Science/Nepali:'
  sub3name:string = 'Physics/Business Studies:'
  sub4name:string = 'Chemistry/Economics:'
  sub5name:string = 'Bio or Comp/Math-Mgmt:'




  totalFee:number = 80000;

  // sub1name:string= 'English';
  // sub2name:string= 'Nepali';
  // sub3name:string= 'Math';
  // sub4name:string= 'Science';
  // sub5name:string= 'Account';

  
  sub1:any= '-';
  sub2:any= '-';
  sub3:any= '-';
  sub4:any= '-';
  sub5:any= '-';


  Aplus:number = 6;
  A:number = 4;
  Bplus:number =3;
  B:number=2;

  english:number = 0;
  nepali:number = 0;
  math:number = 0;
  science:number = 0;
  account:number = 0;

  sum:number = 0 ;
  rank:number = 0;
  top:any ='-';

  

  // rankText:any = "";
  
  topH:any ='-';
  topS:any = '';

  condition:boolean= true;

  topText:number = 0;

  lessP:number= 0 ;
  lessFirst:number = this.totalFee;

  secondS:number= 0;
  less2:number=this.totalFee;

thirdS:number=0;
less3:number=this.totalFee;

totalAmt:number=0 ;
netFee:number=80000;

disable1:boolean = false;
disable2:boolean = false;
disable3:boolean = false;
disable4:boolean = false;
disable5:boolean = false;

  rankData(data:any){
    // console.log(data.target.value);
    this.rank = data.target.value;
    // console.log(data.target);

    var text:any = $('#rank').find(":selected").text();
    
    this.top = text;
    
    
    
  }
  top100(data:any){
    // console.log(data.target.value);
    this.topH = data.target.value;
    if(this.topH == "Yes"){
      this.condition = false;
      
      
    }
    else{
      this.condition = true;
    }

    
  }

  englishPick(val:any){
   
    
    var English = val.target.value;
    this.sub1 = English;

   if(this.sub1 == 'A+'){
      this.english = this.Aplus;
      
    }
      else if(this.sub1=='A'){
      this.english=4
    }else if(this.sub1=='B+'){
      this.english=3
    }else if (this.sub1=='B'){
      this.english=2
    }

    this.disable1 = true;

    
    

  }
  nepaliPick(val:any){
    var Nepali = val.target.value;
    this.sub2 = Nepali;
    if(this.sub2 == 'A+'){
      this.nepali = 6;
      
    }else if(this.sub2=='A'){
      this.nepali=4
    }else if(this.sub2=='B+'){
      this.nepali=3
    }else if (this.sub2=='B'){
      this.nepali=2
    }
    this.disable2 = true;
  }

  mathPick(val:any){
    var Math = val.target.value;
    this.sub3 = Math;
    if(this.sub3 == 'A+'){
      this.math = 6;
      
    }else if(this.sub3=='A'){
      this.math=4
    }else if(this.sub3=='B+'){
      this.math=3
    }else if (this.sub3=='B'){
      this.math=2
    }
    this.disable3 = true;
  }

  sciencePick(val:any){
    var Science = val.target.value;
    this.sub4 = Science;
    if(this.sub4 == 'A+'){
      this.science = 6;
      
    }else if(this.sub4=='A'){
      this.science=4
    }else if(this.sub4=='B+'){
      this.science=3
    }else if (this.sub4=='B'){
      this.science=2
    }
    this.disable4 = true;

  }

  accountPick(val:any){
    var Account = val.target.value;
    this.sub5 = Account;

    if(this.sub5 == 'A+'){
      this.account = 6;
      
    }else if(this.sub5=='A'){
      this.account=4
    }else if(this.sub5=='B+'){
      this.account=3
    }else if (this.sub5=='B'){
      this.account=2
    }
    this.disable5 = true;




  }

  
  changedata(data:any){
   
    


    
    if(this.sub1 == "A+" && this.sub2=="A+"){
     
      this.english = 7;
      this.nepali = 7;
      
      
    }

    if(this.sub1== "A+" && this.sub3=="A+"){
      this.english=7;
      this.math=7;
    }
    if(this.sub1== "A+" && this.sub4=="A+"){
      this.english=7;
      this.science=7;
    }
    if(this.sub1== "A+" && this.sub5=="A+"){
      this.english=7;
      this.account=7;
    }
    if(this.sub2== "A+" && this.sub3=="A+"){
      this.nepali=7;
      this.math=7;
    }
    if(this.sub2== "A+" && this.sub4=="A+"){
      this.nepali=7;
      this.science=7;
    }
    if(this.sub2== "A+" && this.sub5=="A+"){
      this.nepali=7;
      this.account=7;
    }
    if(this.sub3== "A+" && this.sub4=="A+"){
      this.math=7;
      this.science=7;
    }
    if(this.sub3== "A+" && this.sub5=="A+"){
      this.math=7;
      this.account=7;
    }
    if(this.sub4== "A+" && this.sub5=="A+"){
      this.science=7;
      this.account=7;
    }

    if(this.sub2 =="A+" && this.sub3 =="A+" && this.sub4=="A+"){
      this.nepali = 8;
      this.math = 8;
      this.science = 8;
    }
    if(this.sub2 =="A+" && this.sub4 =="A+" && this.sub5=="A+"){
      this.nepali = 8;
      this.science = 8;
      this.account = 8;
    }




 
    
    
    
    
    if(this.sub1 =="A+" && this.sub2== "A+" && this.sub3 =="A+"){
      this.english = 8;
      this.nepali = 8;
      this.math = 8;

    }
    if(this.sub1 =="A+" && this.sub2== "A+" && this.sub4 =="A+"){
      this.english = 8;
      this.nepali = 8;
      this.science = 8;
    }
    if(this.sub1 =="A+" && this.sub2== "A+" && this.sub5 =="A+"){
      this.english = 8;
      this.nepali = 8;
      this.account = 8;
    }
    if(this.sub1 =="A+" && this.sub3== "A+" && this.sub4 =="A+"){
      this.english = 8;
      this.math = 8;
      this.science = 8;
    }
    if(this.sub1 =="A+" && this.sub3== "A+" && this.sub5 =="A+"){
      this.english = 8;
      this.math = 8;
      this.account = 8;
    }
    if(this.sub1 =="A+" && this.sub4== "A+" && this.sub5 =="A+"){
      this.english = 8;
      this.science = 8;
      this.account = 8;
    }
    if(this.sub1=="A+" && this.sub2=="A+" && this.sub3=="A+" && this.sub4 =="A+"){
    
   
    
      this.english = 9;
      this.nepali = 9;
      this.math = 9;
      this.science = 9;
      
    }




    if(this.sub1 =="A+" && this.sub2== "A+" && this.sub3=="A+" && this.sub5 =="A+"){
      this.english = 9;
      this.nepali = 9;
      this.math = 9;
      this.account=9;
    }
    if(this.sub1 =="A+" && this.sub3== "A+" && this.sub4=="A+" && this.sub5 =="A+"){
      this.english = 9;
      this.math = 9;
      this.science = 9;
      this.account=9;
    }
    if(this.sub2 =="A+" && this.sub3== "A+" && this.sub4=="A+" && this.sub5 =="A+"){
      this.nepali = 9;
      this.math = 9;
      this.science = 9;
      this.account=9;
    }
    if(this.sub1=="A+" && this.sub2=="A+" && this.sub3=="A+" && this.sub4 =="A+" && this.sub5=="A+"){
    
    
    
      this.english = 10;
      this.nepali = 10;
      this.math = 10;
      this.science = 10;
      this.account =10;
      
    }

    


    
    // var a = parseInt($("#eng").text());
    // var b = parseInt($("#nep").text());
    // var c = parseInt($("#math").text());
    // var d = parseInt($("#science").text());
    // var e = parseInt($("#acc").text());

    var a = this.english;
    var b = this.nepali;
    var c = this.math;
    var d = this.science;
    var e = this.account;
    // var f = parseInt($("#rank").text())
    // var f = 
    // var a:number = this.english;
    
    // var sum1 =a +this.sum ;
    var sum1 =a + b + c + d + e ;
    console.log(sum1);
    
    
    this.sum = sum1;
    // console.log(this.rank);

    // var t:number = this.totalFee;
    // var p:number = this.sum;

    // console.log(t,p);
    // var cal:number = t * p * 1/100;
    // console.log(cal);
    
    



    // this.lessP = this.totalFee * this.sum;

    this.lessP = this.totalFee * this.sum /100;

    this.lessFirst = this.totalFee - this.lessP;

    this.secondS = this.lessFirst * this.rank * 1/100;
    


    this.less2 = this.lessFirst - this.secondS;
    this.less3 = this.less2 - this.thirdS;


    // this.thirdS = this.less2 * this.topText * 1/100;

    if(this.topH == "Yes"){
      this.topText = 10;
    }
    if(this.topH == "NO"){
      this.topText= 0;
    }
    if(this.topH == "Select a Option"){
      this.topText=0;
    }
    
  

    this.thirdS = this.less2 * this.topText/100 ;
    // console.log(this.less2);
    // console.log(this.topText);
    
    

    // this.thirdS = 
    // this.topText = 

    console.log(this.topH);

    this.totalAmt = this.lessP + this.secondS + this.thirdS;

    this.netFee = this.totalFee - this.totalAmt;

   


    
    

  }




  ngOnInit(): void {
  }

}
