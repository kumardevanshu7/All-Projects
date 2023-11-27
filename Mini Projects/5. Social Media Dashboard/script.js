let checkbox = document.querySelector("input[name=theme]");

checkbox.addEventListener("change", function(){
  
    if(this.checked){
        trans();
        document.documentElement.setAttribute("data-theme", "dark");
    }
    else{
        trans();
        document.documentElement.setAttribute("data-theme", "light");
    }
})

// means transition is function
let trans = () => {
    document.documentElement.classList.add("transition");

    window.setTimeout(()=>{
        document.documentElement.classList.remove("transition")
    }, 1000)
}
