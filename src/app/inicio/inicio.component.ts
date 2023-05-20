import { Component } from '@angular/core';

interface Tarea {
  id: number;
  nombre: string;
  estado: boolean;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  tareas: Tarea[] = [];
  //Agregar Tarea
  agregarTarea(nombre: string, event: Event) {
    event.preventDefault();
    if (!nombre.trim()) {
      return; // No se permite agregar una tarea vacía
    }
    const id = this.tareas.length
      ? this.tareas[this.tareas.length - 1].id + 1
      : 1;
    this.tareas.push({
      id,
      nombre,
      estado: false,
    });
    (event.target as HTMLFormElement).reset();
  }

  editarTarea(tarea: Tarea) {

    const nuevoNombre = prompt('Ingrese el nuevo nombre de la tarea:', tarea.nombre);
    if (nuevoNombre !== null && nuevoNombre.trim() !== '') {
      tarea.nombre = nuevoNombre.trim();
    }
  }

  // Función para eliminar una tarea de la lista
  borrarTarea(id: number) {
    this.tareas = this.tareas.filter((tarea) => tarea.id !== id);
  }
  // Obtener tareas completadas
  getTareasCompletadas(): Tarea[] {
    return this.tareas.filter((tarea) => tarea.estado);
  }

  // Obtener tareas no completadas
  getTareasNoCompletadas(): Tarea[] {
    return this.tareas.filter((tarea) => !tarea.estado);
  }
}
