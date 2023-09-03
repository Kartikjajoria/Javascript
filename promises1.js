let p = new Promise((resolve, reject)=>{
    console.log("promise is pending")
    setTimeout(()=>{
        // console.log("i am a promise and i am fulfilled")
        // resolve(true)
        console.log("i a promise and i am rejected")
        reject(new Error("i am an error please bear me"))
    }, 5000)
})

