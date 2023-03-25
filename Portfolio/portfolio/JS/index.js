// function run(){

//     var URL = "file:///Z:/photos/IMG_20220514_124535036_MF_PORTRAIT~2.jpg";
 
//     window.open(URL, null);
 
//  }
//  run();

var navHover = document.querySelectorAll('.nav_item');

for (let i = 0; i < navHover.length; i++) {
    let st = navHover[i].classList;
    navHover[i].addEventListener('click', ()=>{
        switch (i) {
            case 1:
                st.add('active');
                break;
        
            default:
                break;
        }
        // console.log(st);
        // if(st=='active') {
        //     st.remove('active');
        // }  
        // if (st!='active') {
        //     st.add('active');
        // }
        
    })
}
