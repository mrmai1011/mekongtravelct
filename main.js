
  const cars = [
    /* xe 4 cho */
    { ten: "Toyota Vios AT", gia: "600,000đ/ngày", hinh: "images/xe4cho/vios.jpg", seats: 4 ,brand :"Toyota", noibat: true},
    { ten: "Toyota Altis AT", gia: "650,000đ/ngày", hinh: "images/xe4cho/altis.jpg", seats: 4, brand :"Toyota"},
    { ten: "Toyota Raize", gia: "650,000đ/ngày", hinh: "images/xe4cho/raize.jpg", seats: 4, brand :"Toyota"},
    { ten: "Fadil", gia: "500,000đ/ngày", hinh: "images/xe4cho/fadil.jpg", seats: 4, brand :"Vinfast"},
    { ten: "Huyndai i10", gia: "500,000đ/ngày", hinh: "images/xe4cho/i10.jpg", seats: 4, brand :"Huyndai"},
    { ten: "Honda Civic", gia: "800,000đ/ngày", hinh: "images/xe4cho/civic.jpg", seats: 4 ,brand :"Honda", noibat: true },
    { ten: "Mazda 3", gia: "750,000đ/ngày", hinh: "images/xe4cho/mazda3.jpg", seats: 4 ,brand :"Mazda", noibat: true},
    { ten: "Mazda 6", gia: "1,000,000đ/ngày", hinh: "images/xe4cho/mazda6.jpg", seats: 4 ,brand :"Mazda"},
    { ten: "Accent MT", gia: "550,000đ/ngày", hinh: "images/xe4cho/accent.png", seats: 4 ,brand :"Huyndai"},
    { ten: "Toyota Camry", gia: "1,200,000đ/ngày", hinh: "images/xe4cho/camry.jpg", seats: 4 ,brand :"Toyota", noibat: true},
    { ten: "MG5", gia: "650,000đ/ngày", hinh: "images/xe4cho/mg5.jpg", seats: 4, brand :"MG"},
    { ten: "Honda City RS", gia: "700,000đ/ngày", hinh: "images/xe4cho/cityrs.jpg", seats: 4 , brand :"Honda"},
    { ten: "Toyota Vios MT", gia: "550,000đ/ngày", hinh: "images/xe4cho/viosmt2020.jpg", seats: 4 , brand :"Toyota"},
    { ten: "Bán tải Mitsubish", gia: "650,000đ/ngày", hinh: "images/xe4cho/bantaimitsu.jpg", seats: 4, brand :"Mitsubishi" },
    { ten: "Huyndai Creta", gia: "800,000đ/ngày", hinh: "images/xe4cho/huyndaicreta.jpg", seats: 4, brand :"Huyndai" },
    { ten: "Toyota Cross", gia: "650,000đ/ngày", hinh: "images/xe4cho/cross.jpg", seats: 4, brand :"Toyota" },
 /*  xe 7 cho */
    { ten: "Xpander AT", gia: "750,000đ/ngày", hinh: "images/xe7cho/xpander.jpg", seats: 7 , brand :"Mitsubishi",noibat: true },
    { ten: "Veloz Cross", gia: "800,000đ/ngày", hinh: "images/xe7cho/veloz.jpg", seats: 7 , brand :"Toyota"},
    { ten: "Inova Cross", gia: "1,000,000đ/ngày", hinh: "images/xe7cho/inovacross.png", seats: 7 , brand :"Toyota",noibat: true },
    { ten: "Inova MT", gia: "700,000đ/ngày", hinh: "images/xe7cho/inova.jpg", seats: 7 , brand :"Toyota"},
    { ten: "Canival 2025", gia: "1,600,000đ/ngày", hinh: "images/xe7cho/canival24.jpg", seats: 7 , brand :"Kia",noibat: true },
    { ten: "Canival 2023", gia: "1,600,000đ/ngày", hinh: "images/xe7cho/canival.jpg", seats: 7 , brand :"Kia"},
    { ten: "Kia Carens", gia: "800,000đ/ngày", hinh: "images/xe7cho/caren.jpg", seats: 7 , brand :"Kia"},
    { ten: "Huyndai Stagazer", gia: "750,000đ/ngày", hinh: "images/xe7cho/huyndaistagazer.jpg", seats: 7 , brand :"Huyndai"},
    { ten: "Suzuki XL7", gia: "750,000đ/ngày", hinh: "images/xe7cho/xl7.jpg", seats: 7 , brand :"Suzuki"},
    { ten: "Kia Sedona", gia: "900,000đ/ngày", hinh: "images/xe7cho/sedona.jpg", seats: 7 , brand :"Kia"},
    { ten: "Toyota Fortuner", gia: "850,000đ/ngày", hinh: "images/xe7cho/foruner.jpg", seats: 7 , brand :"Toyota"},
    { ten: "Toyota Avanza", gia: "650,000đ/ngày", hinh: "images/xe7cho/avanza.jpg", seats: 7 , brand :"Toyota"},

    /* xe hoa cuoi hoi */
    /* xe hoa */
    { ten: "Xe Hoa Mercedes Trắng", gia: "1,200,000đ/ngày", hinh: "images/xehoa/mercedes-trang.jpg", seats: 4, brand: "Mercedes", type: "hoa" },
    { ten: "Xe Hoa BMW", gia: "1,400,000đ/ngày", hinh: "images/xehoa/bmw.jpg", seats: 4, brand: "BMW", type: "hoa" },
    { ten: "Xe Hoa Audi", gia: "1,500,000đ/ngày", hinh: "images/xehoa/audi.jpg", seats: 4, brand: "Audi", type: "hoa" },
    { ten: "Xe Hoa Bentley", gia: "3,000,000đ/ngày", hinh: "images/xehoa/bentley.jpg", seats: 4, brand: "Bentley", type: "hoa" },
    /* xe noi bat */

  ];

  const giaThueLaiXe = [
    { stt: 1, tinhThanh: "Cần Thơ", khuVuc: "Cần Thơ", loaiBangLai: "Tất cả bằng lái (B2, C, D)", giaMotNgay: 400000 },
    { stt: 2, tinhThanh: "Vĩnh Long", khuVuc: "Vĩnh Long", loaiBangLai: "Tất cả bằng lái (B2, C, D)", giaMotNgay: 400000 },
    { stt: 3, tinhThanh: "Hậu Giang", khuVuc: "Hậu Giang", loaiBangLai: "Tất cả bằng lái (B2, C, D)", giaMotNgay: 400000 },
    { stt: 4, tinhThanh: "Trà Vinh", khuVuc: "Thành phố Trà Vinh, Huyện Càng Long, Huyện Cầu Kè, Huyện Tiểu Cần, Huyện Châu Thành", loaiBangLai: "Tất cả bằng lái (B2, C)", giaMotNgay: 400000 },
    { stt: 5, tinhThanh: "Trà Vinh", khuVuc: "Huyện Cầu Ngang, Huyện Trà Cú, Huyện Duyên Hải", loaiBangLai: "Tất cả bằng lái (B2, C)", giaMotNgay: 400000 },
    { stt: 6, tinhThanh: "Bến Tre", khuVuc: "Thành phố Bến Tre, Huyện Châu Thành, Huyện Giồng Trôm, Huyện Mỏ Cày Nam, Mỏ Cày Bắc", loaiBangLai: "Tất cả bằng lái (B2, C)", giaMotNgay: 500000 },
    { stt: 7, tinhThanh: "Tiền Giang", khuVuc: "Huyện Giồng Trôm, Huyện Bình Đại, Huyện Ba Tri, Huyện Thạnh Phú", loaiBangLai: "Tất cả bằng lái (B2, C)", giaMotNgay: 400000 },
    { stt: 8, tinhThanh: "Tiền Giang", khuVuc: "Thành phố Mỹ Tho, Thị xã Gò Công, Huyện Cái Bè, Huyện Châu Thành", loaiBangLai: "Tất cả bằng lái (B2, C)", giaMotNgay: 400000 },
    { stt: 9, tinhThanh: "Tiền Giang", khuVuc: "Huyện Tân Phước, Huyện Gò Công Tây, Huyện Gò Công Đông, Huyện Cai Lậy, Huyện Cái Bè", loaiBangLai: "Tất cả bằng lái (B2, C)", giaMotNgay: 400000 },
    { stt: 10, tinhThanh: "Đồng Tháp", khuVuc: "Thành phố Cao Lãnh, Thành phố Sa Đéc, Huyện Lấp Vò, Huyện Lai Vung, Huyện Châu Thành", loaiBangLai: "Tất cả bằng lái (B2, C)", giaMotNgay: 400000 },
    { stt: 11, tinhThanh: "Đồng Tháp", khuVuc: "Huyện Hồng Ngự, Huyện Tam Nông, Huyện Tháp Mười, Huyện Thanh Bình", loaiBangLai: "Tất cả bằng lái (B2, C)", giaMotNgay: 400000 },
    { stt: 12, tinhThanh: "An Giang", khuVuc: "Thành phố Long Xuyên, Huyện Phú Tân, Huyện Chợ Mới, Huyện Châu Phú, Huyện Châu Thành, Huyện Thoại Sơn", loaiBangLai: "Tất cả bằng lái (B2, C)", giaMotNgay: 400000 },
    { stt: 13, tinhThanh: "An Giang", khuVuc: "Huyện An Phú, Thị xã Tân Châu, Huyện Tri Tôn, Huyện Tịnh Biên", loaiBangLai: "Tất cả bằng lái (B2, C)", giaMotNgay: 500000 },
    { stt: 14, tinhThanh: "Kiên Giang", khuVuc: "Thành phố Rạch Giá, Huyện Tân Hiệp, Huyện Châu Thành, Huyện Giồng Riềng, Huyện Gò Quao, Huyện An Biên", loaiBangLai: "Tất cả bằng lái (B2, C)", giaMotNgay: 400000 },
    { stt: 15, tinhThanh: "Kiên Giang", khuVuc: "Thành phố Hà Tiên, Huyện Kiên Lương, Huyện Hòn Đất", loaiBangLai: "Tất cả bằng lái (B2, C)", giaMotNgay: 500000 },
    { stt: 16, tinhThanh: "Sóc Trăng", khuVuc: "Thành phố Sóc Trăng, Huyện Châu Thành, Huyện Kế Sách, Huyện Long Phú, Huyện Mỹ Xuyên, Thị xã Ngã Năm", loaiBangLai: "Tất cả bằng lái (B2, C)", giaMotNgay: 400000 },
    { stt: 17, tinhThanh: "Sóc Trăng", khuVuc: "Huyện Cù Lao Dung, Huyện Thạnh Trị, Thị xã Vĩnh Châu, Huyện Trần Đề", loaiBangLai: "Tất cả bằng lái (B2, C)", giaMotNgay: 400000 },
    { stt: 18, tinhThanh: "Bạc Liêu", khuVuc: "Huyện Đông Hải", loaiBangLai: "Tất cả bằng lái (B2, C)", giaMotNgay: 400000 },
    { stt: 19, tinhThanh: "Cà Mau", khuVuc: "Huyện Trần Văn Thời, Huyện Năm Căn, Huyện Phú Tân, Huyện Ngọc Hiển", loaiBangLai: "Tất cả bằng lái (B2, C)", giaMotNgay: 500000 },
    { stt: 20, tinhThanh: "Cà Mau", khuVuc: "Thành phố Cà Mau, Huyện U Minh, Huyện Thới Bình, Huyện Cái Nước, Huyện Đầm Dơi", loaiBangLai: "Tất cả bằng lái (B2, C)", giaMotNgay: 500000 },
    {
      stt: 21,
      tinhThanh: "Hồ Chí Minh",
      khuVuc: "Thành phố Thủ Đức, Quận 1, Quận 2, Quận 3, Quận 4, Quận 5, Quận 6, Quận 7, Quận 8, Quận 10, Quận 11, Quận 12, Huyện Củ Chi, Huyện Hóc Môn, Huyện Nhà Bè",
      loaiBangLai: "Tất cả bằng lái (B2, C)",
      giaMotNgay: 500000
    }
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
    "Cà Mau": ["Cái Nước", "Đầm Dơi", "Ngọc Hiển", "Năm Căn"],
    "Hồ Chí Minh": ["Thành phố Thủ Đức","Quận 1","Quận 2","Quận 3","Quận 4","Quận 5","Quận 6","Quận 7","Quận 8","Quận 10","Quận 11","Quận 12","Huyện Củ Chi","Huyện Hóc Môn","Huyện Nhà Bè"]

  };



  const container4cho = document.querySelector(".item-xe4cho");
  const container7cho = document.querySelector(".item-xe7cho");
  const formOverlay = document.getElementById("booking-form");
  const selectedCarInput = document.getElementById("selected-car");
  const containernoibat = document.querySelector(".slider-track");

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
/*   xe noi bat */
function XeNoiBat()
{
  const noibatCars = filterNoibat(cars); // Lọc xe nổi bật
const track = document.getElementById("noibat-track");
const prevBtn = document.querySelector(".slide-btn.prev");
const nextBtn = document.querySelector(".slide-btn.next");

 if (!track || !noibatCars || noibatCars.length === 0) return;

noibatCars.forEach((car) => {
  const div = document.createElement("a");
      div.className = "car-card";
      div.href = `car-detail.html?car=${encodeURIComponent(car.ten)}`;
      div.innerHTML = `
        ${car.noibat ? '<div class="ribbon">Nổi bật</div>' : ''}
        <img src="${car.hinh}" alt="${car.ten}" onerror="this.src='images/logo_1.jpg'" />
        <div class="car-info">
          <h3>${car.ten}</h3>
          <div class="price">${car.gia}</div>
          <div class="car-tags">
            <span class="car-tag red">${car.brand}</span>
            <span class="car-tag">${car.seats} chỗ</span>
          </div>
        </div>
      `;
      track.appendChild(div);
});

// Slide logic
let currentIndex = 0;


function updateSliderPosition() {
  const itemsPerView = getItemsPerView();
  const totalItems = noibatCars.length;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  // Cập nhật lại currentIndex nếu vượt quá maxIndex sau khi thay đổi kích thước
  if (currentIndex > maxIndex) {
    currentIndex = maxIndex;
  }

  const offsetPercent = (100 / itemsPerView) * currentIndex;
  track.style.transform = `translateX(-${offsetPercent}%)`;

  prevBtn.style.display = currentIndex > 0 ? "block" : "none";
  nextBtn.style.display = currentIndex < maxIndex ? "block" : "none";
}

// Gắn sự kiện
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});

