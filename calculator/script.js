class Calculator {
    prmArea = document.querySelector("#numArea");
    secArea = document.querySelector("#simArea");
    prmNum = 0;
    sim;

    printNumber = num => { 
        if(this.prmArea.innerText.length < 21) this.prmArea.innerText += num;
    }

    clear = () => { 
        this.prmArea.innerText = "";
        this.secArea.innerText = "";
        this.prmNum = 0;
        this.sim = "";
    }

    printSim = sim => {
        if(this.secArea.innerText.length == 0) {
            this.prmNum = +this.prmArea.innerText;
            this.secArea.innerText = this.prmArea.innerText + " " + sim;
            this.prmArea.innerText = "";
            this.sim = sim;
            // sims.forEach(sim => {
            //     sim.removeEventListener("onclick");
            // })
        } 
    }

    calculate = () => {
        switch (this.sim) {
            case "+": {
                this.prmArea.innerText = this.prmArea.innerText * 1000000000000;
                this.secArea.innerText = this.prmArea.innerText * 1000000000000;
                this.prmNum *= 1000000000000;
                this.prmArea.innerText = (this.prmNum + +this.prmArea.innerText)/1000000000000;
                this.secArea.innerText = "";
                break;
            }
            case "-": {
                this.prmArea.innerText = this.prmArea.innerText * 1000000000000;
                this.secArea.innerText = this.prmArea.innerText * 1000000000000;
                this.prmNum *= 1000000000000;
                this.prmArea.innerText = (this.prmNum - +this.prmArea.innerText)/1000000000000;
                this.secArea.innerText = "";
                break;
            }
            case "x": {
                this.prmArea.innerText = this.prmArea.innerText * 1000000000000;
                this.secArea.innerText = this.prmArea.innerText * 1000000000000;
                this.prmNum *= 1000000000000;
                this.prmArea.innerText = (this.prmNum * +this.prmArea.innerText)/Math.pow(1000000000000,2);
                this.secArea.innerText = "";
                break;
            }
            case "/": {
                this.prmArea.innerText = this.prmArea.innerText * 1000000000000;
                this.secArea.innerText = this.prmArea.innerText * 1000000000000;
                this.prmNum *= 1000000000000;
                this.prmArea.innerText = this.prmNum / +this.prmArea.innerText;
                this.secArea.innerText = "";
                if(this.prmArea.innerText == "NaN" || this.prmArea.innerText == "Infinity") this.prmArea.innerHTML = "ERR"; 
                break;
            }
            case "%": {
                this.prmArea.innerText = this.prmArea.innerText * 1000000000000;
                this.secArea.innerText = this.prmArea.innerText * 1000000000000;
                this.prmNum *= 1000000000000;
                this.prmArea.innerText = (this.prmNum % +this.prmArea.innerText)/1000000000000;
                this.secArea.innerText = "";
                break;
            }
            case "exp": {
                this.prmArea.innerText = this.prmArea.innerText * 1000000000000;
                this.secArea.innerText = this.prmArea.innerText * 1000000000000;
                this.prmNum *= 1000000000000;
                this.prmArea.innerText = Math.pow(+this.prmNum/1000000000000, +this.prmArea.innerText/1000000000000);
                this.secArea.innerText = "";
                break;
            }
        }
    }

    printPoint = () => {
        this.prmArea.innerText += ".";
    }

    back = () => {
        if(this.prmArea.innerText != "") this.prmArea.innerHTML = this.prmArea.innerText.substr(0, this.prmArea.innerText.length-1);
        if(this.prmArea.innerText == "" && this.secArea.innerText.length > 0) {
            this.prmArea.innerText = this.secArea.innerText.substr(0, this.secArea.innerText.length-2);
            this.secArea.innerHTML = "";
        }
    }

    setNegative = () => {
        if(this.prmArea.innerText != "") this.prmArea.innerHTML = this.prmArea.innerText * (-1);
    }

    sqrt = () => {
        if(this.prmArea.innerText != "" && this.prmArea.innerHTML > 0) this.prmArea.innerText = Math.sqrt(this.prmArea.innerText);
        if(this.prmArea.innerText == "NaN") this.prmArea.innerHTML = "ERR"; 
    }

    pow = () => {
        if(this.prmArea.innerText != "" && this.secArea.innerText == "") {
            this.prmNum = +this.prmArea.innerText;
            this.secArea.innerText = this.prmArea.innerText + " " + "exp";
            this.prmArea.innerText = "";
            this.sim = "exp";
        }
    }
}

const calculator = new Calculator();

const numbers = document.querySelectorAll(".num");
const sims = document.querySelectorAll(".sim");
const equal = document.querySelector(".equal");
const ac = document.querySelector(".ac");
const dot = document.querySelector(".dot");
const back = document.querySelector(".back");
const neg = document.querySelector(".neg");
const pow = document.querySelector(".pow");
const sqrt = document.querySelector(".sqrt");

numbers.forEach(number => { number.onclick = () => { calculator.printNumber(number.innerText); }})
sims.forEach(sim => { sim.onclick = () => { if(calculator.prmArea.innerText != "") calculator.printSim(sim.innerText); }})
equal.onclick = () => { calculator.calculate(); }
ac.onclick = () => { calculator.clear(); }
dot.onclick = () => { if(calculator.prmArea.innerText != "" && !calculator.prmArea.innerText.includes(".")) calculator.printPoint(); }
back.onclick = () => { calculator.back(); }
neg.onclick = () => { calculator.setNegative(); }
pow.onclick = () => { calculator.pow(); }
sqrt.onclick = () => { calculator.sqrt(); }