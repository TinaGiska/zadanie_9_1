
var a = prompt('Podaj dowolną liczbę "a"');
    h = prompt('Podaj dowolną liczbę "b"');

function getTriangleArea(a, h) {

	if (a <= 0 || h <= 0 )  {
	  document.write('Nieprawidłowe dane');
	  return;
	  
	} else  {
	   var area = a*h/2;
	   document.write('Pole trójkąta to '+ area + ' cm3' );
	   return area;
	}
}

console.log("10,6", getTriangleArea(10, 6));
console.log("a i h", getTriangleArea(a, h));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(2, 5);
var triangle3Area = getTriangleArea(7, 6);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);


