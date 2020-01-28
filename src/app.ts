import {Vector} from "./Vector"

console.log("jello");





const buttonContainer = document.getElementById('input-container')!;

const inputContainerDimensions = new Vector(buttonContainer.offsetWidth - 58, buttonContainer.offsetHeight - 58);


class Button {
    private readonly velocity: Vector;
    private readonly position: Vector;

    constructor(public buttonEl: HTMLButtonElement) {

        const minSpeed = 2;
        const maxSpeed = 7;

        const minMax = (min: number, max: number) => (max - min) * Math.random() + min;


        this.velocity = new Vector(minMax(minSpeed, maxSpeed), minMax(minSpeed, maxSpeed));

        const positionX = inputContainerDimensions.x * Math.random();
        const positionY = inputContainerDimensions.y * Math.random();

        this.position = new Vector(positionX, positionY)
    }

    private calculatePosition() {
        this.position.add(this.velocity);
        if (inputContainerDimensions.x <= this.position.x || 0 >= this.position.x) {
            this.velocity.x *= -1;
        }

        if (inputContainerDimensions.y <= this.position.y || 0 >= this.position.y) {
            this.velocity.y *= -1;
        }
    }

    update() {
        this.calculatePosition();
        const {x, y} = this.position;
        this.buttonEl.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }

}

let start = 0;
const buttons: Button[] = [];

for (let i = 1; i <= 15; i++) {
    const element = document.getElementById('button-' + i)! as HTMLButtonElement;
    buttons.push(new Button(element))
}


class Calculator {

    public equation: string = "";
    public result: number = 0;

    constructor(public btn1: Button, public btn2: Button, public btn3: Button, public btn4: Button, public btn5: Button, public btn6: Button,
                public btn7: Button, public btn8: Button, public btn9: Button, public btnAdd: Button, public btnSub: Button, public btnMul: Button,
                public btnDiv: Button, public btnClr: Button, public btnPer: Button, public outPut: HTMLDivElement) {


        btn1.buttonEl.onmousedown = () => {
            this.equation += "1";
            this.calculateEquation();
        };

        btn2.buttonEl.onmousedown = () => {
            this.equation += "2";
            this.calculateEquation();
        };

        btn3.buttonEl.onmousedown = () => {
            this.equation += "3";
            this.calculateEquation();
        };

        btn4.buttonEl.onmousedown = () => {
            this.equation += "4";
            this.calculateEquation();
        };

        btn5.buttonEl.onmousedown = () => {
            this.equation += "5";
            this.calculateEquation();
        };

        btn6.buttonEl.onmousedown = () => {
            this.equation += "6";
            this.calculateEquation();
        };

        btn7.buttonEl.onmousedown = () => {
            this.equation += "7";
            this.calculateEquation();
        };

        btn8.buttonEl.onmousedown = () => {
            this.equation += "8";
            this.calculateEquation();
        };

        btn9.buttonEl.onmousedown = () => {
            this.equation += "9";
            this.calculateEquation();
        };

        btnAdd.buttonEl.onmousedown = () => {
            this.equation += "+";
            this.calculateEquation();
        };

        btnSub.buttonEl.onmousedown = () => {
            this.equation += "−";
            this.calculateEquation();
        };

        btnDiv.buttonEl.onmousedown = () => {
            this.equation += "÷";
            this.calculateEquation();
        };

        btnMul.buttonEl.onmousedown = () => {
            this.equation += "×";
            this.calculateEquation();
        };

        btnPer.buttonEl.onmousedown = () => {
            this.equation += ".";
            this.calculateEquation();
        };

        btnClr.buttonEl.onmousedown = () => {
            this.equation = this.equation.substr(0, this.equation.length-1);
            this.calculateEquation();
        };


    }

    calculateEquation() {
        if (this.equation == "") {
            this.outPut.innerText = "Crazy Calculator";
            return;
        }

        try {
            this.result = eval(
                this.equation
                    .replace("×", "*")
                    .replace("−", "-")
                    .replace("÷", "/")
            )
        } catch (e) {
        } finally {
            this.outPut.innerText = this.equation + " = " + this.result;
        }
    }

}


function step(timestamp: number) {
    if (!start) start = timestamp;
    var progress = timestamp - start;

    for (const button of buttons) {
        button.update();
    }

    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);


new Calculator(
    buttons[0],
    buttons[1],
    buttons[2],
    buttons[3],
    buttons[4],
    buttons[5],
    buttons[6],
    buttons[7],
    buttons[8],
    buttons[9],
    buttons[10],
    buttons[12],
    buttons[11],
    buttons[13],
    buttons[14],
    document.getElementById("output-text")! as HTMLDivElement
);


