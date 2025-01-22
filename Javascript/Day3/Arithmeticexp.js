let main = function()
{
    let a = Number(prompt("Enter value of a"))
    let b = Number(prompt("Enter value of b"))
    let c = Number(prompt("Enter value of c"))
    let d = a + b + c
    console.log(d);
    let e = a - b - c
    console.log(e);
    let f = a * b * c
    console.log(f);

    if(a>=b && a>=c) {
        console.log("a is greater");
    }else{
        if(b>=a && b>=c){
            console.log("b is greater");
        }else{
            console.log("c is greater");
        }
    }
}
main()
