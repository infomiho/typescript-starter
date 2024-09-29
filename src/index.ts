import { hello } from './hello.js';

console.log(hello(process.env.VARIABLE ?? 'world'));
