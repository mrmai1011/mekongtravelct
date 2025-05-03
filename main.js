
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
    { ten: "Toyota Avanza", gia: "650,000đ/ngày", hinh: "https://via.placeholder.com/200x100", seats: 7 , brand :"Toyota"},

    /* xe hoa cuoi hoi */
    /* xe hoa */
    { ten: "Xe Hoa Mercedes Trắng", gia: "1,200,000đ/ngày", hinh: "images/xehoa/mercedes-trang.jpg", seats: 4, brand: "Mercedes", type: "hoa" },
    { ten: "Xe Hoa BMW", gia: "1,400,000đ/ngày", hinh: "images/xehoa/bmw.jpg", seats: 4, brand: "BMW", type: "hoa" },
    { ten: "Xe Hoa Audi", gia: "1,500,000đ/ngày", hinh: "images/xehoa/audi.jpg", seats: 4, brand: "Audi", type: "hoa" },
    { ten: "Xe Hoa Bentley", gia: "3,000,000đ/ngày", hinh: "images/xehoa/bentley.jpg", seats: 4, brand: "Bentley", type: "hoa" },

  ];

  const giaThueLaiXe = [
    { stt: 1, tinhThanh: "Cần Thơ", khuVuc: "Cần Thơ", loaiBangLai: "Tất cả bằng lái (B2, C, D)", giaMotNgay: 400000 },
    { stt: 2, tinhThanh: "Vĩnh Long", khuVuc: "Vĩnh Long", loaiBangLai: "Tất cả bằng lái (B2, C, D)", giaMotNgay: 400000 },
    { stt: 3, tinhThanh: "Hậu Giang", khuVuc: "Hậu Giang", loaiBangLai: "Tất cả bằng lái (B2, C, D)", giaMotNgay: 400000 },
    { stt: 4, tinhThanh: "Trà Vinh", khuVuc: "Thành phố Trà Vinh, Huyện Càng Long, Huyện Cầu Kè, Huyện Tiểu Cần, Huyện Châu Thành", loaiBangLai: "Tất cả bằng lái (B2, C, D)", giaMotNgay: 500000 },
    { stt: 5, tinhThanh: "Trà Vinh", khuVuc: "Huyện Cầu Ngang, Huyện Trà Cú, Huyện Duyên Hải", loaiBangLai: "Tất cả bằng lái (B2, C, D)", giaMotNgay: 600000 },
    { stt: 6, tinhThanh: "Bến Tre", khuVuc: "Thành phố Bến Tre, Huyện Châu Thành, Huyện Giồng Trôm, Huyện Mỏ Cày Nam, Mỏ Cày Bắc", loaiBangLai: "Tất cả bằng lái (B2, C, D)", giaMotNgay: 500000 },
    { stt: 7, tinhThanh: "Tiền Giang", khuVuc: "Huyện Giồng Trôm, Huyện Bình Đại, Huyện Ba Tri, Huyện Thạnh Phú", loaiBangLai: "Tất cả bằng lái (B2, C, D)", giaMotNgay: 600000 },
    { stt: 8, tinhThanh: "Tiền Giang", khuVuc: "Thành phố Mỹ Tho, Thị xã Gò Công, Huyện Cái Bè, Huyện Châu Thành", loaiBangLai: "Tất cả bằng lái (B2, C, D)", giaMotNgay: 400000 },
    { stt: 9, tinhThanh: "Tiền Giang", khuVuc: "Huyện Tân Phước, Huyện Gò Công Tây, Huyện Gò Công Đông, Huyện Cai Lậy, Huyện Cái Bè", loaiBangLai: "Tất cả bằng lái (B2, C, D)", giaMotNgay: 500000 },
    { stt: 10, tinhThanh: "Đồng Tháp", khuVuc: "Thành phố Cao Lãnh, Thành phố Sa Đéc, Huyện Lấp Vò, Huyện Lai Vung, Huyện Châu Thành", loaiBangLai: "Tất cả bằng lái (B2, C, D)", giaMotNgay: 400000 },
    { stt: 11, tinhThanh: "Đồng Tháp", khuVuc: "Huyện Hồng Ngự, Huyện Tam Nông, Huyện Tháp Mười, Huyện Thanh Bình", loaiBangLai: "Tất cả bằng lái (B2, C, D)", giaMotNgay: 500000 },
    { stt: 12, tinhThanh: "An Giang", khuVuc: "Thành phố Long Xuyên, Huyện Phú Tân, Huyện Chợ Mới, Huyện Châu Phú, Huyện Châu Thành, Huyện Thoại Sơn", loaiBangLai: "Tất cả bằng lái (B2, C, D)", giaMotNgay: 400000 },
    { stt: 13, tinhThanh: "An Giang", khuVuc: "Huyện An Phú, Thị xã Tân Châu, Huyện Tri Tôn, Huyện Tịnh Biên", loaiBangLai: "Tất cả bằng lái (B2, C, D)", giaMotNgay: 500000 },
    { stt: 14, tinhThanh: "Kiên Giang", khuVuc: "Thành phố Rạch Giá, Huyện Tân Hiệp, Huyện Châu Thành, Huyện Giồng Riềng, Huyện Gò Quao, Huyện An Biên", loaiBangLai: "Tất cả bằng lái (B2, C, D)", giaMotNgay: 500000 },
    { stt: 15, tinhThanh: "Kiên Giang", khuVuc: "Thành phố Hà Tiên, Huyện Kiên Lương, Huyện Hòn Đất", loaiBangLai: "Tất cả bằng lái (B2, C, D)", giaMotNgay: 600000 },
    { stt: 16, tinhThanh: "Sóc Trăng", khuVuc: "Thành phố Sóc Trăng, Huyện Châu Thành, Huyện Kế Sách, Huyện Long Phú, Huyện Mỹ Xuyên, Thị xã Ngã Năm", loaiBangLai: "Tất cả bằng lái (B2, C, D)", giaMotNgay: 500000 },
    { stt: 17, tinhThanh: "Sóc Trăng", khuVuc: "Huyện Cù Lao Dung, Huyện Thạnh Trị, Thị xã Vĩnh Châu, Huyện Trần Đề", loaiBangLai: "Tất cả bằng lái (B2, C, D)", giaMotNgay: 500000 },
    { stt: 18, tinhThanh: "Bạc Liêu", khuVuc: "Huyện Đông Hải", loaiBangLai: "Tất cả bằng lái (B2, C, D)", giaMotNgay: 600000 },
    { stt: 19, tinhThanh: "Cà Mau", khuVuc: "Huyện Trần Văn Thời, Huyện Năm Căn, Huyện Phú Tân, Huyện Ngọc Hiển", loaiBangLai: "Tất cả bằng lái (B2, C, D)", giaMotNgay: 600000 },
    { stt: 20, tinhThanh: "Cà Mau", khuVuc: "Thành phố Cà Mau, Huyện U Minh, Huyện Thới Bình, Huyện Cái Nước, Huyện Đầm Dơi", loaiBangLai: "Tất cả bằng lái (B2, C, D)", giaMotNgay: 500000 }
  ];
  const districtData = {
    "Cần Thơ": ["Ninh Kiều", "Bình Thủy", "Cái Răng", "Ô Môn", "Thốt Nốt", "Phong Điền", "Thới Lai", "Cờ Đỏ", "Vĩnh Thạnh"],
    "An Giang": ["Long Xuyên", "Châu Đốc", "Châu Phú", "Chợ Mới", "Tân Châu", "Tri Tôn", "Tịnh Biên", "Thoại Sơn", "Phú Tân", "An Phú"],
    "Kiên Giang": ["Rạch Giá", "Hà Tiên", "Phú Quốc", "Hòn Đất", "Kiên Lương", "Giồng Riềng", "Châu Thành (Kiên Giang)"],
    "Đồng Tháp": ["Cao Lãnh", "Sa Đéc", "Lai Vung", "Lấp Vò", "Tháp Mười", "Tam Nông", "Hồng Ngự"],
    "Tiền Giang": ["Mỹ Tho", "Gò Công", "Cai Lậy", "Châu Thành (Tiền Giang)", "Tân Phước", "Cái Bè"],
    "Bến Tre": ["Châu Thành (Bến Tre)", "Giồng Trôm", "Mỏ Cày Bắc", "Mỏ Cày Nam", "Bình Đại", "Ba Tri", "Thạnh Phú"],
    "Trà Vinh": ["Trà Cú", "Tiểu Cần", "Duyên Hải", "Càng Long", "Cầu Kè"],
    "Sóc Trăng": ["Châu Thành (Sóc Trăng)", "Kế Sách", "Long Phú", "Mỹ Xuyên", "Trần Đề", "Vĩnh Châu"],
    "Hậu Giang": ["Vị Thanh", "Long Mỹ", "Phụng Hiệp"],
    "Vĩnh Long": ["Long Hồ", "Trà Ôn", "Bình Minh", "Vũng Liêm"],
    "Bạc Liêu": ["Đông Hải", "Giá Rai", "Phước Long"],
    "Cà Mau": ["Cái Nước", "Đầm Dơi", "Ngọc Hiển", "Năm Căn"]
  };



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


  document.getElementById("province-select").addEventListener("change", function () {
    console.log("testtt")
    const province = this.value;
    const districtSelect = document.getElementById("district-select");
    districtSelect.innerHTML = `<option selected>Tất cả quận/huyện</option>`;
  
    if (districtData[province]) {
      districtData[province].forEach(d => {
        const opt = document.createElement("option");
        opt.value = d;
        opt.textContent = d;
        districtSelect.appendChild(opt);
      });
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

function searchTaiXe() {
 
  const province = document.getElementById("province-select").value;
  const district = document.getElementById("district-select").value.trim().toLowerCase();

  console.log("province" , province)
  console.log("district" , district)

  const ketQua = (province === "all" || !province)
  ? giaThueLaiXe
  : giaThueLaiXe.filter(entry => entry.tinhThanh === province);
  // const ketQua = [province,district,3]
  // Lưu kết quả tạm vào localStorage
  localStorage.setItem("searchResult", JSON.stringify(ketQua));

  // Chuyển trang (có thể kèm params nếu muốn)
  const query = `?province=${encodeURIComponent(province)}&district=${encodeURIComponent(district)}`;
  window.location.href = "searchtx.html" + query;
 
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


const containerXeHoa = document.querySelector(".item-xehoa");

cars.filter(car => car.type === "hoa").forEach((item) => {
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

  if (containerXeHoa) {
    containerXeHoa.appendChild(div);
  }
});



function switchTab(index) {
  const tabs = document.querySelectorAll('.tab');
  const formthuexe = document.getElementById("form");
  const formthuetai = document.getElementById("form-thue-laixe");
  if(index === 0)
    {
      formthuexe.style.display = "block"
      formthuetai.style.display = "none"
    }else{
       formthuexe.style.display = "none"
        formthuetai.style.display = "block"
    }
  tabs.forEach((tab, i) => {
    if (i === index) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  // Tuỳ bạn: ẩn/hiện form khác nếu cần
}

/* function handleSearch() {
  const city = document.querySelector('.red-border').value;
  const type = document.getElementById('select-seat').value;
  alert(`Đang tìm xe ở ${city} - dòng xe: ${type}`);
}
 */
function onClickMenu() {
  const subnavMobie = document.querySelector('.subnavMobie');

  if (!subnavMobie) return;

  // Toggle hiển thị
  if (subnavMobie.style.display === "block") {
    subnavMobie.style.display = "none";
  } else {
    subnavMobie.style.display = "block";
  }
}

function toggleDichvu()
{
  const subnavDichvu = document.querySelector('.subnavDichvu');
  if (!subnavDichvu) return;

  // Toggle hiển thị
  if (subnavDichvu.style.display === "block") {
    subnavDichvu.style.display = "none";
  } else {
    subnavDichvu.style.display = "block";
  }
}