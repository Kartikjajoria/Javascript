const loadScript = async (src)=>{
    return new Promise((resolve, reject)=>{
    let script = document.createElement("script")
    script.src =src
    script.onload=()=>{
        resolve(src + "done success")
    }
    document.head.append(script)
  })
}
const main2 = async()=>{
    console.log(new Date())
    let a= await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css")
    console.log(new Date())
    console.log(a)
}
main2()