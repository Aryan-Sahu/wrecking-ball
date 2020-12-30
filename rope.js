class Rope{
    constructor(bodyA,pointB){
        this.options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 200
        }
        this.chain = Matter.Constraint.create(this.options);
        World.add(world,this.chain);
    }
    fly(){
        this.chain.bodyA=null
    }
    display(){
        if(this.chain.bodyA){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.pointB
        strokeWeight(3)
        stroke("white")
        line(pointA.x,pointA.y,pointB.x,pointB.y)}

    }
}