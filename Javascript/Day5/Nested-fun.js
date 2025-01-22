function parent()
{
    function child()
    {
        console.log("iam child function");
    }
    child()
}
parent()

var a = 10;
var b = 20;
function parent1()
{
    var a = "hello"
    var b = "hiii"
    console.log(a);
    console.log(b);
    console.log(this.a);
    console.log(this.b);
}
parent1()