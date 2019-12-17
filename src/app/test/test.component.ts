import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
// import { EventEmitter } from 'events';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
/*Interpolation*/
  public name = "Julio";
  public siteUrl = window.location.href;
  public myId = "testId";
/*adding css class using more classes*/
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
/*using buttons and events*/
  public greeting = "";
/*login*/
  public prueba = "";
/*ngIf, ngSwitch, ngFor*/
displayName = true;
displayNameDos = true;
/*ngSwitch*/
public colores = "green";
/*ngFor*/
public colors = ["red", "blue", "green", "yellow"];
/*Component Interaction*/
@Input() public parentData;
@Output() public childEvent = new EventEmitter();
//Pipes
public messages = "welcome to julio"
public person = {
  "firstName" : "Jhon",
  "lastName" : "Wick"
}
public date = new Date();

constructor() { }

  ngOnInit() {
  }

  greetUser(){/* Escribe Hello seguido de buscar la variable name */
    return "Hello " + this.name;
  }

  onClick(){ /*using buttons and events*/
    console.log("Welcome to " + this.name);
    /*onClick(event){
    console.log(event); 
          esto lo que hara sera desplegar en consola la informacion del click, osea MouseEvent 
          tambien en test.component.html en la linea 19
    <button (click) = "onClick()"> Greet</button> hay que colocar $event dentro del parentesis onClick()
    */
    this.greeting = "pepito perez " + this.name;
    /* se puede colocar tambien  
    this.greeting = event.type
    y esto lo que hara sera colocar al lado del boton el tipo de event que se utilizo, en este caso sera CLICK*/
    
  }
  logMessage(value){
    console.log(value);
  }

  /*Component Interaction*/
  fireEvent(){
    this.childEvent.emit("Hey Julio");
  }
}
