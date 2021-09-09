const theurl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
var key = '&units=metric&appid=68c617629e3720ee1ff4aad52881d98f';
const showlistbtn = document.querySelector('#showZList');
showlistbtn.onclick = ()=>{
  document.getElementById('zlist').style.display = 'block';
}
const generate = document.querySelector('button').onclick = function(){
  let validinput = document.getElementById('zipcode')
  console.log(validinput)
    getdata(theurl,input.value,key)
    document.getElementById('wer').style.display = 'block';
    console.log('click')
}

const input = document.querySelector('input');
const getdata = async (theurl,input,key)=>{
  const resp = await fetch(theurl+input+key)
  const data = await resp.json()
  const getdata = await fetch('/getdata')
try{
  console.log(data)
  posttoserver('/datatoserver',{temp: data.main.temp, name: data.name})
  document.getElementById('currentw').innerHTML = `Temp : ${data.main.temp}`;
  document.getElementById('name').innerHTML = `City Name : ${data.name}`;
}catch(er){
  alert(data.cod +' ' + data.message)
  console.log(er)
}}

async function posttoserver(url = '', data = {}){
  console.log(data);
  const resp = await fetch(url,{
    method: "POST",
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'appliction/json'
    },
    body: JSON.stringify(data)
  })
  try{
    const data = await resp.json();
    console.log(data)
    return data;
  }catch(err){
    throw err;
  }
}