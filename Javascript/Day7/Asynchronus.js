// window.setTimeout(()=> {
//     console.log("im settimeout");
    
// },5000)


// window.setInterval(()=> {
//     console.log("im settinterval");
    
// },3000)

function main(m,n) {
    new Promise((resolve , reject) => {
    setTimeout(()=> {
        if (isNaN(m) || isNaN(n)) {
            return reject()
        }
        for(let i=m;i<=n;i++) {
            console.log(i);       
        }
        return resolve()
    },5000)
} )
.then(()=> console.log("promise is resolved"))
.catch(()=> console.log("error occures"))
}
main(1,10)
function demo(){
    console.log("no's printed");
    
}
demo()

// let onLine = window.navigator.onLine
// new Promise((resolve,reject)=> {
//     setTimeout(()=> {
//         if(onLine==true){
//             return resolve()
//         }else{
//             return reject()
//         }
//     },5000)
// })
// .then(()=> console.log("online....")

// )
// .catch(()=> console.log("offline...")
// )