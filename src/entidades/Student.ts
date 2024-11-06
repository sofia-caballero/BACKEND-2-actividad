export class Student{

  numero_id: number;
  nombre: string;
  telefono: number;
  edad: number;

  constructor(num, nom, tel, edad){
    this.nombre = nom;
    this.numero_id= num;
    this.telefono = tel;
    this.edad = edad;

  }
}