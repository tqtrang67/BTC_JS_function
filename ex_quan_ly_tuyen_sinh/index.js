function ketQua() {
	let diemChuan = document.getElementById("diem_chuan").value * 1;
	let khuVuc = document.getElementById("khu_vuc").value * 1;
	let doiTuong = document.getElementById("doi_tuong").value * 1;
	let diemToan = document.getElementById("diem_toan").value * 1;
	let diemVan = document.getElementById("diem_van").value * 1;
	let diemAnh = document.getElementById("diem_anh").value * 1;
	let sum = diemToan + diemVan + diemAnh + khuVuc + doiTuong;
	let ketQuaMessage = "";

	if (diemToan === 0 || diemVan === 0 || diemAnh === 0) {
		ketQuaMessage = `Thí sinh đã rớt do có điểm bằng 0 ở một trong các môn, tổng điểm bạn là: ${sum} `;
	} else if (sum < diemChuan) {
		ketQuaMessage = `Thí sinh đã rớt do có tổng số điểm thấp hơn điểm chuẩn, tổng điểm bạn là: ${sum} `;
	} else {
		ketQuaMessage = `Thí sinh đã đỗ, tổng điểm bạn là: ${sum} `;
	}

	document.getElementById("ket_qua").innerHTML = ketQuaMessage;
}

document.getElementById("btn_ket_qua").addEventListener("click", ketQua);
