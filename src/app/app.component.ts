import { Component } from '@angular/core';

interface Tarea {
  nombre: string;
  completada: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareas: Tarea[] = [];
  filtro: string = 'todos';

  agregarTarea(nombre: string) {
    const nuevaTarea: Tarea = {
      nombre: nombre,
      completada: false
    };
    this.tareas.push(nuevaTarea);
  }

  editarTarea(tarea: Tarea) {
    tarea.completada = !tarea.completada;
  }

  eliminarTarea(tarea: Tarea) {
    const index = this.tareas.indexOf(tarea);
    if (index > -1) {
      this.tareas.splice(index, 1);
    }
  }

  cambiarFiltro(opcion: string) {
    this.filtro = opcion;
  }

  get tareasFiltradas(): Tarea[] {
    switch (this.filtro) {
      case 'completadas':
        return this.tareas.filter(t => t.completada);
      case 'incompletas':
        return this.tareas.filter(t => !t.completada);
      default:
        return this.tareas;
    }
  }
}
