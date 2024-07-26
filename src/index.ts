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
      coords[key as "x"] = parseInt(value, 10);
    });
  } else {
    coords.x = arg1 as number;
    coords.y = arg2 as number;
  }

  return coords;
}

console.log(parseCoordinate({ x: 12, y: 67 }));
console.log(parseCoordinate(12, 67));
console.log(parseCoordinate("y:12,x:67"));
