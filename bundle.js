"use strict";
console.log("jello");
const buttonContainer = document.getElementById('input-container');
const inputContainerDimensions = new Vector(buttonContainer.offsetWidth - 58, buttonContainer.offsetHeight - 58);
class Button {
    constructor(buttonEl) {
        this.buttonEl = buttonEl;
        const minSpeed = 2;
        const maxSpeed = 7;
        const minMax = (min, max) => (max - min) * Math.random() + min;
        this.velocity = new Vector(minMax(minSpeed, maxSpeed), minMax(minSpeed, maxSpeed));
        const positionX = inputContainerDimensions.x * Math.random();
        const positionY = inputContainerDimensions.y * Math.random();
        this.position = new Vector(positionX, positionY);
    }
    calculatePosition() {
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
        const { x, y } = this.position;
        this.buttonEl.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }
}
let start = 0;
const buttons = [];
for (let i = 1; i <= 15; i++) {
    const element = document.getElementById('button-' + i);
    buttons.push(new Button(element));
}
class Calculator {
    constructor(btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btnAdd, btnSub, btnMul, btnDiv, btnClr, btnPer, outPut) {
        this.btn1 = btn1;
        this.btn2 = btn2;
        this.btn3 = btn3;
        this.btn4 = btn4;
        this.btn5 = btn5;
        this.btn6 = btn6;
        this.btn7 = btn7;
        this.btn8 = btn8;
        this.btn9 = btn9;
        this.btnAdd = btnAdd;
        this.btnSub = btnSub;
        this.btnMul = btnMul;
        this.btnDiv = btnDiv;
        this.btnClr = btnClr;
        this.btnPer = btnPer;
        this.outPut = outPut;
        this.equation = "";
        this.result = 0;
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
            this.equation = this.equation.substr(0, this.equation.length - 1);
            this.calculateEquation();
        };
    }
    calculateEquation() {
        if (this.equation == "") {
            this.outPut.innerText = "Crazy Calculator";
            return;
        }
        try {
            this.result = eval(this.equation
                .replace("×", "*")
                .replace("−", "-")
                .replace("÷", "/"));
        }
        catch (e) {
        }
        finally {
            this.outPut.innerText = this.equation + " = " + this.result;
        }
    }
}
function step(timestamp) {
    if (!start)
        start = timestamp;
    var progress = timestamp - start;
    for (const button of buttons) {
        button.update();
    }
    window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);
new Calculator(buttons[0], buttons[1], buttons[2], buttons[3], buttons[4], buttons[5], buttons[6], buttons[7], buttons[8], buttons[9], buttons[10], buttons[12], buttons[11], buttons[13], buttons[14], document.getElementById("output-text"));
//# sourceMappingURL=bundle.js.map