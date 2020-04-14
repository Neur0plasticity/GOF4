export {};
const creational = Object.assign(function(){

},{
    "abstractfactory"       : `'validations'                                'block'                                                  'test'`,
    "builder "              : `'validations'                                'block'                                                  'test'`,
    "factorymethod"         : `'validations'                                'block'                                                  'test'`,
    "prototype"             : `'validations'                                'block'                                                  'test'`,
    "singleton"             : `'validations'                                'block'                                                  'test'`,
});
const structural = Object.assign(function(){

},{
    "adapter"               : `'validations'                                'block'                                                  'test'`,
    "bridge"                : `'validations'                                'block'                                                  'test'`,
    "composite"             : `'validations'                                'block'                                                  'test'`,
    "decorator"             : `'validations'                                'block'                                                  'test'`,
    "facade"                : `'validations'                                'block'                                                  'test'`,
    "flyweight"             : `'validations'                                'block'                                                  'test'`,
    "proxy"                 : `'validations'                                'block'                                                  'test'`,
});
const behavioral = Object.assign(function(){

},{
    "chainofresponsibility" : `'validations'                                'block'                                                  'test'`,
    "command"               : `'validations'                                'block'                                                  'test'`,
    "interpreter"           : `'validations'                                'block'                                                  'test'`,
    "iterator"              : `'validations'                                'block'                                                  'test'`,
    "mediator"              : `'validations'                                'block'                                                  'test'`,
    "memento"               : `'validations'                                'block'                                                  'test'`,
    "observer"              : `'validations'                                'block'                                                  'test'`,
    "state"                 : `'validations'                                'block'                                                  'test'`,
    "strategy"              : `'validations'                                'block'                                                  'test'`,
    "templatemethod"        : `'validations'                                'block'                                                  'test'`,
    "visitor"               : `'validations'                                'block'                                                  'test'`,
});
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
// params



//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
// type checking
const hasOwnProp    = (e,p) => isObject(e) && e.hasOwnProperty(prop);

const type          = Object.assign((e,t) => isString(t) && e.hasOwnProperty(t) && is(t),
{
     isObject      : (e) => typeof e === "object"   || (()=>{throw new Error();})(),
     isFunction    : (e) => typeof e === "function" || (()=>{throw new Error();})(),
     ___           : (e) => {
        switch (builderOBJ.main) {
            case    "default": return loop_default_builder();
            default:           return builderOBJ.main(); 
        }
     },
};
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
// miscellaneous
const loop_default_builder = function(){
    let objs = {};
    for (let k in this.builders) {
        new this.Director(objs[k] = new this.builders[k]());
        objs[k].getResults();
        objs[k].show();
    }
};