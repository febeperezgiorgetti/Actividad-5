import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { INoticia } from './interfaces/inoticia.interface';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ListComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppNoticias';
  imagenURL:String='';

  newNoticia:any={'titulo':"",
'cuerpo':"",
'imagenURL':"",
'fecha':""
}


arrNoticia: INoticia [] = [
  { titulo: "El CIS pone al PP al borde",
  texto: "A riesgo de perder la mayoría en Galicia y apunta a un posible gobierno de BNG y PSdeG",
  imagenURL: '<img [src]="newNoticia.imagenURL" alt="Imagen" >',
  fecha:"12.02.2024"

  },
  {
    titulo:"Junts Mudos",
texto: "Guardan silencio sobre sus encuentros con el PP. ERC pide transparencia",
imagenURL: '<img [src]="newNoticia.imagenURL" alt="Imagen" >',
fecha: "12.02.2024"}
]
insertData($event: any) :void{
this.arrNoticia.push($event);

}
}

