document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-hoa");
  const bookingForm = document.getElementById("booking-form-hoa");
  const nameInput = form.querySelector('input[name="name"]');
  const phoneInput = form.querySelector('input[name="phone"]');
  const dateInput = form.querySelector('input[name="date"]');
  const returnDateInput = form.querySelector('input[name="return_date"]');

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayStr = today.toISOString().split("T")[0];
  if (dateInput) dateInput.setAttribute("min", todayStr);
  if (returnDateInput) returnDateInput.setAttribute("min", todayStr);

  if (dateInput && returnDateInput) {
    dateInput.addEventListener("change", function () {
      returnDateInput.setAttribute("min", dateInput.value);
    });
  }

  // Gán tên xe hoa khi bấm nút
  document.querySelectorAll(".item-button").forEach(button => {
    button.addEventListener("click", function () {
      const tenXe = this.closest(".item")?.querySelector("h3")?.textContent.trim();
      if (tenXe) {
        document.getElementById("selected-car-hoa").value = tenXe;
      }
      bookingForm.style.display = "flex";
    });
  });

  // Hàm đóng form
  window.closeFormHoa = function () {
    bookingForm.style.display = "none";
  };

  // Gửi form
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const driver = form.querySelector('select[name="driver"]').value;
    const from = form.querySelector('input[name="from"]').value.trim();
    const to = form.querySelector('input[name="to"]').value.trim();
    const date = dateInput.value;
    const return_date = returnDateInput.value;
    const note = form.querySelector('textarea[name="note"]').value.trim();
    const car = document.getElementById("selected-car-hoa").value;

    const selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0);

    console.log('Gửi thành công!')

    // Kiểm tra đầu vào
    if (name.length < 3) {
      alert("Họ và tên phải có ít nhất 3 ký tự.");
      nameInput.focus();
      return;
    }

    if (!/^\d{9,15}$/.test(phone)) {
      alert("Số điện thoại không hợp lệ. Phải từ 9 đến 15 chữ số.");
      phoneInput.focus();
      return;
    }

    if (!driver) {
      alert("Vui lòng chọn lái xe.");
      return;
    }

    if (from.length < 2) {
      alert("Lộ trình xuất phát không hợp lệ.");
      return;
    }

    if (to.length < 2) {
      alert("Lộ trình đến không hợp lệ.");
      return;
    }

    if (selectedDate < today) {
      alert("Ngày đặt xe không được nhỏ hơn hôm nay.");
      dateInput.focus();
      return;
    }

    // Gửi form qua Google Apps Script
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("driver", driver);
    formData.append("from", from);
    formData.append("to", to);
    formData.append("date", date);
    formData.append("return_date", return_date);
    formData.append("note", note);
    formData.append("car", car);

    const webhook = "https://script.google.com/macros/s/AKfycbyBRUOiCCHI8nXifAXLykPC-0fbyF_SByQZvKowd5yZHdHe26DVlDj1qEw3RcnE7nLTRA/exec";

    try {
      const res = await fetch(webhook, {
        method: "POST",
        body: formData
      });

      if (res.ok) {
        alert("Đặt xe hoa thành công! Chúng tôi sẽ liên hệ bạn sớm.");
        form.reset();
        bookingForm.style.display = "none";
      } else {
        alert("Lỗi gửi form. Vui lòng thử lại.");
      }
    } catch (err) {
      alert("Lỗi kết nối máy chủ!");
      console.error(err);
    }
  });
});