nextBtn.addEventListener("click", () => {
  const itemsPerView = getItemsPerView();
  const maxIndex = Math.max(0, noibatCars.length - itemsPerView);
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSliderPosition();
  }
});
const itemsPerView = getItemsPerView();
const totalItems = noibatCars.length;
// Hiện nút nếu cần
if (totalItems > itemsPerView) {
  prevBtn.style.display = "block";
  nextBtn.style.display = "block";
}

updateSliderPosition();
}

function getItemsPerView() {
  const width = window.innerWidth;
  if (width <= 430) return 1;
  if (width <= 768) return 2;
  if (width <= 1024) return 3;
  return 5;                            // Desktop
}
XeNoiBat();
  /* xe 7 cho  */

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
  function filterNoibat(cars){
    return cars.filter(car =>{
      return car.noibat === true;
    })
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
          <a href="https://zalo.me/your-zalo-id" class="btn zalo">
  <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" alt="Zalo" style="width: 20px; height: 20px;" />
  Chat Zalo
          <a href="tel:0949161698" class="btn call" target="_blank" rel="noopener noreferrer">
  <svg xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px; vertical-align: middle; margin-right: 8px;" fill="white" viewBox="0 0 512 512">
    <path d="M391.1 351c-33.5-0.3-66.2-7.2-97.2-20.3-30.1-12.8-56.7-29.9-80-51.4-22.8-21-42.4-45.3-58.3-72.5-14.6-24.9-24.7-51.2-30-78.6C121.2 101.3 120 92.8 120 84c0-8.9 1.7-17.5 5.1-25.6C131.2 43 144.7 32 160.6 32c6.4 0 12.7 2 18.1 5.7 5.1 3.5 10.4 7.1 15.6 10.6 10.8 7.2 18.4 17.2 21.6 29 3.4 12.5 1.7 25.7-4.6 36.9l-7.5 13.5c-2.7 4.9-2.4 10.8 0.6 15.4l0.3 0.4c12.8 19.4 27.7 37.5 44.5 54 15.4 15.1 32.7 28.5 51.5 39.9 4.7 2.8 10.6 3 15.5 0.4l12.9-6.7c11.2-5.9 24.4-7.1 36.7-3.5 11.8 3.4 21.9 11 28.8 21.3 4.4 6.6 8.8 13.3 13.1 19.9 4.5 6.9 7.5 14.8 8.7 23 1.3 8.5 2 17.2 2 25.9 0 16-11.2 29.6-26.9 33.6-8.1 2.1-16.4 3.2-24.7 3.2h-0.5z"/>
  </svg>
  Gọi ngay 094-916-1698
</a>

          <button class="btn send" onClick="setupSendButton('${car.ten}')">
  <svg xmlns="http://www.w3.org/2000/svg" style="width: 18px; height: 18px; vertical-align: middle; margin-right: 6px;" fill="white" viewBox="0 0 512 512">
    <path d="M476.6 3.7c-2.3-1.3-5.1-1.7-7.7-1.1L12.3 113.3c-8.5 2-13.5 10.7-11.2 19.1s10.7 13.5 19.1 11.2l157.2-36.6 89.3 91.6-58.5 47.2c-4.8 3.9-7.2 10.1-6.1 16.2s5.3 11.2 11.1 13.2l91.6 32.1 32.1 91.6c2 5.8 6.9 10.1 13.2 11.1 1 .2 2 .3 3 .3 5.2 0 10.1-2.3 13.5-6.4l47.2-58.5 91.6 89.3-36.6 157.2c-2 8.5 2.7 17.1 11.2 19.1s17.1-2.7 19.1-11.2l110.6-456.6c.7-2.6.2-5.4-1.1-7.7s-3.5-4.1-6.1-5.1z"/>
  </svg>
  Gửi liên hệ
</button>

        </div>
      
       <!-- Google Map Section -->
<section class="map-section">
    <h2>ĐỊA CHỈ MEKONG TRAVEL</h2>
    <br>
    <div class="underline"></div>
    <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.1601906216747!2d105.76507437573034!3d10.003623572970936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0890033b15829%3A0x34fa19f1d35d4d25!2sCty%20TNHH%20TMDV%20Mekong%20Travel!5e0!3m2!1svi!2s!4v1746011806542!5m2!1svi!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </section>
  
  <!-- BENGIN FOOTER -->
  <footer class="footer">
  <div class="footer-container">
    <!-- Cột 1: Logo & thông tin công ty -->
    <div class="footer-column">
      <img src="./images/logo_1.jpg" alt="" class="footer-logo" />
      <p><strong>CÔNG TY THƯƠNG MẠI DỊCH VỤ MEKONG TRAVEL</strong></p>
      <p>MST: 1801785922</p>
      <p><em> Số 153 Đường số 12, Khu dân cư Hồng Loan, Phường Hưng Thạnh, Quận Cái Răng, Thành phố Cần Thơ, Việt Nam</em></p>
      <p>📞 Hotline: 094-916-1698</p>
      <p>📧 Email: kdmekongtravel@gmail.com</p>
      <div class="social-icons">
        <a href="https://www.facebook.com/profile.php?id=61574960585396"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
        <a href="#"><i class="fab fa-tiktok"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>

    <!-- Cột 2: Giới thiệu -->
    <div class="footer-column">
      <h4>Giới thiệu</h4>
      <ul>
        <li><a href="#">Về Mekong Travel</a></li>
        <li><a href="#">Mekong Travel Blogs</a></li>
        <li><a href="#">Điều khoản sử dụng</a></li>
      </ul>
    </div>

    <!-- Cột 3: Chính sách -->
    <div class="footer-column">
      <h4>Chính sách</h4>
      <ul>
        <li><a href="#">Chính sách và quy định</a></li>
        <li><a href="#">Quy chế hoạt động</a></li>
        <li><a href="#">Bảo mật thông tin</a></li>
        <li><a href="#">Giải quyết khiếu nại</a></li>
      </ul>
    </div>

    <!-- Cột 4: Dịch vụ -->
    <div class="footer-column">
      <h4>Dịch vụ</h4>
      <ul>
        <li><a href="#">Thuê Xe Tự Lái</a></li>
        <li><a href="#">Tour du lịch</a></li>
        <li><a href="#">Thuê lái xe hộ</a></li>
        <li><a href="#">Thuê xe hoa</a></li>
        <li><a href="#">Kí gửi xe tháng</a></li>
        <li><a href="#">Bảo dưỡng & lắp định vị xe</a></li>
      </ul>
    </div>
  </div>
</footer>

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

  
  const form = document.getElementById("booking-form");
  const selectedCarInput = document.getElementById("selected-car");
  
  if (form) {
    formOverlay.style.display = "flex";
    selectedCarInput.value = car;
  }
 
 
 
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

/* FORM PHỤ */

function submitForm() {
  const phone = document.getElementById("phone").value.trim();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const policy = document.getElementById("policy").checked ? "Đã đồng ý" : "Chưa đồng ý";

  if (!phone || !name || !email) {
    alert("Vui lòng điền đầy đủ thông tin.");
    return;
  }

  const scriptURL = "https://script.google.com/macros/s/AKfycbyK6wo6rMV7sLnrPb4QSOxKiFyZPaakf7XvjX_qF_SyajuIESbXligqJghsefzmuXjr/exec"; // thay bằng link của bạn

  const formData = new FormData();
  formData.append("phone", phone);
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);
  formData.append("policy", policy);

  fetch(scriptURL, { method: "POST", body: formData })
    .then(() => alert("Đã gửi thông tin thành công!"))
    .catch(error => alert("Gửi thất bại: " + error.message));
}


/* KI GUI XE THANG */


  const consignForm = document.getElementById('consignForm');
  const scriptURL = "https://script.google.com/macros/s/AKfycbzzXHSKD9J7CjvqW3ib6Xv0vtmz87ufw2Ph-_lH_7U8zXC8LEZBMjx7cIlenY4ksRIV/exec"; // Thay bằng link của bạn

  consignForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(consignForm);
    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => {
        alert("Đã gửi thông tin kí gửi thành công!");
        consignForm.reset();
      })
      .catch(error => {
        alert("Lỗi khi gửi thông tin. Vui lòng thử lại.");
        console.error("Error!", error.message);
      });
  });





