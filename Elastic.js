class Elastic{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.elastic = Constraint.create(options);
        World.add(world, this.elastic);
    }
    attach(body){
        this.elastic.bodyA = body;
    }
    
    fly(){
        this.elastic.bodyA = null;
    }

    display(){  
}
}