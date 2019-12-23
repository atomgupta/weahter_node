
// fetch('http://localhost:3000/weather?address=12jai').then((response)=>{
//     response.json().then((data)=>{
//        if(data.error)
//        {
//            console.log(data.error)
//        }
//        else{
//            console.log(data.location)
//            console.log(data.forecast)

//        }
//     })
// })


// document.querySelector('form').addEventListener('submit',(e)=>{
//     e.preventDefault();
// })
// const location=document.querySelector('input').value;




const form=document.querySelector('form')
const search=document.querySelector('input');
const p1=document.getElementById('1');
const p2=document.getElementById('2');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location=search.value;
    p1.textContent="loading";
fetch(`http://localhost:3000/weather?address=${location}`).then((response)=>{
    response.json().then((data)=>{
       if(data.error)
       {   
           p1.textContent=data.error
           p2.textContent=''
       }
       else{
           p1.textContent=data.location;
           p2.textContent=data.forecast;
           console.log(data.location)
        //    console.log(data.forecast) 
       }
    })
})

    
})