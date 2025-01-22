let operation = (a,b,task) => {
    console.log(task(a,b));
    
} 
operation(a=Number(prompt("Enter a for add")),
        b=Number(prompt("Enter b value for add")),
        (a,b) => {
            return a+b
        })
        operation(a=Number(prompt("Enter a for sub")),
        b=Number(prompt("Enter b value for sub")),
        (a,b) => {
            return a-b
        })
        operation(a=Number(prompt("Enter a for mul")),
        b=Number(prompt("Enter b value for mul")),
        (a,b) => {
            return a*b
        })

