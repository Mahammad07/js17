
var x=getElementById("btn");



function Btn() {      
    fetch("  https://randomuser.me/api/?results=100")
        .then(response=>response.json)
        .then(stuff=>{

            var t="";
            console.log('element')

            stuff.results.forEach(element => {
                t+=
                    <div>
                        <img src="${element.picture.large}" alt=""></img>
                        <p>${element.paswoord}</p>
                        <P>${element.country}</P>
                    
                    </div>
           
                     
        
            });

            document.getElementById('Users').innerHTML='t';
    })
    .catch(wrong =>console.log(wrong));
}
 

function Work(){
    var x =new XMLHttpRequest;

    x.onreadystatechange=function(){
        if(this.status===200 && this.readyState===4){
            document.querySelector('.text').innerHTML=this.response
        }
    }
    x.open('get','about.html');
    x.send();
}


// var topmenu=document.querySelectorAll(".drag-stuff")
// var bottommenu=document.getElementById("bottom-menu")
// var icon=document.getElementById('ic')

// var textt=document.getElementById('textt')

// for(var x=0;x<topmenu.lenght;x++){
//     topmenu[i].addEventListener('dragstart',function(param){
//         param.datatransfer.setData("param",this.id)
//     })

    
// }

// bottommenu.addEventListener('drop',function(choosen){
//     var take=choosen.dataTransfer.getData('param')
//     var tak2=document.getElementById(take);
//     bottommenu.appendChild(tak2)
// })


// bottommenu.addEventListener('dragover',function(e){
//     e.preventDefault();
//     bottommenu.style.border="5px dashed green"
//     icon.style.color="red"
//     textt.style.fontSize='40px'

// })


// bottommenu.addEventListener('dragleave',function(e){
//     e.preventDefault();
//     bottommenu.style.border="5px dashed red"
//     icon.style.color="black"
//     textt.style.fontSize='20px'



// })