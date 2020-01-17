export interface builder {
  (builderOBJ:builderOBJ): object
};
export interface builderOBJ {
  main:     Function | string, 
  director: Function,
  // builder:  Function,
  builders: {
    [index: string]: Function
  }
};
export const builder:builder = function(builderOBJ) {
  typeof builderOBJ           === "object"   || (()=>{throw new Error();})();
  (typeof builderOBJ.main     === "function" || builderOBJ.main === "default") || (()=>{throw new Error();})();
  typeof builderOBJ.director  === "function" || (()=>{throw new Error();})();
  typeof builderOBJ.builders  === "object"   || (()=>{throw new Error();})();
  switch (builderOBJ.main) {
    case    "default": return loop_default_builder();
    default:           return builderOBJ.main(); 
  }
};
const loop_default_builder = function(){
  loop_default_build: {
    let objs = {};
    for (let k in this.builders) {
        new this.Director(objs[k] = new this.builders[k]());
        objs[k].getResults();
        objs[k].show();
    }
  }
};