'use strict';

class Shape {

    #name;
    #color;

    constructor(name, color){
        this.name = name;
        this.color = color;
        this.getInfo;
    }

    set name(name) {
        if(name === 'circle' || name ==='square') {
            this.#name = name;
        } else {
            throw 'Shape, select a shape';
        }
    }

    get name() {
        return this.#name;
    }

    set color(color) {
        if(color === 'blue' || color === 'green' || color === 'pink' 
            || color === 'orange' || color === 'purple') {
            this.#color = color;
        } else {
            throw 'Color, select a color';
        }
    }

    get color() {
        return this.#color;
    }

    getInfo() {
        return `${this.#name} ${this.#color}`;
    }
}

const container = document.querySelector('.grid-container');
const button = document.querySelector('.button');
const shapeSelected = document.querySelector('#shapes');
const colorSelected = document.querySelector('#colors');
const message = document.querySelector('.message p');

const shapesArray = new Array();

function getHexaColor(col) {
    switch(col){
        case 'blue': return '#09f'; 
        case 'green': return '#9f0';
        case 'orange': return '#f90'; 
        case 'pink': return '#f09'; 
        case 'purple': return '#90f'; 
        default: return 'Select a color'; 
    }
}

function createShape(shape,color) {
    const div = document.createElement('div');
    div.classList.add('shape');
    if (shape === 'circle')  div.classList.add('circle');
    if (shape === 'square')  div.classList.add('square');
    div.style.backgroundColor = getHexaColor(color);
    container.appendChild(div);

    try {
        const newShape = new Shape(shape, color);
        shapesArray.push(newShape);
        //console.log(shapesArray);
        div.id = shapesArray.length;
        div.style.gridArea = 's'+ div.id;
        //console.log(div.style.gridArea);
        div.addEventListener('click', function() {
            console.log(div.id);
            message.innerHTML = `Shape ${div.id} : ${shapesArray[div.id - 1].getInfo()}`;
        });
    } catch (error) {
        console.log(error);
    } 
}

button.addEventListener('click', () => {
    console.log(shapeSelected.value);
    console.log(colorSelected.value);
    console.log(shapesArray.length);

    if (!(shapesArray.length === 24)) {
        createShape(shapeSelected.value, colorSelected.value);
    } else {
        message.innerHTML = 'Storage is full';
    }
});

