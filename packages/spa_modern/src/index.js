import "babel-polyfill";
import { libraryGoody } from 'library';

const HELLO = 'HELLO WORLD';
const dummyFlag = Number.isInteger(HELLO.length);

document.getElementById('app').innerHTML = 
  `${HELLO} ${libraryGoody()}`;
