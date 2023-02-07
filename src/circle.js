// TODO
// A `Circle` class/function that can be invoked as :
// const c = new Circle();
// It should contain at least 3 hidden fields `x`, `y`, and `radius`.
export function Circle(x,y,radius) {
    let XGlobal = x;
    let YGlobal=y;
    let RadiusGlobal=radius;
    let tab=[XGlobal,YGlobal];
    let AreaGlobal = Math.pow(tab, 2) * Math.PI;

    let creatProperty=(prop,$this,getFunction,setFunction)=>{

        Object.defineProperty($this, prop, {
            get: getFunction,
            set : setFunction,
            enumerable : false,
        });

    }
    creatProperty('x',this,() => XGlobal);
    creatProperty('y',this,() => YGlobal);
    creatProperty('radius',this,() => RadiusGlobal,
    (val) => {
        if(val >= 0) RadiusGlobal = val;
         else throw new Error("le rayon doit etre positive");

    });

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

    creatProperty('area',this,() => AreaGlobal,
        (val) => {
            if(val >= 0){
                AreaGlobal = val;
                RadiusGlobal = Math.sqrt(val / Math.PI);

            }
            else throw new Error("l'aire doit etre positive");

        });

}
