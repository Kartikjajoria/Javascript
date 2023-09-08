async function kartik(){
let delhiwheather = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("27 deg")
    }, 1000)
})
let banglorewheather = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("21 deg")
    })
}, 2000)
// delhiwheather.then(alert)
// banglorewheather.then(alert)
let delhiw = await delhiwheather
let banglorew = await banglorewheather
return[delhiw, banglorew]
}
console.log("welcome to  wheather control room")
let a = kartik()
console.log(a)