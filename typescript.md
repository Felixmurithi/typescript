typescript helps with static type checking, ensuring u cannot reasign varaiable sto different primitive type, interface declaration on an object, tells when u misspell a varaiable name. Typescript is compiled, functions returns and possible errors have to be checked before compilation.

## setup

1.  `npm i typescript -g`
2.  `npx tsc --init` to set up the ts config file, set src folder, `"outDir": "./dist"`, `"noEmitOnError": true`, `"sourceMap": true`, `"module": "ES6"`,
3.  run tsc to coimpile.
4.  with node installed run `npx dist/index.js` to run the js file.

## declaring types

```ts
let age: number;
let age1: number = 50;
// cannot be declared to another type , age = "50"❌
// let name: string = 50; type of string cannot be declared to number.

//infered types
let age2 = 70; // ts is able to assign this value a type without even writing

// TYPE ANY
//variables with no set type to any- can be dynamically reasigned just like js.
let a; // type will

//ARRAYS
let numbers: number[] = [1, 2, 3];
let age3 = [20]; //also infered

let age4 = []; //empty arrays set to any
const age: Array<number> = [10, 292];

// TUPPLE
//fixed length array- with type declared.
// should be ideally only be used with 2 values only.
let age: [number, string] = [20, "twenty"];
[(y:string)=> void, (v:number)=> number]

//ENUM- object with defined values
enum size {
  small,
  medium,
  large,
}
// enum values will be set to number set from 0,1,2.. if not declared.
//if a number the others will be set according to previous number + 1, large to  1 and 2
enum size {
  small = 0,
  medium = 3,
  large,
}
//if a number's value is not set, its value will beprevious value + 1, large to  1 and 2

//the compiation of enum  will produce alot of js code

//to reduce the amount of code asign const to enum
const enum size {
  small = 0,
  medium,
  large,
}
//and use one of the values
const size = size.large;

//the comilation will only be
const size = 0;
//removin the unused enums

//enum with strings- all values have to be declared.
const enum names {
  first = "nana",
  second = "kena",
}
```

## Objects

1. setting the types of objects, readonly fields and optional fields inluded

```ts
const cart: {
  readonly item: string;
  quantity: number;
  addWishlist?: boolean;
  getprice: (itemId: string) => void;
} = {
  item: "sugar",
  quantity: 1,
  getprice: (sugarId) => {
    db.getpice(sugarId);
  },
};
```

2. **Object interface**

```ts
interface Coordinate {
  x: number;
  y: number;
}
```

```ts
interface CoordinateWithZ extends Coordinate {
  z: number;
}
```

3. **Object type**-the verbose type declartions for the object can be made into an alias

```ts
type ShoppingCart: {
    readonly item: string;
  quantity: number;
  addWishlist?: boolean;
  getprice: (itemId: string) => void;
}


const Cart: ShoppingCart= {
  item: "sugar",
  quantity: 1,
  getprice: (sugarId) => {
    db.getpice(sugarId);
  },
};
```

4. **Object Record**- declaring the proprties and values. Record can only have two types declared (property + value )

```ts
const Cart: Record<string, number> = {
  item: "sugar",
  quantity: 1,
  getprice: (sugarId) => {
    db.getpice(sugarId);
  },
};
```

## Union Types

one variable or paarameter with differnet type options

```ts
function CatDog(food: number | string) {
  if (typeof food == number) {
    return "Cat";
  }
  return "Dog";
}
```

## type intersections

```ts
type Draggable(){
    drag: ()=> void
}
type Resizable(){
        resize: ()=> void

}

type: UIwidget = Draggable and Resizable

let textBox : UIwidget: {
     drag: ()=> void,
     resize: ()=> void
}
```

## Literal types

```ts
let quantity : 50
let quantity : 50 | 100

//using types
type Quantity: 50 | 100
const size: Quantity= 50
```
