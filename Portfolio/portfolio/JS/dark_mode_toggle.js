const btn = document.getElementById('toggle');
const change = document.querySelector('.change');
const icon = document.getElementsByClassName('ico');
let border = document.querySelector('.div_2');
const hover = document.querySelector('.hover')

// btn.innerText = 'Dark';
btn.addEventListener('click', function () {
    if (btn.innerText === 'Dark') {
        btn.innerHTML = `<i id='darkTheme' class="fa fa-adjust" style="padding-right:10px;" aria-hidden="true"></i>Light`;
        change.classList.add('dark');
        for (i = 0; i < icon.length; i++) {
            var str = icon[i].classList;
            str.add('ilight');
            str.remove('idark');
        }
        border.classList.add('div_2_l')
        border.classList.remove('div_2_d')
    }
    else {
        btn.innerHTML = `<i id='darkTheme' class="fa fa-moon-o" style="padding-right:10px;" aria-hidden="true"></i>Dark`;
        change.classList.remove('dark');
        for (i = 0; i < icon.length; i++) {
            var str = icon[i].classList;
            str.remove('ilight');
            str.add('idark');
        }
        border.classList.add('div_2_d')
        border.classList.remove('div_2_l')
    }
})

// function handlemouseover(){

// }


// -----------------------------------hover effect on icon--------------------------------------
        const handlemouseover = (b) => {
            ico = document.getElementById('ico')
            if (btn.innerText === 'Dark') {
                b.classList.add('hover_icon_dark')
            }
            else {
                b.classList.add('hover_icon_light')
            }
        }

        const handlemouseout = (b) => {
            if (btn.innerText !== 'Dark') {
            b.classList.remove('hover_icon_light')
            }
            else {
            b.classList.remove('hover_icon_dark')
            }
        }
        const handlemouseoverbg = (b) => {
            ico = document.getElementById('icon')
            if (btn.innerText === 'Dark') {
                b.classList.add('backDark')
            }
            else {
                b.classList.add('backLight')
            }
        }

        const handlemouseoutbg = (b) => {
            if (btn.innerText !== 'Dark') {
            b.classList.remove('backLight')
            }
            else {
            b.classList.remove('backDark')
            }
        }