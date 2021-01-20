// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius
    }
    get diameter(){
        return this.radius *2
    }

    get circumference(){
        return Math.PI * this.diameter
    }

    get area(){
        return Math.PI * Math.pow(this.radius, 2)
    }

    set diameter(newD){
        this.radius = newD/2
    }

    set circumference(newC){
        this.diameter = newC/Math.PI
    }

    set area(newA){
       this.radius = Math.sqrt((newA/Math.PI))
    }
}