
// jAvAsCrIpT cOmmEnT

// "{}" object literal syntax

let person = {
    name1: 'koralin',
    age: 29
};

// person.name1 = 'caroline'; // Dot Notation
// person['name1'] = 'karoke'; // Bracket Notation
// // Letting the user select
// let selection = 'name1';
// person[selection] = 'kong';

console.log(person);

// area of triangle

const triangle = {

    area: {
        h: 3,
        b: 7,
        a: 1/2*(this.b*this.h)
    },   
    draw: function() {
        console.log('area of triangle');
    }
};
triangle.draw();

// area of square

const square = {
    area: {
        s1: 6,
        s2: 9,
        a: this.s1*this.s2
    },
    draw: function() {
        console.log('area of square');
    }
};
square.draw();

// area of rectangle

const rectangle = {
    area: {
        l: 5,
        b: 4,
        a: this.l*this.b
    },
    draw: function() {
        console.log('area of rectangle');
    }
};
rectangle.draw();

// area of circle

const circle = {
    area: {
        r: 69,
        a: 3.12*(this.r*2)
    },
    draw: function() {
        console.log('area of circle');
    }
};
circle.draw();

// Factory 

function createHero(superhero) {
    return{
        superhero,
        savepeople: function() {
            console.log('superhero');
        }
    }
};

let hero = createHero(1);
hero.savepeople();

// Constructor

class Villan {
    constructor(hurt) {
        this.villan = hurt;
        this.hurtpeople = function () {
            console.log('supervillian');
        };
    }
}

const supervillian = new Villan(1);
supervillian.hurtpeople();