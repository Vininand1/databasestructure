<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>🔥 Reel Bundle Store ULTRA PRO</title>
<style>
body{margin:0;font-family:Arial;background:linear-gradient(135deg,#0f172a,#1e293b,#020617);color:#fff}
header{text-align:center;padding:20px;backdrop-filter:blur(10px);background:rgba(255,255,255,0.05);border-bottom:1px solid rgba(255,255,255,0.1)}
h1{color:#22c55e;text-shadow:0 0 20px #22c55e}
input,select{width:90%;padding:12px;border-radius:12px;border:none;margin:5px;background:#0b1220;color:#fff;border:1px solid rgba(255,255,255,0.1)}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;padding:20px}
.card{background:rgba(255,255,255,0.05);backdrop-filter:blur(12px);padding:15px;border-radius:16px;box-shadow:0 0 15px rgba(34,197,94,0.3);cursor:pointer;transition:.4s;position:relative;border:1px solid rgba(255,255,255,0.1);opacity:0;transform:translateY(20px)}
.card.show{opacity:1;transform:translateY(0)}
.card:hover{transform:scale(1.05)}
.name{color:#22c55e;font-weight:bold}
.old{text-decoration:line-through;color:#888}
.price{color:#22c55e;font-size:20px}
.badge{position:absolute;top:10px;left:10px;background:#facc15;color:#000;padding:5px 10px;border-radius:10px;font-size:12px}
.popup{position:fixed;bottom:20px;left:20px;background:#22c55e;color:#000;padding:10px;border-radius:10px;display:none}
.creator{position:fixed;bottom:10px;right:10px;background:#22c55e;color:#000;padding:6px 12px;border-radius:20px;font-size:12px}
.modal{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:#000c;align-items:center;justify-content:center}
.modal-content{background:#0f172a;padding:20px;border-radius:16px;text-align:center;width:90%;max-width:400px}
.btn{background:#22c55e;color:#000;padding:10px;border:none;border-radius:10px;width:100%;margin-top:5px}
.qr-input{width:100%;padding:8px;margin-top:5px;border-radius:8px;border:none;background:#020617;color:#fff}
</style></head>
<body>
<header>
<h1>🔥 Reel Bundle Store</h1>
<input type="text" id="search" placeholder="Search reels..." onkeyup="search()">
<select onchange="filterCategory(this.value)">
<option value="all">All Categories</option>
<option value="motivation">Motivation</option>
<option value="ai">AI</option>
<option value="anime">Anime</option>
<option value="trading">Trading</option>
<option value="funny">Funny</option>
</select>
<p id="timer">⏳ Offer ends in 10:00</p>
</header>
<div class="grid" id="products"></div>
<div class="popup" id="popup"></div>
<div class="creator">⚡ @vinitbuilds</div><div class="modal" id="modal">
<div class="modal-content">
<h3 id="pname"></h3>
<img src="https://i.ibb.co/fzC0grG5/qr.png" width="150"><br>
<input class="qr-input" id="nameInput" placeholder="Enter Your Name">
<input class="qr-input" id="utrInput" placeholder="Enter UTR ID">
<input class="qr-input" id="amountInput" placeholder="Enter Amount">
<div>Amount: ₹<span id="amount"></span></div>
<p>Payment details fill karke WhatsApp button dabao</p>
<button class="btn" onclick="sendMsg()">📩 Send WhatsApp</button>
<button class="btn" onclick="closeModal()">Close</button>
</div>
</div><script>
let selected='';
let selectedPrice=0;

const data=[];
for(let i=1;i<=120;i++){
data.push({n:`Premium reels bundle ${i}`,c:i%5===0?"ai":i%4===0?"trading":i%3===0?"funny":"motivation"});
}

function genCard(p,i){
let mrp=Math.floor(Math.random()*1000)+1000;
let price=Math.floor(mrp*0.1);
if(price<50) price=50;
if(price>250) price=250;
let saved=mrp-price;
return `<div class="card" onclick="openModal('${p.n}',${price})">
<div class="badge">⭐ Hot</div>
<div class="name">${p.n}</div>
<div class="old">₹${mrp}</div>
<div class="price">₹${price}</div>
<div>💸 Save ₹${saved}</div>
</div>`;
}

function show(list=data){
let html="";
list.forEach((p,i)=>html+=genCard(p,i));
document.getElementById('products').innerHTML=html;
setTimeout(()=>{
document.querySelectorAll('.card').forEach(c=>c.classList.add('show'));
},100);
}
show();

function search(){
let val=document.getElementById('search').value.toLowerCase();
show(data.filter(p=>p.n.toLowerCase().includes(val)));
}

function filterCategory(cat){
if(cat==="all") return show();
show(data.filter(p=>p.c===cat));
}

function openModal(n,price){
selected=n;selectedPrice=price;
document.getElementById('pname').innerText=n;
document.getElementById('amount').innerText=price;
document.getElementById('amountInput').value=price;
document.getElementById('modal').style.display='flex';
}

function closeModal(){document.getElementById('modal').style.display='none';}

function sendMsg(){
let name=document.getElementById('nameInput').value;
let utr=document.getElementById('utrInput').value;
let amt=document.getElementById('amountInput').value;
window.open(`https://wa.me/918052756153?text=🔥 Order%0AProduct: ${selected}%0AName: ${name}%0AUTR: ${utr}%0AAmount: ₹${amt}`);
}

let t=600;
setInterval(()=>{
let m=Math.floor(t/60);
let s=t%60;
document.getElementById('timer').innerText=`⏳ Offer ends in ${m}:${s<10?"0"+s:s}`;
t--;if(t<0)t=600;
},1000);

const names=["Rahul","Aman","Priya","Sahil"];
setInterval(()=>{
let n=names[Math.floor(Math.random()*names.length)];
let item=data[Math.floor(Math.random()*data.length)].n;
let popup=document.getElementById('popup');
popup.innerText=`🔥 ${n} just bought ${item}`;
popup.style.display="block";
setTimeout(()=>popup.style.display="none",3000);
},5000);
</script></body></html>
