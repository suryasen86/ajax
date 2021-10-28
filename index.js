// console.log('hello')

 
let submit=document.getElementById('submit-button')
submit.addEventListener('click',handleclick)

function handleclick() {
    let email=document.getElementById('exampleInputEmail1').value
    let password=document.getElementById('exampleInputPassword1').value
    console.log(email,password)
}

let ajaxbtn=document.getElementById('ajaxbtn')
ajaxbtn.addEventListener('click',handleajaxbtn)

function handleajaxbtn() {
    let a= document.getElementById('ajaxop');
    const xhr=new XMLHttpRequest()
    xhr.open('POST', 'hello.php', true); 
    
    xhr.onprogress = function(){
        console.log('On progress');
        a.innerHTML="on pROgress"
    }

    xhr.onload = function () {
         console.log(this.responseText)
      

       a.innerHTML=`${this.responseText}`
         }

    xhr.send();
     
}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'https://newsapi.org/v2/everything?q=tesla&from=2021-09-28&sortBy=publishedAt&apiKey=058cfeddbdba4aa1bc1a3148aef7cd35', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
           console.log(obj.articles)
            let noob =obj.articles
            let list = document.getElementById('list');
            str = "";
            for (key in noob)
            {
                str += `<li>${noob[key].author}  </br> ${noob[key].description} </li>`;
                
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}