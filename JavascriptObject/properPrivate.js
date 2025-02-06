class Rectangle{
    #length; // private field after ECMAScript 2022
    #breadth;

    constructor(l=1,b=1,h=1){
        this.#length = l;
        this.#breadth = b;
        this.height = h
    }

    getArea(){
        return this.#length * this.#breadth;
    }
}

const rect1  = new Rectangle(10,20);
rect1.getArea();
console.log(rect1.getArea());

// console.table(new Rectangle(10,20).length); // undefined

console.log(rect1.height); // undefined