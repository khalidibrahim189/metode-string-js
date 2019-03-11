/*1.memilih id wrap
 2.metode innerHTML = nulis konten
*/

// deklarasi Variable
// var x = 1723645;
// var tabungan = 120000;
// document.getElementById("wrap").innerHTML = tabungan;

//deklarasi variable

// 1.nama dimulai dengan huruf atau $ atau _
// 2.Nama boleh mengandung huruf,angka,underscore _ dan $ dolar
// 3. Nama itu case sensitive
// 4. Ada 'reserved words' yang tidak boleh dipakai
// var tabungan = 10;
// var Tabungan = 100;

//tipe data string
// var text = "sekolah koding";
// var text2 = " yang baru";

//tipe data angka/number
var angka = 1000;
var angka2 = 123.123123123;
var angka3 = 1003;


//kiri = nama -> kanan = nilai
text2 = " yang lama";


//operator matematika + - / * %
// var angka_baru = angka / angka2;
// var angka_baru = angka + angka2;
// angka_baru++; //increment //menjumlahkan dengan 1
// angka--;     //decrement //mengurangi dengan 1

// var angka2 = angka2 + angka; 
// angka2 += angka;


//----metode number----
//toFixed(n) toString() random() min (a,b,c) max(a,b,c)
// var angka_baru = angka2.toFixed(4);
// // var angka_baru = angka.toString() + angka2;
// var angka_baru = Math.random();
;
// var angka_baru = Math.random().toFixed(2) + angka;
// var angka_baru = Math.min(angka, angka2, angka3); (untuk mencari angka paling kecil)
// var angka_baru = Math.max(angka, angka2, angka3); //(untuk mencari angka paling besar)


//round() ceil() floor() ObjectMethod(contoh: abs, log) r
//random spesific formula -> Math.floor(Math.random()*x) + 1;

// var angka_baru = Math.round(241.424);
// var angka_baru = Math.ceil(241.424); //untuk membesarkan angka ke atas nya
// var x = 10; //range .jarak
// var y = 5;
// batas max = y+x;
// var angka_baru = Math.floor(Math.random() * x) + y;



//--metode string--
//length indexOf lastIndexof search charAt
//toUpperCase() toLowerCase() replace
//substring(start, end), substr(start, length)
//parseInt parseFloat
//  var hasil = nama.toUpperCase();//memperbesar huruf
//  var hasil = nama.toLowerCase(); //mengecilkan huruf

// var hasil = nama.substring(0, 6); //memulai dan mengakhiri

// var nama = "120.50";
// var hasil = parseInt(nama) + 10; //mengubah string menjadi angka

var nama = "120.50";
var hasil = parseFloat(nama); // untuk mengubah tipe data angka di belakang koma

document.getElementById("wrap").innerHTML = hasil;