import{a as j}from"./chunk-Z5O7UNQD.js";import"./chunk-DKELOL2R.js";import{a as D}from"./chunk-6STNRS2C.js";import{A as G,B,C as L,b,f as S,g as w,h,j as l,l as E,n as _,o as y,p as N,s as O,t as P,w as I,x as k,y as z}from"./chunk-WS5K7IYF.js";import"./chunk-AESYL7IM.js";import"./chunk-AHPA5K5D.js";import"./chunk-C7U3NQ45.js";import{j as F,k as g}from"./chunk-KLJC3WH5.js";import{Ab as e,Bb as s,Dc as v,Gb as C,Lc as x,Qb as r,Ya as f,Za as u,ca as M,da as p,oa as c,qb as d,zb as o}from"./chunk-HHBLOR6C.js";import"./chunk-CQCHLVVT.js";var V=(()=>{let t=class t{constructor(m,n,a){this.location=m,this.authService=n,this.userService=a,this.registrationForm=new h({email:new l(""),password:new l(""),password_again:new l(""),name:new h({firstname:new l(""),lastname:new l("")})})}ngOnInit(){}onSubmit(){console.log(this.registrationForm),this.authService.signup(this.registrationForm.get("email")?.value,this.registrationForm.get("password")?.value).then(m=>{console.log(m);let n={id:m.user?.uid,email:this.registrationForm.get("email")?.value,username:this.registrationForm.get("email")?.value?.split("@")[0],name:{firstname:this.registrationForm.get("name.firstname")?.value,lastname:this.registrationForm.get("name.lastname")?.value}};this.userService.create(n).then(a=>{console.log("User added successfully.")}).catch(a=>{console.error(a)})}).catch(m=>{console.error(m)})}goBack(){this.location.back()}};t.\u0275fac=function(n){return new(n||t)(u(v),u(D),u(j))},t.\u0275cmp=M({type:t,selectors:[["app-registration"]],decls:33,vars:2,consts:[[1,"main_component"],[3,"formGroup","ngSubmit"],["formGroupName","name",1,"subForm"],["for","lastname"],["matInput","","type","text","formControlName","lastname"],["for","firstname"],["matInput","","type","text","formControlName","firstname"],["for","email"],["matInput","","type","text","formControlName","email"],["for","password"],["matInput","","type","password","formControlName","password"],["for","password_again"],["matInput","","type","password","formControlName","password_again"],[1,"buttons"],["type","submit","mat-raised-button",""],[1,"registration-text"],[3,"routerLink"]],template:function(n,a){n&1&&(o(0,"div",0)(1,"form",1),C("ngSubmit",function(){return a.onSubmit()}),o(2,"h1"),r(3,"Regisztr\xE1ci\xF3"),e(),o(4,"div",2)(5,"mat-form-field")(6,"mat-label",3),r(7,"Vezet\xE9kn\xE9v: "),e(),s(8,"input",4),e(),o(9,"mat-form-field")(10,"mat-label",5),r(11,"Keresztn\xE9v: "),e(),s(12,"input",6),e()(),o(13,"mat-form-field")(14,"mat-label",7),r(15,"Email: "),e(),s(16,"input",8),e(),o(17,"mat-form-field")(18,"mat-label",9),r(19,"Jelsz\xF3: "),e(),s(20,"input",10),e(),o(21,"mat-form-field")(22,"mat-label",11),r(23,"Jelsz\xF3 \xFAjra: "),e(),s(24,"input",12),e(),o(25,"span",13)(26,"button",14),r(27,"Regisztr\xE1ci\xF3"),e()(),o(28,"span",15),r(29," Van m\xE1r fi\xF3kod? "),o(30,"a",16),r(31,"Bejelentkez\xE9s"),e(),r(32,". "),e()()()),n&2&&(f(),d("formGroup",a.registrationForm),f(29),d("routerLink","/login"))},dependencies:[F,E,b,S,w,_,N,y,I,P,z,B],styles:[".main_component[_ngcontent-%COMP%]{position:fixed;top:55%;left:50%;transform:translate(-50%,-50%);background-color:#ffe0b1;width:50%;padding:20px;border-radius:15px;text-align:center}.main_component[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:50px;font-family:Brush Script MT,cursive;font-size:60px}.main_component[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:80%;margin:0 auto}.main_component[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px;width:80%}.main_component[_ngcontent-%COMP%]   .registration-text[_ngcontent-%COMP%]{margin-top:20px;display:block}.main_component[_ngcontent-%COMP%]   .registration-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#007bff;text-decoration:none;font-weight:700}.main_component[_ngcontent-%COMP%]   .registration-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]});let i=t;return i})();var T=[{path:"",component:V}],A=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=p({type:t}),t.\u0275inj=c({imports:[g.forChild(T),g]});let i=t;return i})();var ct=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=p({type:t}),t.\u0275inj=c({imports:[x,A,O,k,G,L]});let i=t;return i})();export{ct as RegistrationModule};
