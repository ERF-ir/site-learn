




function meno_profile() 
{

    let box_meno = document.querySelector(".activ_index");
    let toggle_btn = document.querySelector("#one");

    toggle_btn.addEventListener('click', ()=>{

        box_meno.classList.toggle("activ_index")

    });

   

}




function Meno_mobile()
{
    
let openBtn = document.querySelector("#open_Meno_mobile");
let aside_meno = document.querySelector("aside");
let closBtn = document.querySelector("#clous_mobile_meno");
let header = document.querySelector('header');

    if (openBtn) {
        
    let btn_sub_moblie = document.querySelectorAll('.fa-plus')

    let items_sub = document.querySelectorAll(".items_s")

    openBtn.addEventListener("click",(e)=>{

    aside_meno.style.right = "0";
    header.style.filter = "brightness(30%)"

    });


    closBtn.addEventListener("click",(e)=>{

        aside_meno.style.right = "-70%"
        header.style.filter = "brightness(100%)"
        });




        for(let i = 0;i<items_sub.length;i++){


            btn_sub_moblie[i].addEventListener('click',()=>{

                if (items_sub[i].style.height) {
                    items_sub[i].style.height=null;
                    items_sub[i].style.cssText = "padding:0"
                }
                else{
                    items_sub[i].style.cssText = "padding:8px 0"
                    items_sub[i].style.height = items_sub[i].style.height = items_sub[i].scrollHeight+10+"px";
                    

                }

        })
        }


}





}




function Cources_datel_acardion()
{
    let mane = document.querySelector('#acar_datel');
    let click_togle = document.querySelector('#btn_acardon');
    let ico = document.querySelector('#ico_anime');
    let vidi = document.querySelector('.vid_demo');
    let online_watch = document.querySelectorAll('.vid_demo');
    let btn_online = document.querySelectorAll('.btn-vid-ac');

   
   
    click_togle.addEventListener('click',(e)=>{

        ico.classList.toggle('rotate_btn')

            if(mane.style.height){

                mane.style.height = null;

            }
            else{

                mane.style.height = mane.scrollHeight+'px';

            }
    })

        for(let i=0;i<btn_online.length;i++){

            btn_online[i].addEventListener('click',()=>{
                
                online_watch[i].classList.toggle('hidden')
     
             })

        }
}










//****************Handler_function **********/



meno_profile()

Meno_mobile()
Cources_datel_acardion()