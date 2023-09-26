

let select=document.querySelectorAll('.currency')
let btn=document.getElementById('btn')
let input=document.getElementById('input')

fetch('https://api.frankfurter.app/currencies')
.then(res=>(res.json()))
.then(res=>display1(res))



function display1(res){
 let curr =Object.entries(res)
 for(i=0;i<curr.length;i++){
let array=`<Option value="${curr[i][0]}">${curr[i][0]}</Option>`
select[0].innerHTML +=array

select[1].innerHTML +=array

}


}

btn.addEventListener('click',()=>{
        let curr1=select[0].value
        let curr2= select[1].value
let inputvalue=input.value
// if(curr1==curr2)
// alert("choose diffrent currencies")
// else
convert(curr1,curr2,inputvalue)

})
function convert(curr1,curr2,inputvalue)
{
  
  const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=${inputvalue}&from=${curr1}&to=${curr2}`)
    .then(resp => resp.json())
    .then((data) => {
     document.getElementById('result').value=Object.values(data.rates)[0]
      
    });
  }



