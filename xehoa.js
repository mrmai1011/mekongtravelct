document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-hoa");
    const bookingForm = document.getElementById("booking-form-hoa");
    const nameInput = form.querySelector('input[name="name"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    const dateInput = form.querySelector('input[name="date"]');
    const returnDateInput = form.querySelector('input[name="return_date"]');
  
    // Thiết lập ngày tối thiểu là hôm nay
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = today.toISOString().split("T")[0];
  
    if (dateInput) dateInput.setAttribute("min", todayStr);
    if (returnDateInput) returnDateInput.setAttribute("min", todayStr);
  
    // Cập nhật ngày trả xe không được nhỏ hơn ngày đi
    if (dateInput && returnDateInput) {
      dateInput.addEventListener("change", function () {
        returnDateInput.setAttribute("min", dateInput.value);
      });
    }
  
    // Gán sự kiện mở form và lấy tên xe
    document.querySelectorAll(".item-button").forEach(button => {
      button.addEventListener("click", function () {
        const tenXe = this.closest(".item").querySelector(".item-title")?.textContent.trim();
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
      const selectedDate = new Date(dateInput.value);
      selectedDate.setHours(0, 0, 0, 0); // reset giờ
  
      // Kiểm tra Họ tên
      if (name.length < 3) {
        alert("Họ và tên phải có ít nhất 3 ký tự.");
        nameInput.focus();
        return;
      }
  
      // Kiểm tra SĐT
      if (!/^\d{9,15}$/.test(phone)) {
        alert("Số điện thoại không hợp lệ. Phải từ 9 đến 15 chữ số.");
        phoneInput.focus();
        return;
      }
  
      // Kiểm tra ngày không nhỏ hơn hôm nay
      if (selectedDate < today) {
        alert("Ngày đặt xe không được nhỏ hơn hôm nay.");
        dateInput.focus();
        return;
      }
  
      // Gửi form nếu hợp lệ
      const formData = new FormData(form);
      const webhook = "https://script.google.com/macros/s/AKfycbxFkHIK_9Oeer-7seZn0NSNNFw-vqMHmo6L7MSVa0MsylYZiHqzyQxn38M-vEpW8NY_/exec";
      
  
      try {
        const res = await fetch(webhook, {
          method: "POST",
          body: formData
        });
  
        if (res.ok) {
          alert("Đặt xe hoa thành công! Chúng tôi sẽ liên hệ bạn sớm.");
          bookingForm.style.display = "none";
          form.reset();
        } else {
          alert("Gửi thất bại!");
        }
      } catch (err) {
        alert("Lỗi gửi form!");
        console.error(err);
      }
    });
  });
  