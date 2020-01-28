export class Vector {
    constructor(public x: number, public y: number) {
    }

    add(vector: Vector): Vector {
        this.x += vector.x;
        this.y += vector.y;

        return this;
    }

}
