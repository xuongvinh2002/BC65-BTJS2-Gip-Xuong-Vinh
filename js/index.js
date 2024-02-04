// Bài 1 
/*B1 xác định dự liệu đầu vào
 lương 1 ngày 100000
 số ngày làm n
 B2 xác định các bước xử lý 
 + Dom tới html để lấy giá trị của các thẻ input
 + Tiền Lương = số ngày làm n * 100000
 B3 Ra kết quả */
 function handleMoney(){
 var luong1Ngay= +document.getElementById("luong1Ngay").value;
 var soNgayLam = +document.getElementById("soNgayLam").value;
 var result = luong1Ngay*soNgayLam;
 document.getElementById("result").innerHTML= result;
 document.getElementById("result").classList.remove("d-none");

 }
 // bài 2
 /* B1 xác định dự liệu đầu vào
 nhập 5 số thực a,b,c,d,e
 biến chưa giá trị trung bình
  B2 xác định các bước xử lý 
  + Dom tới html để lấy giá trị của các thẻ input
  + giá trị trung bình= (a+b+c+d+e)/5
 B3 in ra kết quả*/
 function handleAverageValue() {
 var a = +document.getElementById("nhapSoThuNhat").value;
 var b = +document.getElementById("nhapSoThuHai").value;
 var c = +document.getElementById("nhapSoThuBa").value;
 var d = +document.getElementById("nhapSoThuTu").value;
 var e = +document.getElementById("nhapSoThuNam").value;
 var result1 =(a+b+c+d+e)/5;
 document.getElementById("result1").innerHTML= result1;
 document.getElementById("result1").classList.remove("d-none");
 }
 // Bài 3
 /* B1 xác định dự liệu đầu vào
 Giá USD = 23500VND
 nhập giá trị n USD
  B2 xác định các bước xử lý 
  + Dom tới html để lấy giá trị của các thẻ input
  + Giá trị VND =  nUSD *23500
  B3 xuất ra kết quả*/
  function handleMoneyVND(){  
 var giaTriUSD = +document.getElementById("giaTriUSD").value;
 var nhapUSD = +document.getElementById("nhapUSD").value;
 var result2 = giaTriUSD * nhapUSD;
 document.getElementById("result2").innerHTML= result2;
 document.getElementById("result2").classList.remove("d-none");
  
  }
 
 // Bài 4
 /* B1 xác định dự liệu đầu vào
  +nhập chiều dài
  +nhập chiều rộng
  +biến chứa chu vi 
  +biến chứa diện tích
  
  B2 xác định các bước xử lý 
  + Dom tới html để lấy giá trị của các thẻ input
  + dien tich= dai * rong
  + chu vi = (dai + rong)*2
  B3 Ra kết quả*/
  function handleChuVi(){ 
  var chieuDai = +document.getElementById("chieuDai").value;
  var chieuRong = +document.getElementById("chieuRong").value;
  var result3 = chieuDai * chieuRong;
  var result3 = (chieuDai + chieuRong)*2;
  document.getElementById("result3").innerHTML= result3;
  document.getElementById("result3").classList.remove("d-none");
  }
  function handleDienTich(){ 
    var chieuDai = +document.getElementById("chieuDai").value;
    var chieuRong = +document.getElementById("chieuRong").value;
    var result3 = chieuDai * chieuRong;

    document.getElementById("result3").innerHTML= result3;
    document.getElementById("result3").classList.remove("d-none");
    }

  
 
 // bài 5
 /* B1 xác định dự liệu đầu vào
  số nguyên n
  kết quả
 
  B2 xác định các bước xử lý 
  + Dom tới html để lấy giá trị của các thẻ input
  + Xác định ký số hàng chục : Math.floor(n/10) 
  + Xác định ký số hàng đơn vị :n%10
 
  B3: kết quả */
 function handleTotal(){ 
 var n = +document.getElementById("nhap1So").value;
 var hangChuc =  Math.floor(n/10);
 var hangDonVi = n%10;
 var result4 = hangChuc + hangDonVi;;

 document.getElementById("result4").innerHTML= result4;
 document.getElementById("result4").classList.remove("d-none");
 }