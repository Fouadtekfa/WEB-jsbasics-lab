// TODO
// A `Circle` class/function that can be invoked as :
// const c = new Circle();
// It should contain at least 3 hidden fields `x`, `y`, and `radius`.
export function Circle(x,y,radius) {
    let XGlobal = x;
    let YGlobal=y;
    let RadiusGlobal=radius;
    let tab=[XGlobal,YGlobal];

    let creatProperty=(prop,variable,$this)=>{

        Object.defineProperty($this, prop, {
            get: ()=>  variable,
            enumerable : false,
        });

    }
    creatProperty('x',XGlobal,this);
    creatProperty('y',YGlobal,this);
    creatProperty('radius',RadiusGlobal,this);
   //creatProperty('coords',tab,this);
    Object.defineProperty(this, 'coords', {
        get: ()=>  tab,
        enumerable : false,
    });


    Object.defineProperty(this, 'moveTo', {
        value: (x ,y)=>{
            XGlobal=x;
            YGlobal=y;
            tab=[XGlobal,YGlobal];
        },
        enumerable : false,
    });




}
