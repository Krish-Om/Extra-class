class MathUtils{
    static add(a,b){
        return a+b;
    }

    get_add(n1,n2){
        return n1+n2;
    }
}

const v = MathUtils.add(10,20); 
// console.log(v); // 30


class Circle{
    constructor(radius){
        this.__radius = radius;
    }

    get radius(){
        return this.__radius;
    }
    
    set radius(radius){
     if (radius > 0){
            this.__radius = radius;
     }else{
        console.log('Invalid Radius Value');
     }
    }
}

const c = new Circle(10);
console.log(c.radius); // 10
c.radius = 'jok';
// console.log(c.radius); // 20