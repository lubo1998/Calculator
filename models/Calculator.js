function Calculator(leftOperand, operator, rightOperand) {
    this.leftOperand = leftOperand;
    this.operator = operator;
    this.rightOperand = leftOperand;

    this.calculateResult = function () {
        let result=0;
        switch (this.operator)
        {
            case "+":
                result=this.leftOperand+this.rightOperand;
                break;
            case "-":
                result=this.leftOperand-this.rightOperand;
                break;
            case "*":
                result=this.leftOperand*this.rightOperand;
                break;
            case "/":
                result=this.leftOperand/this.rightOperand;
                break;
            case "^":
                result=this.leftOperand**this.rightOperand;
                console.log(result);
                break;

        }

        return result;
    };
}

module.exports=Calculator;