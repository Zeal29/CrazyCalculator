"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector_1 = require("./Vector");
console.log("jello");
var buttonContainer = document.getElementById('input-container');
var inputContainerDimensions = new Vector_1.Vector(buttonContainer.offsetWidth - 58, buttonContainer.offsetHeight - 58);
var Button = /** @class */ (function () {
    function Button(buttonEl) {
        this.buttonEl = buttonEl;
        var minSpeed = 2;
        var maxSpeed = 7;
        var minMax = function (min, max) { return (max - min) * Math.random() + min; };
        this.velocity = new Vector_1.Vector(minMax(minSpeed, maxSpeed), minMax(minSpeed, maxSpeed));
        var positionX = inputContainerDimensions.x * Math.random();
        var positionY = inputContainerDimensions.y * Math.random();
        this.position = new Vector_1.Vector(positionX, positionY);
    }
    Button.prototype.calculatePosition = function () {
        this.position.add(this.velocity);
        if (inputContainerDimensions.x <= this.position.x || 0 >= this.position.x) {
            this.velocity.x *= -1;
        }
        if (inputContainerDimensions.y <= this.position.y || 0 >= this.position.y) {
            this.velocity.y *= -1;
        }
    };
    Button.prototype.update = function () {
        this.calculatePosition();
        var _a = this.position, x = _a.x, y = _a.y;
        this.buttonEl.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    };
    return Button;
}());
var start = 0;
var buttons = [];
for (var i = 1; i <= 15; i++) {
    var element = document.getElementById('button-' + i);
    buttons.push(new Button(element));
}
var Calculator = /** @class */ (function () {
    function Calculator(btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btnAdd, btnSub, btnMul, btnDiv, btnClr, btnPer, outPut) {
        var _this = this;
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
        btn1.buttonEl.onmousedown = function () {
            _this.equation += "1";
            _this.calculateEquation();
        };
        btn2.buttonEl.onmousedown = function () {
            _this.equation += "2";
            _this.calculateEquation();
        };
        btn3.buttonEl.onmousedown = function () {
            _this.equation += "3";
            _this.calculateEquation();
        };
        btn4.buttonEl.onmousedown = function () {
            _this.equation += "4";
            _this.calculateEquation();
        };
        btn5.buttonEl.onmousedown = function () {
            _this.equation += "5";
            _this.calculateEquation();
        };
        btn6.buttonEl.onmousedown = function () {
            _this.equation += "6";
            _this.calculateEquation();
        };
        btn7.buttonEl.onmousedown = function () {
            _this.equation += "7";
            _this.calculateEquation();
        };
        btn8.buttonEl.onmousedown = function () {
            _this.equation += "8";
            _this.calculateEquation();
        };
        btn9.buttonEl.onmousedown = function () {
            _this.equation += "9";
            _this.calculateEquation();
        };
        btnAdd.buttonEl.onmousedown = function () {
            _this.equation += "+";
            _this.calculateEquation();
        };
        btnSub.buttonEl.onmousedown = function () {
            _this.equation += "−";
            _this.calculateEquation();
        };
        btnDiv.buttonEl.onmousedown = function () {
            _this.equation += "÷";
            _this.calculateEquation();
        };
        btnMul.buttonEl.onmousedown = function () {
            _this.equation += "×";
            _this.calculateEquation();
        };
        btnPer.buttonEl.onmousedown = function () {
            _this.equation += ".";
            _this.calculateEquation();
        };
        btnClr.buttonEl.onmousedown = function () {
            _this.equation = _this.equation.substr(0, _this.equation.length - 1);
            _this.calculateEquation();
        };
    }
    Calculator.prototype.calculateEquation = function () {
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
    };
    return Calculator;
}());
function step(timestamp) {
    if (!start)
        start = timestamp;
    var progress = timestamp - start;
    for (var _i = 0, buttons_1 = buttons; _i < buttons_1.length; _i++) {
        var button = buttons_1[_i];
        button.update();
    }
    window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);
new Calculator(buttons[0], buttons[1], buttons[2], buttons[3], buttons[4], buttons[5], buttons[6], buttons[7], buttons[8], buttons[9], buttons[10], buttons[12], buttons[11], buttons[13], buttons[14], document.getElementById("output-text"));
//# sourceMappingURL=app.js.map