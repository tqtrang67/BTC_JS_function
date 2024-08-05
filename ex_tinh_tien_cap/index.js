function tinhTienCap() {
	const loaiKhachHang = document.getElementById("loai_khach_hang").value;
	const phiDichVuCoBan = loaiKhachHang === "Nhà dân" ? 20.5 : 75;
	const phiXuLy = loaiKhachHang === "Nhà dân" ? 4.5 : 15;
	const thueKenhCaoCap = loaiKhachHang === "Nhà dân" ? 7.5 : 50;

	let tongTien = phiXuLy + phiDichVuCoBan;
	const soKenhCaoCap = document.getElementById("so_kenh_cao_cap").value * 1;

	if (loaiKhachHang === "Doanh nghiệp") {
		const soKetNoi = document.getElementById("so_ket_noi").value * 1;
		if (soKetNoi > 10) {
			tongTien += (soKetNoi - 10) * 5;
		}
	}

	tongTien += soKenhCaoCap * thueKenhCaoCap;

	document.getElementById(
		"ket_qua"
	).innerText = `Tổng tiền cáp: ${tongTien.toFixed(2)} $`;
}

function thayDoiKhachHang() {
	const loaiKhachHang = document.getElementById("loai_khach_hang").value;
	const onSoKetNoi = document.getElementById("so_ket_noi");
	if (loaiKhachHang === "Doanh nghiệp") {
		onSoKetNoi.disabled = false;
	} else {
		onSoKetNoi.disabled = true;
		onSoKetNoi.value = 0;
	}
}
