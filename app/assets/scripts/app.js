let $ = require('jquery');
//Person = require('./modules/Person');
import Person from './modules/Person';


let maria = new Person("Maria", "Red");
let jhonathan = new Person("Jhonathan", "Orange");



jhonathan.greet();
maria.greet();