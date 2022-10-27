import { Component,  Input,  OnInit} from '@angular/core';
import { observeOn } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit{
  
cliente: any ={
  name: '',
  phone: ''
}
form: any
clienteObj: any;

onSubmit() {
    var i = Object.keys(this.cliente).length;
 
    this.form =  document.getElementById("form")
    var phone: any =  document.getElementById("phone")
    var name: any =  document.getElementById("name")
    
    localStorage.setItem('cliente', JSON.stringify(this.cliente));
    let data: any = localStorage.getItem('cliente');
    let clienteObj = JSON.parse(data);
    this.cliente.phone= clienteObj.phone = phone.value
    this.cliente.name=clienteObj.name = name.value 
 
    this.form.reset();
 
}

editar(){
 (<HTMLSelectElement>document.getElementById('phone')).value = this.cliente.phone;
 (<HTMLSelectElement>document.getElementById('name')).value = this.cliente.name

}

ngOnInit(): void {  


  }
}