const headerScroll = () => {
    
    const header = document.getElementById('header')
    const headerHeight = header.offsetHeight;
    
    const winScroll = () => {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            currentScroll > headerHeight ? header.classList.add('header__fixed') : header.classList.remove('header__fixed')
        })
    }  
    
    winScroll();
    window.addEventListener('resize', () => winScroll());

      
}


export default headerScroll;