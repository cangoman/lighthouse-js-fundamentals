function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) {
    return undefined;
  }
  return length * width;
}

function calculateTriangleArea( base, height) {
  if (length < 0 || width < 0) {
    return undefined;
  }
  return length * width / 2;
}

function calculateCircleArea(radius) {
  if (radius < 0) {
    return undefined;
  }
  return Math.PI * Math.pow(radius, 2);
}

console.log( calculateTriangleArea(-1, 0));