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
export interface factoryOBJ {
    main:       Function | string,
    products:   {[index:string]:Function},
    creators:  {[index:string]:Function}
};