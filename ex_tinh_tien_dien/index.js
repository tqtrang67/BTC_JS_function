function luongDienTu1Den50(kW) {
	return kW * 500;
}

function luongDienTu1Den100(kW) {
	return (kW - 50) * 650 + 50 * 500;
}

function luongDienTu1Den200(kW) {
	return (kW - 100) * 850 + 50 * 650 + 50 * 500;
}

function luongDienTu1Den350(kW) {
	return (kW - 200) * 1100 + 100 * 850 + 50 * 650 + 50 * 500;
}

function luongDienTren350(kW) {
	return (kW - 350) * 1300 + 150 * 1100 + 100 * 850 + 50 * 650 + 50 * 500;
}

function tongTienDien(luongDien) {
	if (luongDien <= 50) {
		return luongDienTu1Den50(luongDien);
	} else if (luongDien <= 100) {
		return luongDienTu1Den100(luongDien);
	} else if (luongDien <= 200) {
		return luongDienTu1Den200(luongDien);
	} else if (luongDien <= 350) {
		return luongDienTu1Den350(luongDien);
	} else {
		return luongDienTren350(luongDien);
	}
}

function tienDien() {
	let ten = document.getElementById("ten").value;
	console.log("🚀 ~ tienDien ~ ten:", ten);
	let luongDien = document.getElementById("luong_dien").value * 1;
	let tienDien = tongTienDien(luongDien);
	let formattedTienDien = new Intl.NumberFormat("de-DE").format(tienDien);
	document.getElementById(
		"ket_qua"
	).innerHTML = `Số tiền điện cần thanh toán : ${formattedTienDien}`;
}

document.getElementById("btn_tien_dien").addEventListener("click", tienDien);
