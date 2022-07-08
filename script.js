
document.getElementById("btn").addEventListener('click',(e)=>{
    e.preventDefault()
 let name = document.getElementById("name")
 name.textContent="pathymavuba"
 fetch("https://api.github.com/users/"+name.value)
.then(responce=>responce.json())
.then(data=>{
    document.getElementById('titre').textContent=`compte de ${data.name}`
    const oldImage = document.querySelector('img');
    if (oldImage) {
        oldImage.remove();
    }
    let img = document.createElement('img')
    img.src=data.avatar_url;
    img.classList.add("image")
document.getElementById('container').appendChild(img)

})
.catch(err=>{
  const olderror=document.querySelector('h4')
    if (olderror){
        olderror.remove();
    }
    err ="error"
    let faute = document.createElement('h4')
    faute.textContent = err;
    faute.style.color="red";
    console.log(faute)
    document.getElementById('container').appendChild(faute)

})
})