let p1 = new Promise((resolve, reject)=>{
    console.log("promise is pending")
    setTimeout(()=>{
        console.log("i am a promise and i am fulfilled")
        resolve(true)
        // console.log("i a promise and i am rejected")
        // reject(new Error("i am an error please bear me"))
    }, 5000)
})

let p2 = new Promise((resolve, reject)=>{
    console.log("promise is pending")
    setTimeout(()=>{
        // console.log("i am a promise and i am fulfilled")
        // resolve(true)
        console.log("i a promise and i am rejected")
        reject(new Error("i am an error please bear me"))
    }, 5000)
})
p1.then((value)=>{ 
console.log(value)
})
p2.catch((error)=>{    // will catch the and error will not be shown in console
    console.log("some error occured in p2")
})
