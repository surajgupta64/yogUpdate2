"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2004],{32004:function(e,n,t){t.r(n);var a=t(70885),s=t(78983),c=t(74569),i=t.n(c),o=t(72791),r=t(16856),l=t(80184),d="https://yoga-power-node-api.herokuapp.com";n.default=function(){var e=(0,o.useState)(!1),n=(0,a.Z)(e,2),t=n[0],c=n[1],u=(0,o.useState)(""),h=(0,a.Z)(u,2),m=h[0],j=h[1],x=(0,o.useState)(""),p=(0,a.Z)(x,2),f=p[0],b=p[1],g=(0,o.useState)(""),N=(0,a.Z)(g,2),v=N[0],y=N[1],C=(0,o.useState)(!1),S=(0,a.Z)(C,2),k=S[0],_=S[1],A=JSON.parse(localStorage.getItem("user-info")),D=A.token,V=A.user.username,J=(0,o.useState)([]),O=(0,a.Z)(J,2),T=O[0],w=O[1];function z(){i().get("".concat(d,"/designation/all"),{headers:{Authorization:"Bearer ".concat(D)}}).then((function(e){w(e.data)})).catch((function(e){console.error(e)}))}(0,o.useEffect)((function(){z()}),[]);return(0,l.jsxs)(s.xH,{className:"mb-3 border-success",children:[(0,l.jsx)(s.bn,{style:{backgroundColor:"#0B5345",color:"white"},children:(0,l.jsx)(s.tj,{children:"Designation Master"})}),(0,l.jsxs)(s.sl,{children:[(0,l.jsxs)(s.lx,{className:"mb-2",children:[(0,l.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,l.jsx)("div",{}),(0,l.jsx)("div",{children:(0,l.jsx)(s.rb,{children:(0,l.jsx)(s.b7,{children:(0,l.jsx)(s.u5,{className:"ms-1 mt-2",onClick:function(){c(!t),_(!1)},children:t?"close":"Add Vacancy"})})})})]}),t&&(0,l.jsx)("div",{children:(0,l.jsxs)(s.rb,{className:"mt-3",children:[(0,l.jsx)(s.b7,{lg:6,md:6,sm:12,children:(0,l.jsx)(s.jO,{className:"mb-1",type:"text",id:"exampleFormControlInput1",label:"Job Designation Name",value:m,onChange:function(e){return j(e.target.value)},placeholder:"Enter Job Designation"})}),(0,l.jsx)(s.b7,{lg:6,md:6,sm:12,children:(0,l.jsx)(s.jO,{className:"mb-1",type:"text",id:"exampleFormControlInput1",label:"Job Department Name",value:f,onChange:function(e){return b(e.target.value)},placeholder:"Enter Job Department"})}),(0,l.jsx)(s.b7,{lg:6,md:6,sm:12,children:(0,l.jsx)(s.jO,{className:"mb-1",type:"number",id:"exampleFormControlInput1",label:"Available Vacancy",value:v,onChange:function(e){return y(e.target.value)},placeholder:"No of Vacancy"})}),(0,l.jsxs)(s.b7,{className:"mt-2",lg:6,md:6,sm:12,children:[(0,l.jsx)(s.kV,{size:"xl",label:"Status",value:k,onChange:function(){return _(!k)},style:{defaultChecked:"false"}}),(0,l.jsx)(s.u5,{className:"mt-2",onClick:function(){var e={username:V,jobDesignation:m,department:f,availableVacancy:v,status:k};fetch("".concat(d,"/designation/create"),{method:"POST",headers:{Authorization:"Bearer ".concat(D),Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){e.json().then((function(){_(!1),j(""),b(""),y(""),alert("successfully submitted")}))}))},children:"Save"})]})]})})]}),(0,l.jsxs)(s.Sx,{className:"mt-3",align:"middle",bordered:!0,style:{borderColor:"#0B5345"},hover:!0,responsive:!0,children:[(0,l.jsx)(s.V,{style:{backgroundColor:"#0B5345",color:"white"},children:(0,l.jsxs)(s.T6,{children:[(0,l.jsx)(s.is,{children:"Sr.No"}),(0,l.jsx)(s.is,{children:"Job Designation"}),(0,l.jsx)(s.is,{children:"Department"}),(0,l.jsx)(s.is,{children:"Available Vacancy"}),(0,l.jsx)(s.is,{children:"Status"}),(0,l.jsx)(s.is,{children:"Action"})]})}),(0,l.jsx)(s.NR,{children:T.map((function(e,n){return e.username===V&&(0,l.jsxs)(s.T6,{children:[(0,l.jsx)(s.NN,{children:n+1}),(0,l.jsx)(s.NN,{children:e.jobDesignation}),(0,l.jsx)(s.NN,{children:e.department}),(0,l.jsx)(s.NN,{children:e.availableVacancy}),(0,l.jsx)(s.NN,{children:(0,l.jsx)(s.kV,{size:"xl",style:{cursor:"pointer"},id:e._id,value:e.status,checked:e.status,onChange:function(){return function(e,n){var t={status:n};fetch("".concat(d,"/designation/update/").concat(e),{method:"POST",headers:{Authorization:"Bearer ".concat(D),Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){e.json().then((function(e){z()}))}))}(e._id,!e.status)}})}),(0,l.jsxs)(s.NN,{children:[(0,l.jsx)(r.ZkW,{style:{cursor:"pointer",markerStart:"10px"},onClick:function(){return n=e._id,void fetch("".concat(d,"/designation/delete/").concat(n),{method:"DELETE",headers:{Authorization:"Bearer ".concat(D),Accept:"application/json","Content-Type":"application/json"}}).then((function(e){e.json().then((function(e){console.warn(e),z()}))}));var n},size:"20px"})," "]})]},n)}))})]})]})]})}}}]);
//# sourceMappingURL=2004.4e9f235f.chunk.js.map