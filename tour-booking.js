document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".travel-form");
  
    if (!form) return;
  
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
  
      const name = form["fullname"].value.trim();
      const phone = form["phone"].value.trim();
      const pickup = form["pickup"].value.trim();
      const dropoff = form["dropoff"].value.trim();
      const way = form["type"].value;
      const carType = form["car-type"].value;
      const departDate = new Date(form["departure-date"].value);
      const returnDate = new Date(form["return-date"].value);
      const driverRequest = form["driver-request"].value.trim();
  
      // Validate Họ tên
      if (name.length < 2) {
        alert("Họ và tên phải có ít nhất 2 ký tự.");
        return;
      }
  
      // Validate số điện thoại
      if (!/^\d{10,}$/.test(phone)) {
        alert("Số điện thoại không hợp lệ! Phải có ít nhất 10 chữ số.");
        return;
      }
  
      // Validate ngày đi
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (departDate <= today) {
        alert("Ngày đi phải sau hôm nay.");
        return;
      }
  
      // Validate ngày về >= ngày đi
      if (form["return-date"].value && returnDate < departDate) {
        alert("Ngày về phải sau hoặc bằng ngày đi.");
        return;
      }
  
      const formatDate = (date) => {
        const d = String(date.getDate()).padStart(2, "0");
        const m = String(date.getMonth() + 1).padStart(2, "0");
        const y = date.getFullYear();
        return `${d}/${m}/${y}`;
      };
  
      const data = new FormData();
      data.append("name", name);
      data.append("phone", phone);
      data.append("pickup", pickup);
      data.append("dropoff", dropoff);
      data.append("way", way);
      data.append("cartype", carType);
      data.append("depart_date", formatDate(departDate));
      data.append("return_date", form["return-date"].value ? formatDate(returnDate) : "");
      data.append("driver_request", driverRequest);
  
      const webhookURL = "https://script.google.com/macros/s/AKfycbxd6zlQp1JlyLNAKJdUMWeBi7dgJImhiSOMkd62uvBmJt8jDNBB6ye7ZcAADEwniDcd/exec";
  
      try {
        const res = await fetch(webhookURL, {
          method: "POST",
          body: data,
        });
  
        if (res.ok) {
          alert("Đăng ký chuyến đi thành công! Sẽ có nhân viên liên hệ tư vấn cho quý khách. Mekong travel xin trân trọng cảm ơn!");
          form.reset();
        } else {
          alert("Gửi không thành công. Vui lòng thử lại.");
        }
      } catch (error) {
        console.error("Lỗi gửi:", error);
        alert("Có lỗi xảy ra khi gửi dữ liệu.");
      }
    });
  });
  
