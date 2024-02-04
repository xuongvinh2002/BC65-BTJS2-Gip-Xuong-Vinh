// Bài 1 
/*B1 xác định dự liệu đầu vào
 lương 1 ngày 100000
 số ngày làm n
 B2 xác định các bước xử lý 
 Tiền Lương = số ngày làm n * 100000
 B3 Ra kết quả */

 var luong1Ngay=100000;
 var soNgayLam = 23;
 var tienLuong;
 
 tienLuong= luong1Ngay*soNgayLam;
 console.log("tienLuong:",tienLuong);
 
 // bài 2
 /* B1 xác định dự liệu đầu vào
 nhập 5 số thực a,b,c,d,e
 biến chưa giá trị trung bình
  B2 xác định các bước xử lý 
 giá trị trung bình= (a+b+c+d+e)/5
 B3 in ra kết quả*/
 var a = 1;
 var b = 2;
 var c = 3;
 var d = 4;
 var e = 5;
 var giaTriTrungBinh;
 
 giaTriTrungBinh =(a+b+c+d+e)/5;
 console.log("giaTriTrungBinh:",giaTriTrungBinh);
 
 // Bài 3
 /* B1 xác định dự liệu đầu vào
 Giá USD = 23500VND
 nhập giá trị n USD
  B2 xác định các bước xử lý 
  Giá trị VND =  nUSD *23500
  B3 xuất ra kết quả*/
     
 var giaTriUSD =23500;
 var nhapUSD = 5;
 var giaTriVND;
 
 giaTriVND = giaTriUSD * nhapUSD;
 console.log("giaTriVND;",giaTriVND);
 
 
 
 // Bài 4
 /* B1 xác định dự liệu đầu vào
  +nhập chiều dài
  +nhập chiều rộng
  +biến chứa chu vi 
  +biến chứa diện tích
  
  B2 xác định các bước xử lý 
  dien tich= dai * rong
  chu vi = (dai + rong)*2
  B3 Ra kết quả*/
  var chieuDai = 4;
  var chieuRong =3;
  var dienTich;
  var chuVi;
 
  dienTich= chieuDai * chieuRong;
  console.log("dienTich:",dienTich);
  chuVi = (chieuDai + chieuRong)*2;
  console.log("chuVi:",chuVi);
 
 
 // bài 5
 /* B1 xác định dự liệu đầu vào
  số nguyên n
 biến chứa tổng và chứa 3 ký số
 
  B2 xác định các bước xử lý 
 
  Xác định ký số hàng chục : Math.floor(n/10) 
  Xác định ký số hàng đơn vị :n%10
 
  B3: kết quả */
 
 var n =53;
 var sum;
 var hangChuc =  Math.floor(n/10);
 var hangDonVi = n%10;
 sum= hangChuc + hangDonVi;
 console.log("sum:",sum);