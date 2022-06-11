document.querySelector('#run').addEventListener("mouseover", ()=>{
    document.querySelector('#run_note').style.transform = 'scale(1)'
})

document.querySelector('#run').addEventListener("mouseout", ()=>{
    document.querySelector('#run_note').style.transform = 'scale(0)'
})

document.querySelector('#run_note').addEventListener("mouseover", ()=>{
    document.querySelector('#run_note').style.transform = 'scale(1)'
})
document.querySelector('#run_note').addEventListener("mouseout", ()=>{
    document.querySelector('#run_note').style.transform = 'scale(0)'
})


document.querySelector('#cric').addEventListener("mouseover", ()=>{
    document.querySelector('#cric_note').style.transform = 'scale(1)'
})

document.querySelector('#cric').addEventListener("mouseout", ()=>{
    document.querySelector('#cric_note').style.transform = 'scale(0)'
})

document.querySelector('#cric_note').addEventListener("mouseover", ()=>{
    document.querySelector('#cric_note').style.transform = 'scale(1)'
})
document.querySelector('#cric_note').addEventListener("mouseout", ()=>{
    document.querySelector('#cric_note').style.transform = 'scale(0)'
})


document.querySelector('#resear').addEventListener("mouseover", ()=>{
    document.querySelector('#research_note').style.transform = 'scale(1)'
})

document.querySelector('#resear').addEventListener("mouseout", ()=>{
    document.querySelector('#research_note').style.transform = 'scale(0)'
})

document.querySelector('#research_note').addEventListener("mouseover", ()=>{
    document.querySelector('#research_note').style.transform = 'scale(1)'
})
document.querySelector('#research_note').addEventListener("mouseout", ()=>{
    document.querySelector('#research_note').style.transform = 'scale(0)'
})


document.querySelector('#astro').addEventListener("mouseover", ()=>{
    document.querySelector('#astro_note').style.transform = 'scale(1)'
})

document.querySelector('#astro').addEventListener("mouseout", ()=>{
    document.querySelector('#astro_note').style.transform = 'scale(0)'
})

document.querySelector('#astro_note').addEventListener("mouseover", ()=>{
    document.querySelector('#astro_note').style.transform = 'scale(1)'
})
document.querySelector('#astro_note').addEventListener("mouseout", ()=>{
    document.querySelector('#astro_note').style.transform = 'scale(0)'
})


document.querySelector('#learn').addEventListener("mouseover", ()=>{
    document.querySelector('#learn_note').style.transform = 'scale(1)'
})

document.querySelector('#learn').addEventListener("mouseout", ()=>{
    document.querySelector('#learn_note').style.transform = 'scale(0)'
})

document.querySelector('#learn_note').addEventListener("mouseover", ()=>{
    document.querySelector('#learn_note').style.transform = 'scale(1)'
})
document.querySelector('#learn_note').addEventListener("mouseout", ()=>{
    document.querySelector('#learn_note').style.transform = 'scale(0)'
})


let menu  = 0
document.querySelector('.menu_close').addEventListener("click", ()=>{
    document.querySelector('.nav_back').classList.toggle('show_hide')
    document.querySelector('.li_a_1').classList.toggle('show_hide')
    document.querySelector('.li_a_2').classList.toggle('show_hide')
    document.querySelector('.li_a_3').classList.toggle('show_hide')
    document.querySelector('.li_a_4').classList.toggle('show_hide')

    // document.querySelector('menu_close')
    setTimeout(() => {
        document.querySelector('.menu_close').classList.toggle('menu_close_click')
    }, 300 );
})

// document.querySelector('.menu_close').addEventListener("click", ()=>{
//     setTimeout(() => {
//         document.querySelector('.menu_close').classList.toggle = ('menu_close_click')
//     }, 300 );
// })

document.querySelector('.li_a_1').addEventListener("click", ()=>{
    document.querySelector('.nav_back').classList.toggle('show_hide')
    document.querySelector('.li_a_1').classList.toggle('show_hide')
    document.querySelector('.li_a_2').classList.toggle('show_hide')
    document.querySelector('.li_a_3').classList.toggle('show_hide')
    document.querySelector('.li_a_4').classList.toggle('show_hide')

    // document.querySelector('menu_close')
    setTimeout(() => {
        document.querySelector('.menu_close').classList.toggle('menu_close_click')
    }, 300 );
})

document.querySelector('.li_a_2').addEventListener("click", ()=>{
    document.querySelector('.nav_back').classList.toggle('show_hide')
    document.querySelector('.li_a_1').classList.toggle('show_hide')
    document.querySelector('.li_a_2').classList.toggle('show_hide')
    document.querySelector('.li_a_3').classList.toggle('show_hide')
    document.querySelector('.li_a_4').classList.toggle('show_hide')

    // document.querySelector('menu_close')
    setTimeout(() => {
        document.querySelector('.menu_close').classList.toggle('menu_close_click')
    }, 300 );
})


document.querySelector('.li_a_3').addEventListener("click", ()=>{
    document.querySelector('.nav_back').classList.toggle('show_hide')
    document.querySelector('.li_a_1').classList.toggle('show_hide')
    document.querySelector('.li_a_2').classList.toggle('show_hide')
    document.querySelector('.li_a_3').classList.toggle('show_hide')
    document.querySelector('.li_a_4').classList.toggle('show_hide')

    // document.querySelector('menu_close')
    setTimeout(() => {
        document.querySelector('.menu_close').classList.toggle('menu_close_click')
    }, 300 );
})


document.querySelector('.li_a_4').addEventListener("click", ()=>{
    document.querySelector('.nav_back').classList.toggle('show_hide')
    document.querySelector('.li_a_1').classList.toggle('show_hide')
    document.querySelector('.li_a_2').classList.toggle('show_hide')
    document.querySelector('.li_a_3').classList.toggle('show_hide')
    document.querySelector('.li_a_4').classList.toggle('show_hide')

    // document.querySelector('menu_close')
    setTimeout(() => {
        document.querySelector('.menu_close').classList.toggle('menu_close_click')
    }, 300 );
})
