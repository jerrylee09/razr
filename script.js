// The Circle Object
function Circle(radius) {
	this.radius = radius;
	this.getArea = function () {
		return Math.PI * this.radius * 2
	};

	this.toString = function() {
		return "Circle: Radius = " + this.radius + ", Area = " + this.getArea();
	}
}

// The Square Object
function Square(length) {
	this.length = length;
}

Square.prototype.getArea = function () {
	return this.length * 4
};

Square.prototype.toString = function () {
	return "Square: length = " + this.length + ", Area = " + this.getArea();
};

// Sorting Function
function compare(a,b) {
  if (a.getArea() < b.getArea())
    return 1;
  if (a.getArea() > b.getArea())
    return -1;
  return 0;
}

// Generate Function
function generatorShapeSize(shape) {
	var shapeArray = [];

	for (i = 0; i < 50; i++) {
        var ranNum = Math.floor(Math.random() * 100) + 1;
        var newShape = new shape(ranNum / 2);
        if(newShape.hasOwnProperty('radius')) {
            newShape = new shape(ranNum / 2);
            newShape.diameter = ranNum;
		} else {
            newShape = new shape(ranNum);
		}

        shapeArray[i] = newShape;
	}
	return shapeArray;
}

// Shape creation
window.onload = function () {
    function createShape(shape) {
        var shapeArray = generatorShapeSize(shape);
        var deg = 0;
        shapeArray.sort(compare).forEach(function(obj) {
            var square = obj.length;
            var circle = obj.radius;
            var li = document.createElement("li");
            var div = document.createElement("div");
            li.appendChild(div);

            if(square) {
                div.style.backgroundColor = "red";
                div.style.height = square + "px";
                div.style.width = square + "px";
            }
            if(circle) {
                var diameter = obj.diameter;
                var area = obj.getArea();
                div.style.backgroundColor = "blue";
                div.style.height = diameter + "px";
                div.style.width = diameter + "px";
                div.style.borderRadius = circle + "px";
            }

            setInterval(function(){
                div.style.transform  = 'rotate('+deg+'deg)';
                ++deg;
            }, 2000);

            document.getElementById("shapeList").appendChild(li);
        });
    }
window.setInterval(function () {
    setInterval(function(){

        createShape(Square);
        createShape(Circle);
    }, 1000);

}, 1000);


};
