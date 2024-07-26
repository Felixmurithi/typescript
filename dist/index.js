"use strict";
function parseCoordinate(arg1, arg2) {
    let coords = {
        x: 0,
        y: 0,
    };
    if (typeof arg1 === "object") {
        coords = Object.assign({}, arg1);
    }
    if (typeof arg1 === "string") {
        arg1.split(",").forEach((coord) => {
            const [key, value] = coord.split(":");
            coords[key] = parseInt(value, 10);
        });
    }
    else {
        coords.x = arg1;
        coords.y = arg2;
    }
    return coords;
}
console.log(parseCoordinate({ x: 12, y: 67 }));
console.log(parseCoordinate(12, 67));
console.log(parseCoordinate("y:12,x:67"));
//# sourceMappingURL=index.js.map