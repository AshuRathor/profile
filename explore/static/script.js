let l1_check = 0
let l2_check = 0
let l3_check = 0
let l4_check = 0
document.querySelector('#l1_li').addEventListener("mouseover", ()=>{
    if(l1_check ==0){
        setTimeout(() => {
            document.querySelector('#l1').style.width = '100px'
        }, 0);
        setTimeout(() => {
            document.querySelector('#l1').style.width = '0px'
            document.querySelector('#l1').style.margin = '0px 150px'
        }, 300);
    }
    l1_check = 1;

})
document.querySelector('#l2_li').addEventListener("mouseover", ()=>{
    if(l2_check ==0){
        setTimeout(() => {
            document.querySelector('#l2').style.width = '133px'
        }, 0);
        setTimeout(() => {
            document.querySelector('#l2').style.width = '0px'
            document.querySelector('#l2').style.margin = '5px 172px'
        }, 300);
    }
    l2_check = 1;

})
document.querySelector('#l3_li').addEventListener("mouseover", ()=>{
    if(l3_check ==0){
        setTimeout(() => {
            document.querySelector('#l3').style.width = '155px'
        }, 0);
        setTimeout(() => {
            document.querySelector('#l3').style.width = '0px'
            document.querySelector('#l3').style.margin = '4px 185px'
        }, 300);
    }
    l3_check = 1;

})
document.querySelector('#l4_li').addEventListener("mouseover", ()=>{
    if(l4_check ==0){
        setTimeout(() => {
            document.querySelector('#l4').style.width = '126px'
        }, 0);
        setTimeout(() => {
            document.querySelector('#l4').style.width = '0px'
            document.querySelector('#l4').style.margin = '0px 154px'
        }, 300);
    }
    l4_check = 1;

})

document.querySelector('#l1_li').addEventListener("click", ()=>{
    setTimeout(() => {
        document.querySelector('#cv').style.transform = 'rotatex(0deg) rotatey(0deg)'
        document.querySelector('#cv').style.visibility = 'visible'
        document.querySelector('#page1').style.filter = 'blur(15px)'
        document.querySelector('.vid_back').style.filter = 'blur(15px)'
        document.querySelector('#cv').style.opacity = '1'
        
        
        
    }, 0);
    setTimeout(() => {
        document.querySelector('#close').style.display = 'block'
        document.querySelector('#download').style.display = 'block'
    }, 300);


})
document.querySelector('#close').addEventListener("click", ()=>{
    setTimeout(() => {
        // document.querySelector('#cv').style.transform = 'rotatex(35deg) rotatey(38deg)'
        document.querySelector('#cv').style.opacity = '0'
        document.querySelector('#page1').style.filter = 'blur(0px)'
        document.querySelector('.vid_back').style.filter = 'blur(0px)'
        document.querySelector('#download').style.display = 'none'
        document.querySelector('#close').style.display = 'none'
        document.querySelector('#page4').style.display = 'none'
        
        
    }, 0);
    setTimeout(() => {
        document.querySelector('#cv').style.visibility = 'hidden'
    }, 300);


})

document.querySelector('#l2_li').addEventListener('click', ()=>{
    document.querySelector('#web').style.visibility = 'visible';
    document.querySelector('#web').style.transform = 'scale(1.03)';

    document.querySelector('#graphic').style.visibility = 'visible';
    document.querySelector('#graphic').style.transform = 'scale(1.03)';
    document.querySelector('#page1').style.filter = 'blur(15px)'
    document.querySelector('.vid_back').style.filter = 'blur(15px)'


    setTimeout(() => {
        document.querySelector('#web').style.transition = 'all 0.3s ease';
        document.querySelector('#graphic').style.transition = 'all 0.3s ease';
        document.querySelector('#web').style.transform = 'scale(1)';
        document.querySelector('#graphic').style.transform = 'scale(1)';
        document.querySelector('#close').style.display = 'block'

    }, 800);

    document.querySelector('#close').addEventListener("click", ()=>{
        setTimeout(() => {
            // document.querySelector('#cv').style.transform = 'rotatex(35deg) rotatey(38deg)'
            document.querySelector('#graphic').style.transform = 'scale(0.3)'
            document.querySelector('#web').style.transform = 'scale(0.3)'

            document.querySelector('#page1').style.filter = 'blur(0px)'
            document.querySelector('.vid_back').style.filter = 'blur(0px)'
            document.querySelector('#close').style.display = 'none'
            
            
        }, 0);
        setTimeout(() => {
            document.querySelector('#graphic').style.visibility = 'hidden'
            document.querySelector('#web').style.visibility = 'hidden'

        }, 300);
    
    
    })
    
})

document.querySelector('#graphic').addEventListener('mouseover', ()=>{
    document.querySelector('#graphic').style.transform = 'scale(1.2)'
    
})

document.querySelector('#web').addEventListener('mouseover', ()=>{
    document.querySelector('#web').style.transform = 'scale(1.2)'
    
})
document.querySelector('#graphic').addEventListener('mouseout', ()=>{
    document.querySelector('#graphic').style.transform = 'scale(1)'
    
})

document.querySelector('#web').addEventListener('mouseout', ()=>{
    document.querySelector('#web').style.transform = 'scale(1)'
    
})


document.querySelector('#l4_li').addEventListener("click", ()=>{
    document.querySelector('#page4').style.display = 'flex'
    document.querySelector('#close').style.display = 'block'
    document.querySelector('#page1').style.filter = 'blur(15px)'


        


})