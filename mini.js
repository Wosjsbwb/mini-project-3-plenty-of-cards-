let x=document.getElementById("main")
let arr=["https://images.unsplash.com/photo-1609372332255-611485350f25?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1638613067237-b1127ef06c00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9rZW1vbnxlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1640271443625-3276ed8f62b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBva2Vtb258ZW58MHx8MHx8fDA%3D","https://images.unsplash.com/photo-1611931960487-4932667079f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBva2Vtb258ZW58MHx8MHx8fDA%3D","https://images.unsplash.com/photo-1637158881671-f6e4331887e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBva2Vtb258ZW58MHx8MHx8fDA%3D","https://images.unsplash.com/photo-1643725173053-ed68676f1878?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBva2Vtb258ZW58MHx8MHx8fDA%3D"]
let s=""
for(let i=1;i<=52;i++){
    let r=Math.floor(Math.random()*6)
    s+=`<div class="card"><img src=${arr[r]} alt=""></div>
    </div>`
}
x.innerHTML=(s)
