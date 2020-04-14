
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
import {GOF4} from "./main";
const cre = GOF4.creational;
const str = GOF4.structural;
const bhv = GOF4.behavioural;
console.log(GOF4);
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
const props = Object.keys(GOF4);
props.length === 3 || (()=>{throw new Error("expected 3 properties");})();
const tests = {
    creationalTests,
    structuralTests,
    behaviouralTests
};
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
props.forEach(e=>test[e]());
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
const throwE = function() {throw new Error();}
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
const creationalTests = function(){
    {
    "abstractfactory"       : function(){},
    "builder "              : function(){},
    "factorymethod"         : function(){},
    "prototype"             : function(){},
    "singleton"             : function(){},
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
const structuralTests = function(){
    {
    "adapter"               : function(){},
    "bridge"                : function(){},
    "composite"             : function(){},
    "decorator"             : function(){},
    "facade"                : function(){},
    "flyweight"             : function(){},
    "proxy"                 : function(){},
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
const behaviouralTests = function(){
    {
    "chainofresponsibility" : function(){},
    "command"               : function(){},
    "interpreter"           : function(){},
    "iterator"              : function(){},
    "mediator"              : function(){},
    "memento"               : function(){},
    "observer"              : function(){},
    "state"                 : function(){},
    "strategy"              : function(){},
    "templatemethod"        : function(){},
    "visitor"               : function(){},
    }
};
const specfacade = function(alg){
    typeof facade === "function" || throwE();
    let r = facade(["subsys0","subsys1"],{bob:""});
    r.private.subsys0 === "new subsys0" || throwE();
    r.private.subsys1 === "new subsys1" || throwE();
    r.private.bob     === ""            || throwE();
};
const specbuilder = function(alg){
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
};
const specfactorymethod = function(){
    const alg = factorymethod;
    // main executes everything
    // products are the "components"
    // creators are made of products
    alg({
        main: function(){
        // An array of creators

        //   Creator[] creators = new Creator[2];
    
        //   creators[0] = new ConcreteCreatorA();
        //   creators[1] = new ConcreteCreatorB();
    
        //   // Iterate over creators and create products

        //   foreach (Creator creator in creators)
        //   {
        //     Product product = creator.FactoryMethod();
        //     Console.WriteLine("Created {0}",
        //       product.GetType().Name);
        //   }
        },
        products: {
            0: class IntroductionPage{},
            1: class ResultsPage{},
            2: class ConclusionPage{},
            3: class SummaryPage{},
            4: class BibliographyPage{}
        },
        creators: {
            0: class Resume {
                constructor(__this__){
                    __this__.abstract_product.Add(new __this__.SkillsPage());
                    __this__.abstract_product.Add(new __this__.EducationPage());
                    __this__.abstract_product.Add(new __this__.ExperiencePage());
                }
            },
            1: class Report {
                constructor(__this__) {
                    __this__.abstract_product.Add(new __this__.IntroductionPage());
                    __this__.abstract_product.Add(new __this__.ResultsPage());
                    __this__.abstract_product.Add(new __this__.ConclusionPage());
                    __this__.abstract_product.Add(new __this__.SummaryPage());
                    __this__.abstract_product.Add(new __this__.BibliographyPage());   
                }
            }
        }
    });
};