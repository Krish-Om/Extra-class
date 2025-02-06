const lat = 28.70;
const long = 77.10;


export function getDistance(lat,lon){
    return Math.sqrt(lat*lat + lon*lon);
}

export function floorFunc(num){
    return Math.floor(num);
}

export function sqrt(n){
    return Math.sqrt(n);
}


export class Person{

    getDetail(name){
        return `Name is ${name}`;
    }
}
export {lat,long};