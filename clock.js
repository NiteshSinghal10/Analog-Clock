
setInterval(()=>{
    const date=new Date;
    let hour=date.getHours()
    let min=date.getMinutes()
    let sec=date.getSeconds()

    let hrotate=30*hour+min/2;
    let mrotate=6*min;
    let srotate=6*sec;

    let hid=document.getElementById("hour");
    hid.style.transform=`rotate(${hrotate}deg)`

    let mid=document.getElementById("min");
    mid.style.transform=`rotate(${mrotate}deg)`

    let sid=document.getElementById("sec");
    sid.style.transform=`rotate(${srotate}deg)`
},1000)





