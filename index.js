document.addEventListener('DOMContentLoaded', function() {
    const topbutton = document.querySelector('.top');
    const contentSections = document.querySelector('.desktop-1-inner');
    const contentSections1 = document.querySelector('.marketplaceTable');
    const marketbutton = document.querySelector('.marketplace1');
    

    topbutton.addEventListener('click', () => {
        console.log(contentSections.style.display);
            contentSections.style.display = 'none';
            contentSections1.style.display='none';
    });

    
    marketbutton.addEventListener('click', () => {
        console.log("market");
            contentSections.style.display = 'block';
            contentSections1.style.display='block';
    });

});