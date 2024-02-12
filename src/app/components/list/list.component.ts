import { Component, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  newNoticia:INoticia = { titulo:'', texto:'', imagenURL:'', fecha:''}

  @Input() Noticia: INoticia [] = []

ngOnInit(): void{
  this.cargarDatos()

}

cargarDatos(): string { 
  let html ="";

  this.Noticia.forEach(noticia =>{
    html += `<article>
              <h3>${noticia.titulo} - ${noticia.texto} - ${noticia.imagenURL} - ${noticia.fecha}</h3>
            
              </article>`

  })
  return html;
 
}
}
