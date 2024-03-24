class Circle{
    radius = "1.0"
    color = "red"

    Circle(){
        console.log(`The radius and color of the circle is ${this.radius} and ${this.color}`)
    }

    Circle(radius){
        this.radius = radius;
    }
}

let c1 = new Circle();
c1.Circle();
c1.Circle(3.0);