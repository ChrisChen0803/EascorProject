document.addEventListener('DOMContentLoaded', function() {
    

    const liquiditybutton = document.querySelector('.liquidity');
    const contentSections1 = document.querySelector('.liquidityform');
    const contentSections = document.querySelector('.swapform');
    const swapbutton = document.querySelector('.swap1');
    const viewbutton = document.querySelector('.view');
    console.log(swapbutton);
    console.log(liquiditybutton);

    contentSections1.style.display='none';
    viewbutton.addEventListener('click',()=>{
        console.log("view button pressed");
    })

    liquiditybutton.addEventListener('click', () => {
        console.log(contentSections1.style.display);
            contentSections.style.display='none';
            contentSections1.style.display='block';
    });

    
    swapbutton.addEventListener('click', () => {
        console.log("market");
            contentSections.style.display='block';
            contentSections1.style.display='none';
    });

});