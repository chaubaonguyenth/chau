// ===== Prototype tương tác =====
var s=0,d={ok:0,up:[0,0]},el=document.getElementById('pr');
function dots(){return '<div class="dots">'+[0,1,2].map(function(i){return '<i class="'+(i<=s?'on':'')+'"></i>'}).join('')+'</div>'}
function r(){var h=dots();
if(s==0)h+='<h4>Yêu cầu bồi thường</h4><label>Số hợp đồng / Biển số</label><input id="a" placeholder="VD: HD123456"><label>Ngày xảy ra sự cố</label><input type="date" id="b"><div class="err" id="e"></div><button onclick="n0()">Tiếp tục</button>';
else if(s==1)h+='<h4>Khai báo &amp; chứng từ</h4><select><option>Va chạm</option><option>Mất cắp</option><option>Thiên tai</option></select><div class="up '+(d.up[0]?'ok':'')+'" onclick="u(0)">'+(d.up[0]?'✓ Ảnh xe đã tải':'+ Tải ảnh xe')+'</div><div class="up '+(d.up[1]?'ok':'')+'" onclick="u(1)">'+(d.up[1]?'✓ GPLX/CCCD đã tải':'+ Tải GPLX &amp; CCCD')+'</div><div class="err" id="e"></div><button onclick="n1()">Kiểm tra &amp; gửi hồ sơ</button>';
else h+='<h4>✓ Đã gửi thành công</h4><p>Mã hồ sơ: <b>BT-2026-'+d.c+'</b></p><p class="mu">Trạng thái: Đã gửi → Giám định → Duyệt → Chi trả. Bạn sẽ nhận thông báo khi có cập nhật.</p><button onclick="s=0;d.up=[0,0];r()">Làm lại</button>';
el.innerHTML=h}
function n0(){var v=document.getElementById('a').value.trim();if(v.length<6){document.getElementById('e').textContent='Số hợp đồng không hợp lệ (≥ 6 ký tự).';return}s=1;r()}
function u(i){d.up[i]=1;r()}
function n1(){if(!d.up[0]||!d.up[1]){document.getElementById('e').textContent='Hồ sơ còn thiếu: '+(!d.up[0]?'ảnh xe ':'')+(!d.up[1]?'GPLX/CCCD':'');return}d.c=String(Math.floor(Math.random()*9000)+1000);s=2;r()}
r();

// ===== Khởi tạo sơ đồ Mermaid =====
try{mermaid.initialize({startOnLoad:true,themeVariables:{fontFamily:'Be Vietnam Pro,Arial,sans-serif'},theme:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'neutral'})}catch(e){}
