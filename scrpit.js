
//Call back to promise
const msg = (count) => new Promise((resolve , reject) =>{

  if(count >= 1){
    setTimeout(() => {
     document.querySelector(".Happy").innerText = count;
     resolve(count);
    }, 1000);
  } else {
     
   setTimeout(() => {
  document.querySelector(".Happy").innerText = "Happy independce day";
  reject("completed");
}, 1000);
} 
});

msg(9)

.then((ct)=> msg(--ct))
.then((ct)=> msg(--ct))
.then((ct)=> msg(--ct))
.then((ct)=> msg(--ct))
.then((ct)=> msg(--ct))
.then((ct)=> msg(--ct))
.then((ct)=> msg(--ct))
.then((ct)=> msg(--ct))
.then((ct)=> msg(--ct))
.then((ct)=> msg(--ct))
.catch((err)=> console.log(err));
