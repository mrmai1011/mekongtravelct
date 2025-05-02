
  const cars = [
    /* xe 4 cho */
    { ten: "Toyota Vios", gia: "650,000đ/ngày", hinh: "images/xe4cho/vios.jpg", seats: 4 ,brand :"Toyota"},
    { ten: "Honda Civic", gia: "700,000đ/ngày", hinh: "images/xe4cho/civic.jpg", seats: 4 ,brand :"Honda" },
    { ten: "Mazda 3", gia: "650,000đ/ngày", hinh: "https://via.placeholder.com/200x100", seats: 4 ,brand :"Mazda"},
    { ten: "Mazda 6", gia: "650,000đ/ngày", hinh: "https://via.placeholder.com/200x100", seats: 4 ,brand :"Mazda" },
    { ten: "Accent", gia: "650,000đ/ngày", hinh: "https://via.placeholder.com/200x100", seats: 4 ,brand :"Mazda" },
    { ten: "Camry", gia: "650,000đ/ngày", hinh: "https://via.placeholder.com/200x100", seats: 4 ,brand :"Toyota"},
    { ten: "MG5", gia: "650,000đ/ngày", hinh: "https://via.placeholder.com/200x100", seats: 4, brand :"Toyota"},
    { ten: "Honda City RS", gia: "650,000đ/ngày", hinh: "https://via.placeholder.com/200x100", seats: 4 , brand :"Toyota"},
    { ten: "Toyota Vios MT", gia: "650,000đ/ngày", hinh: "https://via.placeholder.com/200x100", seats: 4 , brand :"Toyota"},
    { ten: "Bán tải Mitsubish", gia: "650,000đ/ngày", hinh: "https://via.placeholder.com/200x100", seats: 4, brand :"Toyota" },
 /*  xe 7 cho */
    { ten: "Xpander AT", gia: "500,000đ/ngày", hinh: "https://via.placeholder.com/200x100", seats: 7 , brand :"Toyota"},
    { ten: "Veloz Cross", gia: "700,000đ/ngày", hinh: "https://via.placeholder.com/200x100", seats: 7 , brand :"Toyota"},
    { ten: "Inova Cross", gia: "650,000đ/ngày", hinh: "https://via.placeholder.com/200x100", seats: 7 , brand :"Toyota"},
    { ten: "Inova MT", gia: "650,000đ/ngày", hinh: "https://via.placeholder.com/200x100", seats: 7 , brand :"Toyota"},
    { ten: "Canival 2025", gia: "650,000đ/ngày", hinh: "https://via.placeholder.com/200x100", seats: 7 , brand :"Toyota"},
    { ten: "Canival 2023", gia: "650,000đ/ngày", hinh: "https://via.placeholder.com/200x100", seats: 7 , brand :"Toyota"},
    { ten: "Huyndai Stagazer", gia: "650,000đ/ngày", hinh: "https://via.placeholder.com/200x100", seats: 7 , brand :"Toyota"},
    { ten: "Suzuki XL7", gia: "650,000đ/ngày", hinh: "https://via.placeholder.com/200x100", seats: 7 , brand :"Toyota"},
    { ten: "Kia Sedona", gia: "650,000đ/ngày", hinh: "https://via.placeholder.com/200x100", seats: 7 , brand :"Toyota"},
    { ten: "Toyota Fortuner", gia: "650,000đ/ngày", hinh: "https://via.placeholder.com/200x100", seats: 7 , brand :"Toyota"},
    { ten: "Toyota Avanza", gia: "650,000đ/ngày", hinh: "https://via.placeholder.com/200x100", seats: 7 , brand :"Toyota"}
  ];

  const container4cho = document.querySelector(".item-xe4cho");
  const container7cho = document.querySelector(".item-xe7cho");
  const formOverlay = document.getElementById("booking-form");
    const selectedCarInput = document.getElementById("selected-car");

    filterCarsBySeats(cars,4).forEach((item) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <div class="item-image">
            <img src="${item.hinh}" alt="${item.ten}" onerror="this.onerror=null;this.src='./images/logo_1.jpg';">
      </div>
      <div class="item-info">
        <h3>${item.ten}</h3>
        <p>Giá: ${item.gia}</p>
      </div>
      <button class="item-button">Đặt xe</button>
    `;

    div.querySelector(".item-button").addEventListener("click", () => {
        selectedCarInput.value = item.ten;
        formOverlay.style.display = "flex";
      });
    if (container4cho === null) return;
    container4cho.appendChild(div);
  });

  filterCarsBySeats(cars,7).forEach((item) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <div class="item-image">
            <img src="${item.hinh}" alt="${item.ten}" onerror="this.onerror=null;this.src='./images/logo_1.jpg';">
      </div>
      <div class="item-info">
        <h3>${item.ten}</h3>
        <p>Giá: ${item.gia}</p>
      </div>
      <button class="item-button">Đặt xe</button>
    `;
    div.querySelector(".item-button").addEventListener("click", () => {
        selectedCarInput.value = item.ten;
        formOverlay.style.display = "flex";
      });
      if (container7cho === null) return;
    container7cho.appendChild(div);
  });

  function closeForm() {
    formOverlay.style.display = "none";
  }

  console.log("✅ main.js đã chạy");
