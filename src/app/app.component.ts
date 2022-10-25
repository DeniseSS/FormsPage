import { Component, OnInit } from '@angular/core';
import { Cliente } from './Cliente';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit{
  
formCliente!:  FormGroup


ngOnInit(): void {
  this.ClienteForms(new Cliente());
}

ClienteForms(cliente: Cliente){
  this.formCliente = new FormGroup({
    nameCliente: new FormControl(cliente.name),
    phoneCliente:  new FormControl(cliente.phone)
  })
}
Submit() {
  

 
}
Clear(){
  this.formCliente.reset(new Cliente());
}
  

}
