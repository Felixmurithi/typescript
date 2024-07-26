## Basics

With typescript the explicit returns, number and type of parameters, optional parameters and warnings for an unused parameters and local variables can be set up

```ts
const Max(a:number, b:number, c:number)=>{
    //1. c is unused  paramters
    const d= 20 //2. d is unused llocal parameter
    if(a>b) {return a}
    //3. function will return undefined when b>a

    //4 function can be called with missing parameters
    Max(2)
}
```

Type script will warn of any of these issues and they can be im,proved by:

1. set `"noUnusedLocals": true` and get warnings
2. set `"noUnusedParameters": true` and get warnings when function parameter is unused.
3. set function return type decalred after the parameter

```ts
const Max(a:number, b:number, c:number): number=>{
...}
```

3. set some optional params or define their default value inorder to make passing the argument optional.

```ts
interface Coordinate {
  x: number;
  y: number;
}

const Max(a:number, b:number, c?:Coordinate): number=>{
  // check if the optional fields exist
  const d= c?.x

...}
```

```ts
const Max(a:number, b:number, c=22): number=>{
...}
```

4. function taht returns nothing

```ts
const Max(a:number, b:number, c=22): void=>{
...}
```

5. function taht returns Promise

```ts
const Max(a:number, b:number, c=22): Promise<string>=>{
...}
```

6. function that takes in mutiple destuctured params or returns an array.

```ts
const Max(a:number, ...b:number[], c=22): Array<string>=>{
...}
```

7. function that takes functions as param or returns functions

```ts
const Max(a:number, b: (v:number)=>void): Array<string>=>{
  return compare: (b)=>c:number

}
```

8. The param or returned functions can be declared as types. **Note** the params can be can be declared as anything

```ts
const type InFunction= (v:number)=>void
const type OutFunction= (v:number)=>number

const Max(a:number, b: InputFunction: Array<string>=>{
  return compare:OutFunction

}
```

## Function Overloading

The first 3 functions are necessary only for doucmentation, without them the function call would not show the 3 options.

```ts
interface Coordinate {
  x: number;
  y: number;
}

function parseCoordinate(str: string): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown) {
  let coords: Coordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === "object") {
    coords = { ...(arg1 as Coordinate) };
  }

  if (typeof arg1 === "string") {
    arg1.split(",").forEach((coord) => {
      const [key, value] = coord.split(":");
      coords[key as "x" | "y"] = parseInt(value, 10);
    });
  } else {
    coords.x = arg1 as number;
    coords.y = arg2 as number;
  }

  return coords;
}

console.log(parseCoordinate({ x: 12, y: 67 }));
console.log(parseCoordinate(12, 67));
console.log(parseCoordinate("x:12,x:67"));
```

`as` keyword tells typescript that u are aware of the types declared, or the properties and the arguments follow those patterns
