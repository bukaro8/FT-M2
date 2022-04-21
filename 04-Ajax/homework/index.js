//* ============buttons==========
const btnPreview=document.querySelector('#boton');
const btnSearch =document.querySelector('#search');
const btnDelete =document.querySelector('#delete');
//* ============inputs==========
const inputId   =document.querySelector('#input');
const inputDelete=document.querySelector('#inputDelete');
//* ============info==========
const list      =document.querySelector('#lista');//shows the names of the list
const foundFriend=document.querySelector('#amigo');//shows the name of the friend found;
const deletedSuccess=document.querySelector('#success')
// ==============preview all names============
btnPreview.addEventListener('click',()=>{
  if(list.childElementCount!==0){
    list.innerHTML=''
  }
  $.ajax({
    url:'http://localhost:5000/amigos',
    type:'get',
    success:(data)=>{
      let info=[];
      data.forEach(element => {
        info[element.id]=element.name
      });
      info.forEach((e)=>{
        let item=document.createElement('li');
        item.innerText=e
        list.appendChild(item)
      })
    }
  })
})
// ==============search by id============

btnSearch.addEventListener('click',()=>{
  foundFriend.innerText=''
  $.ajax({
    url:`http://localhost:5000/amigos/${inputId.value}`,
    type:'get',
    success:(data)=>{
      let result=` ID: ${data.id} ==>Name: ${data.name}`;
      foundFriend.innerText=result
      inputId.value=''
    }
  })
})
// ==============search by id============

btnDelete.addEventListener('click',()=>{
  
  $.ajax({
    url:`http://localhost:5000/amigos/${inputDelete.value}`,
    type:'DELETE',
    success:()=>{
      deletedSuccess.innerText='ELIMINADO'
      inputDelete.value=''
    }
  })
})
