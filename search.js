// ✅ Lấy tham số từ URL
function getSearchParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      type: params.get("type") || ""  // Ví dụ: "4", "7", "16"
    };
  }
  
  // ✅ Lọc danh sách xe theo số ghế
  function filterCarsBySeats(cars, seatValue) {
    const seat = parseInt(seatValue);
    if (!seat || isNaN(seat)) return cars; // Nếu không có hoặc sai định dạng, trả toàn bộ
    return cars.filter(car => car.seats === seat);
  }
  
  // ✅ Render kết quả tìm kiếm vào #search-result
  function renderSearchResults(data) {
    const container = document.getElementById("search-result");
    if (!container) return;
    container.innerHTML = "";
  
    if (!Array.isArray(data) || data.length === 0) {
     /*  container.innerHTML = "<p>Không tìm thấy kết quả phù hợp.</p>"; */
      updateResultTitle(0, 0);
      return;
    }
  
    data.forEach(car => {
      const div = document.createElement("a");
      div.className = "car-card";
      div.href = `car-detail.html?car=${encodeURIComponent(car.ten)}`;
      div.innerHTML = `
      <div class="ribbon">Nổi bật</div>
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
      container.appendChild(div);
    });
  
    // ✅ Cập nhật dòng hiển thị kết quả
    updateResultTitle(data.length, data[0].seats);
  }
  
  // ✅ Cập nhật kết quả vào #result-title hoặc .result-find
  function updateResultTitle(count, seats) {
    const el1 = document.getElementById("result-title");
    const el2 = document.querySelector(".result-find");
  
    const text = count > 0
      ? `Tìm thấy ${count} xe ${seats} chỗ`
      : `Không tìm thấy kết quả nào`;
  
    if (el1) el1.textContent = text;
    if (el2) el2.textContent = text;
  }
  
  // ✅ Khi trang load xong
  window.onload = function () {
    console.log("✅ search.js loaded");
   
    if (typeof cars === "undefined") {
      console.error("❌ Biến 'cars' chưa được khai báo. Đảm bảo bạn đã load main.js trước search.js.");
      return;
    }
  
    const { type } = getSearchParams();
    const filtered = filterCarsBySeats(cars, type);
    renderSearchResults(filtered);
   
    generateFilters(cars);
    setupFilterListeners(); // lắng nghe thay đổi
    renderSearchResults(cars); // hoặc lọc sẵn nếu có URL

    restoreSelectedType(type); // giữ lại select phù hợp
  };

  function restoreSelectedType(type) {
    const seatSelect = document.getElementById("seat-select");
    if (!seatSelect) {
      console.warn("Không tìm thấy thẻ select với .seat-select");
      return;
    }
  
    // Kiểm tra xem trong select có option phù hợp không
    const options = Array.from(seatSelect.options);
    const matched = options.find(opt => opt.value === type);
  
    if (matched) {
      seatSelect.value = type;
      console.log("Đã set lại seat-select thành:", type);
    } else {
      console.warn("Không tìm thấy option tương ứng với type:", type);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const seatSelect = document.getElementById("seat-select");
  
    if (seatSelect) {
      seatSelect.addEventListener("change", () => {
        const selectedSeat = parseInt(seatSelect.value);
        const filtered = filterCarsBySeats(cars, selectedSeat);
        renderSearchResults(filtered);
  
        // (Tùy chọn) cập nhật URL
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set("type", selectedSeat || "");
        window.history.replaceState({}, "", newUrl);
      });
    }


    const data = localStorage.getItem("searchResult");
    /* console.log("data",data) */
    if (data) {
      const ketQua = JSON.parse(data);
      renderTable(ketQua);
    } 
    
   /*  loc lai lái xe tài xế */
    const provinceSelect = document.getElementById("province-select-search");

  if (provinceSelect) {
  provinceSelect.addEventListener("change", () => {
    const selectedProvince = provinceSelect.value;

    // Lấy từ localStorage nếu có, nếu không thì dùng toàn bộ danh sách gốc
    const data = localStorage.getItem("searchResult");
    let fullResult;

    try {
      const parsed = JSON.parse(data);
      fullResult = (parsed && parsed.length > 0) ? parsed : giaThueLaiXe;
    } catch {
      fullResult = giaThueLaiXe;
    }

    const filtered = selectedProvince === "all"
      ? fullResult
      : fullResult.filter(item => item.tinhThanh === selectedProvince);

    renderTable(filtered);
  });
    }
  
    // Lúc vào trang, hiển thị sẵn kết quả ban đầu
    const data1 = localStorage.getItem("searchResult");
    if (data) {
      const result = JSON.parse(data1);
      renderTable(result);
    }


  });


  function generateFilters(cars) {
    const seatCounts = {};
    const brandCounts = {};
  
    cars.forEach(car => {
      const seat = car.seats || 0;
      const brand = car.brand || "Không rõ";
  
      seatCounts[seat] = (seatCounts[seat] || 0) + 1;
      brandCounts[brand] = (brandCounts[brand] || 0) + 1;
    });
  
    // SEAT SELECT
    const seatSelect = document.getElementById("seat-select");
    if (seatSelect) {
      seatSelect.innerHTML = '<option value="0">Tất cả dòng xe</option>';
      for (const [seat, count] of Object.entries(seatCounts)) {
        const option = document.createElement("option");
        option.value = seat;
        option.textContent = `Xe ${seat} chỗ (${count})`;
        seatSelect.appendChild(option);
      }
    }
  
    // BRAND SELECT
    const brandSelect = document.getElementById("brand-select");
    if (brandSelect) {
      brandSelect.innerHTML = '<option value="">Tất cả hãng xe</option>';
      for (const [brand, count] of Object.entries(brandCounts)) {
        const option = document.createElement("option");
        option.value = brand;
        option.textContent = `${brand} (${count})`;
        brandSelect.appendChild(option);
      }
    }
  }
    
  
 

  function setupFilterListeners() {
    const seatSelect = document.getElementById("seat-select");
    const brandSelect = document.getElementById("brand-select");
  
    const handleFilterChange = () => {
      const seat = seatSelect.value;   // "0", "4", "7", etc.
      const brand = brandSelect.value; // "" or "Toyota", "Ford", etc.
  
      const filtered = filterCarsCombined(cars, seat, brand);
      renderSearchResults(filtered);
  
      // (Tuỳ chọn) cập nhật URL
      const url = new URL(window.location.href);
      url.searchParams.set("type", seat);
      url.searchParams.set("brand", brand);
      window.history.replaceState({}, "", url);
    };
  
    seatSelect.addEventListener("change", handleFilterChange);
    brandSelect.addEventListener("change", handleFilterChange);
  }

  function filterCarsCombined(cars, seat, brand) {
    const seatNum = parseInt(seat);
    return cars.filter(car =>
      (seat === "0" || car.seats === seatNum) &&
      (!brand || car.brand === brand)
    );
  }

  function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      location: params.get("location") || "",
      type: params.get("type") || ""
    };
  }
  
  function renderTable(ketQua) {
    const container = document.getElementById("search-result-taixe");
  
    if (ketQua.length === 0) {
    
      return;
    }
  
    // Tạo bảng HTML
    let html = `
      <table class="result-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tỉnh/Thành phố</th>
            <th>Khu vực</th>
            <th>Loại bằng lái</th>
            <th>Giá/ngày (VNĐ)</th>
          </tr>
        </thead>
        <tbody>
    `;
  
    ketQua.forEach((item, index) => {
      html += `
        <tr>
          <td>${index + 1}</td>
          <td>${item.tinhThanh}</td>
          <td>${item.khuVuc}</td>
          <td>${item.loaiBangLai}</td>
          <td>${item.giaMotNgay.toLocaleString()}</td>
        </tr>
      `;
    });
  
    html += `</tbody></table>`;
    container.innerHTML = html;
  }