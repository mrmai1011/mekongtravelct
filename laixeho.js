
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("driver-form");
  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const fullname = form["fullname"].value.trim();
    const phone = form["phone"].value.trim();
    const location = form["location"].value.trim();
    const carInfo = form["car-info"].value.trim();
    const timeInput = form["time"].value;
    const time = new Date(timeInput);
    const notes = form["notes"].value.trim();
    const now = new Date();

    // Kiểm tra hợp lệ
    if (fullname === "") {
      alert("Họ và tên: Không được để trống");
      return;
    }

    if (phone === "") {
      alert("Số điện thoại: Không được để trống");
      return;
    }

    if (location === "") {
      alert("Địa điểm nhận xe: Không được để trống");
      return;
    }

    if (carInfo === "") {
      alert("Thông tin xe (hãng, biển số...): Không được để trống");
      return;
    }

    if (!timeInput || isNaN(time.getTime()) || time < now) {
      alert("Thời gian cần tài xế: phải lớn hơn hoặc bằng ngày hôm nay");
      return;
    }

    // Format ngày giờ
    const formatDateTime = (date) => {
      const d = String(date.getDate()).padStart(2, "0");
      const m = String(date.getMonth() + 1).padStart(2, "0");
      const y = date.getFullYear();
      const h = String(date.getHours()).padStart(2, "0");
      const min = String(date.getMinutes()).padStart(2, "0");
      return `${d}/${m}/${y} ${h}:${min}`;
    };

    // Gửi dữ liệu
    const data = new FormData();
    data.append("fullname", fullname);
    data.append("phone", phone);
    data.append("location", location);
    data.append("car_info", carInfo);
    data.append("time", formatDateTime(time));
    data.append("notes", notes);

    // Thay link này bằng Google Script Web App URL của bạn
    const webhookURL = "https://script.google.com/macros/s/AKfycbwXhG5KjbNgLBnoG9Befn4s43EK2UMLn0qCDpj0NrxU6E5yZdw8KhBhgTdTxkh7IZs/exec";

    try {
      const res = await fetch(webhookURL, {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        alert("✅ Gửi yêu cầu thành công! Nhân viên sẽ liên hệ với bạn sớm.");
        form.reset();
      } else {
        alert("❌ Gửi không thành công. Vui lòng thử lại sau.");
      }
    } catch (error) {
      console.error("Lỗi gửi:", error);
      alert("⚠️ Có lỗi xảy ra khi gửi dữ liệu.");
    }
  });
});

