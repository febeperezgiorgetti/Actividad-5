import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INoticia } from '../../interfaces/inoticia.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  newNoticia:INoticia = { titulo:'', texto:'', imagenURL:'', fecha:''};

  @Output() NoticiaEmitida: EventEmitter <INoticia> = new EventEmitter()


  guardar(): void{
    if(this.newNoticia.titulo !="" && this.newNoticia.texto !="" && this.newNoticia.imagenURL !="" 
    && this.newNoticia.fecha!="") {
    this.NoticiaEmitida.emit(this.newNoticia)
    this.newNoticia = {titulo:'', texto:"", imagenURL:"<img[src]='[ImagenActual].url'[alt]>",fecha:""}
  }
  else {
    alert('Los campos no pueden ser vacíos')
  }
}
}