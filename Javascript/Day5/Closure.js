function parent()
{
    function child1()
    {
        console.log("im child 1");
    }
    function child2(){
        console.log("iam child2");
    }
    return [child1, child2]

}
parent()[0]()
parent()[1]()