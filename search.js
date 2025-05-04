let currentPage = 1;
const itemsPerPage = 10;
let filteredCars = [];

// ✅ Lấy tham số từ URL
function getSearchParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    type: params.get("type") || "",
    brand: params.get("brand") || ""
  };
}

// ✅ Lọc xe theo chỗ ngồi và hãng
function filterCarsCombined(cars, seat, brand) {
  const seatNum = parseInt(seat);
  return cars.filter(car =>
    (seat === "0" || car.seats === seatNum) &&
    (!brand || car.brand === brand)
  );
}

// ✅ Gọi khi có kết quả lọc mới
function renderSearchResults(data) {
  filteredCars = Array.isArray(data) ? data : [];
  currentPage = 1;
  renderPaginatedResults();
}

// ✅ Hiển thị danh sách xe theo trang
function renderPaginatedResults() {
  const container = document.getElementById("search-result");
  if (!container) return;
  container.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageData = filteredCars.slice(start, end);

  if (pageData.length === 0) {
    updateResultTitle(0, 0);
    return;
  }

  pageData.forEach(car => {
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

  updateResultTitle(filteredCars.length, pageData[0].seats);
  renderPaginationControls();
}

// ✅ Hiển thị phân trang
function renderPaginationControls() {
  const container = document.getElementById("pagination");
  if (!container) return;

  container.innerHTML = "";
  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = i === currentPage ? "active" : "";
    btn.onclick = () => {
      currentPage = i;
      renderPaginatedResults();
    };
    container.appendChild(btn);
  }
}

// ✅ Cập nhật kết quả hiển thị
function updateResultTitle(count, seats) {
  const el1 = document.getElementById("result-title");
  const el2 = document.querySelector(".result-find");

  const text = count > 0
    ? `Tìm thấy ${count} xe ${seats} chỗ`
    : `Không tìm thấy kết quả nào`;

  if (el1) el1.textContent = text;
  if (el2) el2.textContent = text;
}

// ✅ Khôi phục select khi reload trang
function restoreSelectedFilters(type, brand) {
  const seatSelect = document.getElementById("seat-select");
  const brandSelect = document.getElementById("brand-select");

  if (seatSelect) seatSelect.value = type;
  if (brandSelect) brandSelect.value = brand;
}

// ✅ Tạo filter từ danh sách
function generateFilters(cars) {
  const seatCounts = {};
  const brandCounts = {};

  cars.forEach(car => {
    const seat = car.seats || 0;
    const brand = car.brand || "Không rõ";

    seatCounts[seat] = (seatCounts[seat] || 0) + 1;
    brandCounts[brand] = (brandCounts[brand] || 0) + 1;
  });

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

// ✅ Khi thay đổi filter
function setupFilterListeners(cars) {
  const seatSelect = document.getElementById("seat-select");
  const brandSelect = document.getElementById("brand-select");

  const handleFilterChange = () => {
    const seat = seatSelect.value;
    const brand = brandSelect.value;
    const filtered = filterCarsCombined(cars, seat, brand);
    renderSearchResults(filtered);

    const url = new URL(window.location.href);
    url.searchParams.set("type", seat);
    url.searchParams.set("brand", brand);
    window.history.replaceState({}, "", url);
  };

  seatSelect.addEventListener("change", handleFilterChange);
  brandSelect.addEventListener("change", handleFilterChange);
}

// ✅ Chạy khi load trang
window.onload = function () {
  console.log("✅ search.js loaded");

  if (typeof cars === "undefined") {
    console.error("❌ Biến 'cars' chưa được khai báo. Đảm bảo bạn đã load main.js trước search.js.");
    return;
  }

  const { type, brand } = getSearchParams();
  const filtered = filterCarsCombined(cars, type, brand);

  generateFilters(cars);
  restoreSelectedFilters(type, brand);
  setupFilterListeners(cars);
  renderSearchResults(filtered);
};
