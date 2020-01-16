import { facade } from './facade';

const alg = facade;
const throwE = function() {throw new Error();}

console.log(facade);

typeof facade === "function" || throwE();

let r = facade(["subsys0","subsys1"],{bob:""});

// console.log(r);
r.private.subsys0 === "new subsys0" || throwE();
r.private.subsys1 === "new subsys1" || throwE();
r.private.bob     === ""            || throwE();