window.addEventListener("DOMContentLoaded", function () {
  console.log("✅ DOM loaded");

  if (typeof cars !== "undefined") {
    generateSeatOptions(cars);
  } else {
    console.error("❌ Biến 'cars' chưa được định nghĩa.");
  }

  const selectedCar = getCarFromURL(cars); // cars từ main.js
  renderCarDetail(selectedCar);

  const form = document.getElementById("form");
  if (!form) return;

  document.getElementById("form").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const name = this.name.value.trim();
    const phone = this.phone.value.trim();
    const car = this.car.value.trim();
    const rawDate = this.date.value;
    const rawReturnDate = this.return_date.value;
  
    // 🔒 Kiểm tra số điện thoại hợp lệ
    if (!/^\d{10}$/.test(phone)) {
      alert("Số điện thoại không hợp lệ! Vui lòng nhập đúng 10 chữ số.");
      return;
    }
  
    const pickupDate = new Date(rawDate);
    const returnDate = new Date(rawReturnDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  
    // 🔒 Kiểm tra ngày đi
    if (pickupDate <= today) {
      alert("Ngày đặt phải lớn hơn ngày hôm nay.");
      return;
    }
  
    // 🔒 Kiểm tra ngày về >= ngày đi + 1 ngày
    const oneDayAfterPickup = new Date(pickupDate);
    oneDayAfterPickup.setDate(pickupDate.getDate() + 1);
  
    if (returnDate < oneDayAfterPickup) {
      alert("Ngày trả xe phải cách ngày đặt ít nhất 1 ngày.");
      return;
    }
  
    // ✅ Format ngày dd/mm/yy
    const format = (d) => {
      const dd = String(d.getDate()).padStart(2, "0");
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const yy = String(d.getFullYear()).slice(-2);
      return `${dd}/${mm}/${yy}`;
    };
  
    const formattedPickup = format(pickupDate);
    const formattedReturn = format(returnDate);
  
    // 📤 Gửi dữ liệu
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("car", car);
    formData.append("date", formattedPickup);
    formData.append("return_date", formattedReturn);
  
    const formOverlay = document.getElementById("booking-form");
    const webhook = "https://script.google.com/macros/s/AKfycbxBd9rmDO9bOJ0l7_sZ2ysu-dkDWmwH8wZoUVfhoxEAEzgQyHyhV2US3-FPMTOHQo5nkw/exec";
  
    try {
      const res = await fetch(webhook, {
        method: "POST",
        body: formData,
      });
  
      if (res.ok) {
        alert("Đặt xe thành công! Mekong Travel cảm ơn quý khách, Sẽ có nhân viên liên hệ quý khách trong giây lát!");
        formOverlay.style.display = "none";
        this.reset();
      } else {
        alert("Gửi thất bại!");
      }
    } catch (err) {
      console.error("Lỗi gửi:", err);
      alert("Lỗi gửi yêu cầu.");
    }
  });


});


  function filterCarsBySeats(cars, seatCount) {
    return cars.filter(car => car.seats === seatCount);
  }
  function filterCars(cars, seatCount, minPrice, maxPrice) {
    return cars.filter(car => {
      const giaNumber = parseInt(car.gia.replace(/\D/g, "")); // Lấy số từ "650,000đ"
      return car.seats === seatCount && giaNumber >= minPrice && giaNumber <= maxPrice;
    });
  }

 /*  trang header */
 


function handleSearch() {
  const location = document.querySelector(".select.red-border").value;
  const type = document.querySelectorAll(".select")[1].value;

  // Chuyển qua trang search.html và truyền tham số qua URL
  const query = `?location=${encodeURIComponent(location)}&type=${encodeURIComponent(type)}`;
  window.location.href = "search.html" + query;


}



function generateSeatOptions(cars) {
  console.log("✅ Đang tạo danh sách chỗ từ:", cars);

  const seatCounts = {};
  cars.forEach(car => {
    const seat = car.seats || 0;
    seatCounts[seat] = (seatCounts[seat] || 0) + 1;
  });

  const select = document.getElementById("select-seat");
  if (!select) {
    console.error("❌ Không tìm thấy phần tử #select-seat");
    return;
  }

  select.innerHTML = '<option value="0">Tất cả dòng xe</option>';

  for (const [seat, count] of Object.entries(seatCounts)) {
    const option = document.createElement("option");
    option.value = seat;
    option.textContent = `Xe ${seat} chỗ (${count})`;
    select.appendChild(option);
  }
}


/* render chi tiet xe */
function renderCarDetail(car) {
  const container = document.getElementById("car-detail");
  if (!container || !car) return;

  container.innerHTML = `
    <div class="detail-wrapper">
      <div class="image-block">
        <img src="${car.hinh}" alt="${car.ten}" onerror="this.src='images/logo_1.jpg'" />
      </div>
      <div class="info-block">
        <h2>${car.ten}</h2>
        <div class="price">${car.gia}</div>
        <ul class="info-list">
          <li><strong>Hãng xe:</strong> ${car.brand}</li>
          <li><strong>Loại:</strong> Xe ${car.seats} chỗ</li>
        </ul>
        <div class="button-group">
          <a href="https://zalo.me" target="_blank" class="btn zalo">💬 Chat Zalo</a>
          <a href="tel:0949161698" class="btn call">📞 Gọi ngay 19001900</a>
          <button class="btn send" onClick="setupSendButton('${car.ten}')">📧 gửi liên hệ</button>
        </div>
        <div class="share-buttons">
          <button class="btn share">👍 Chia sẻ</button>
        </div>
      </div>
    </div>
  `;
}
function getCarFromURL(cars) {
  const params = new URLSearchParams(window.location.search);
  const carName = params.get("car");
  return cars.find(c => c.ten === carName);
}


function setupSendButton(car) {
  console.log("test",car)
  
  const form = document.getElementById("booking-form");
  const selectedCarInput = document.getElementById("selected-car");
  console.log("test 2" ,form)
  if (form) {
    formOverlay.style.display = "flex";
    selectedCarInput.value = car;
  }
  console.log("test22")
 
 
}






