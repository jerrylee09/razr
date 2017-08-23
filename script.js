// The Circle Object
function Circle(radius) {
	this.radius = radius;
	this.diameter = radius * 2;
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
                div.style.backgroundColor = "blue";
                div.style.height = diameter + "px";
                div.style.width = diameter + "px";
                div.style.borderRadius = circle + "px";
            }
            var deg = 0;
            setInterval(function(){
                deg += 10;
                div.style.transform  = 'rotate('+deg+'deg)';

                if (deg === 100) {
                    deg = 0;
				}

            }, 500);

            document.getElementById("shapeList").appendChild(li);
        });
    }
    setInterval(function(){

        createShape(Square);
        createShape(Circle);

        createShape(Square);
        createShape(Circle);
    }, 1000);


};
