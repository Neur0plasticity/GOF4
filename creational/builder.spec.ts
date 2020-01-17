import { builder } from './builder';
const alg = builder; console.log(alg);
/** 
 * 
 * Currently all concrete builders must be the same methods. 
*/
alg({
    main: "default",
    director: function(builder){
        builder.buildFrame();
        builder.buildEngine();
        builder.buildWheels();
        builder.buildDoors();
    },
    // abstract_builder:  function(){
    //     // this.buildFrame  = function(){console.log("buildFrame");}
    //     // this.buildEngine = function(){console.log("buildEngine");}
    //     // this.buildWheels = function(){console.log("buildWheels");}
    //     // this.buildDoors  = function(){console.log("buildDoors");}
    // },
    builders: {
        0: class Builder0 {
            buildFrame  = function(){console.log("0 buildFrame");}
            buildEngine = function(){console.log("0 buildEngine");}
            buildWheels = function(){console.log("0 buildWheels");}
            buildDoors  = function(){console.log("0 buildDoors");}
        },
        1: class Builder1 {
            buildFrame  = function(){console.log("1 buildFrame");}
            buildEngine = function(){console.log("1 buildEngine");}
            buildWheels = function(){console.log("1 buildWheels");}
            buildDoors  = function(){console.log("1 buildDoors");}
        }
    }
});