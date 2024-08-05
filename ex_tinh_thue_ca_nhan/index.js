function tinhTien() {
	let thuNhap = document.getElementById("thu_nhap").value * 1;
	let soNguoiPhuThuoc = document.getElementById("so_nguoi").value * 1;
	let mienGiam = soNguoiPhuThuoc * 4.4e6;
	let soTienTinhThue = thuNhap - mienGiam;

	let thueSuat = "";
	if (thuNhap <= 60e6) {
		thueSuat = 0.05;
	} else if (thuNhap <= 120e6) {
		thueSuat = 0.1;
	} else if (thuNhap <= 210e6) {
		thueSuat = 0.15;
	} else if (thuNhap <= 384e6) {
		thueSuat = 0.2;
	} else if (thuNhap <= 624e6) {
		thueSuat = 0.25;
	} else if (thuNhap <= 960e6) {
		thueSuat = 0.3;
	} else {
		thueSuat = 0.35;
	}

	let thueThuNhap = soTienTinhThue * thueSuat;
	let formattedMienGiam = new Intl.NumberFormat("de-DE").format(mienGiam);
	let formattedSoTienTinhThue = new Intl.NumberFormat("de-DE").format(
		soTienTinhThue
	);
	let formattedThueThuNhap = new Intl.NumberFormat("de-DE").format(
		thueThuNhap
	);

	document.getElementById("ket_qua").innerHTML = `
	Số tiền miễn giảm: ${formattedMienGiam} VND<br>
	Số tiền chịu thuế: ${formattedSoTienTinhThue} VND<br>
	Thuế thu nhập cá nhân: ${formattedThueThuNhap} VND`;
}

document.getElementById("btn_tinh_tien").addEventListener("click", tinhTien);
