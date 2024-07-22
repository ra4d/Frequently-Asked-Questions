const btns  = document.querySelectorAll(".btn");
const demos = document.querySelectorAll(".demo")
btns.forEach((btn, index)=>{
    btn.addEventListener("click" , ()=>{
        demos.forEach((demo , dindex)=>{
            if(index == dindex) {
                demo.classList.toggle("showe")
            }
        })
    })
})
