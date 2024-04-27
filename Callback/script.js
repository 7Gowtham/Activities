let container_head = document.querySelector(".container-head")
let head = document.createElement("h2")
head.innerHTML = "Callback - Countdown"

container_head.appendChild(head)

let container = document.querySelector(".container")

let h1 = document.createElement("h1")
h1.innerHTML = "Your Countdown Starts Now!"
let c = 10

setTimeout(()=>{
    setTimeout(()=>{
        h1.innerHTML = ''
        h1.innerHTML = c--
        setTimeout(()=>{
            h1.innerHTML = ''
            h1.innerHTML = c--
            setTimeout(()=>{
                h1.innerHTML = ''
                h1.innerHTML = c--
                setTimeout(()=>{
                    h1.innerHTML = ''
                    h1.innerHTML = c--
                    setTimeout(()=>{
                        h1.innerHTML = ''
                        h1.innerHTML = c--
                        setTimeout(()=>{
                            h1.innerHTML = ''
                            h1.innerHTML = c--
                            setTimeout(()=>{
                                h1.innerHTML = ''
                                h1.innerHTML = c--
                                setTimeout(()=>{
                                    h1.innerHTML = ''
                                    h1.innerHTML = c--
                                    setTimeout(()=>{
                                        h1.innerHTML = ''
                                        h1.innerHTML = c--
                                        setTimeout(()=>{
                                            h1.innerHTML = ''
                                            h1.innerHTML = c--
                                            setTimeout(()=>{
                                                h1.innerHTML = ''
                                                h1.innerHTML = "Happy Independence Day!!"
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)          
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

container.appendChild(h1)