let p1 =  async()=>{
    return new Promise((resolove, reject)=>{
        setTimeout(()=>{
            resolove(10)
        }, 1000)
    })
}
let p2 =  async()=>{
    return new Promise((resolove, reject)=>{
        setTimeout(()=>{
            resolove(20)
        }, 4000)
    })
}
let p3 =  async()=>{
    return new Promise((resolove, reject)=>{
        setTimeout(()=>{
            resolove(30)
        }, 5000)
    })
}
const run = async()=>{
    console.time("run")
    // let a1 = await p1() //this process will take more time but with the use of promise.all it will take less time
    // let a2 = await p2()
    // let a3 = await p3()

    let a1 =  p1()
    let a2 =  p2()
    let a3 =  p3()
    let a1a2a3 = await Promise.all([a1,a2,a3]) //takes less time because it shedules the work parallelly at the same time 
    console.log(a1a2a3)
    console.timeEnd("run")
}
run()
