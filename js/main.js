const moveVertical = document.querySelector(".vertical-move");

window.addEventListener('DOMContentLoaded',() =>{
    let y = 3
    let x = 54
    let z = 0;
    setInterval(() =>{
        // if(y <= -160){
        //     y += 360
        // }else if(y >= 200){
        //     y -= 50
        // }
        // y -= 50
        
        let array = moveVertical.children
        

        

        moveVertical.style.transform = `translateY(${x * y + 'px'})`
        console.log(x,y);
        y -= 1;
        if(y <= 0){
            x = 70;
        }else{
            x = 54;
        }
        if(y < -3){
            y = 3;
        }

        if(y < 0){
            console.log("ff")
            array[2].style.opacity = "0"
        }else{
            array[2].style.opacity = "1"

        }
        
    },1500)
})