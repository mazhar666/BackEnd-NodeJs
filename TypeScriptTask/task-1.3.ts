class Rectangle {
    private length: number;
    private width: number;

    constructor(length: number = 1.0, width: number = 1.0) {
        this.length = length;
        this.width = width;
    }

    getLength(): number {
        return this.length;
    }

    setLength(length: number): void {
        this.length = length;
    }

    getWidth(): number {
        return this.width;
    }

    setWidth(width: number): void {
        this.width = width;
    }

    getArea(): number {
        return this.length * this.width;
    }

    getPerimeter(): number {
        return 2 * (this.length + this.width);
    }

    toString(): string {
        return `Rectangle[length=${this.length},width=${this.width}]`;
    }
}

// Example usage
const rectangle1 = new Rectangle(1.2, 3.4);
console.log(rectangle1.toString());

const rectangle2 = new Rectangle();
console.log(rectangle2.toString());

const rectangle3 = new Rectangle(5.6, 7.8);
console.log(rectangle3.toString());

console.log(`length is: ${rectangle3.getLength()}`);
console.log(`width is: ${rectangle3.getWidth()}`);
console.log(`area is: ${rectangle3.getArea().toFixed(2)}`);
console.log(`perimeter is: ${rectangle3.getPerimeter().toFixed(2)}`);
