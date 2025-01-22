let main1 = (task) => {
    console.log(task());
}
main1(()=>{
    return " Iam cb1"

})
main1(()=>{
    return " Iam cb2"
})
