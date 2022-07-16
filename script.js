let nav = false;

const handleClick = () => {

    const menuLinks = document.querySelector('.nav-menu')

    const line1 = document.querySelector('#line1')
    const line2 = document.querySelector('#line2')
    const line3 = document.querySelector('#line3')

    if (nav) {

        menuLinks.style.cssText = 'right: 100%; transition:all 0.5s;'
        nav = false;

        line1.style.cssText = 'transform:initial; transition:all 0.5s;'
        line2.style.cssText = 'transform:initial; margin-top:0px; transition:all 0.5s;'
        line3.style.cssText = 'display:block '
        

        return;
    } else {
        menuLinks.style.cssText = 'right: 0%; transition:all 0.5s;'
        line1.style.cssText = 'transform:rotate(45deg); transition:all 0.5s;'
        line2.style.cssText = 'transform:rotate(135deg); margin-top:-8px; transition:all 0.5s;'
        line3.style.cssText = 'display:none '
        nav = true;
    }


}
