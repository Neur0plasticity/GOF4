export const facade = function(subsystems, privatE) {

    if (!subsystems) {throw new Error();}
    Array.isArray(subsystems) || (()=>{throw new Error();})()

    for (let k in subsystems) {
        !privatE.hasOwnProperty(subsystems[k]) || (()=>{throw new Error();})();
        privatE[subsystems[k]] = "new "+subsystems[k];
    }
    return ({private:privatE});
};
