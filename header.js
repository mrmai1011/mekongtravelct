function renderHeader() {
    const headerHTML = `
  
      <a href="./index.html"><img src="./images/logo_1.jpg" alt="Mekong Travel Logo" class="logo_img"></a>
        <div class="toggle-menu" onClick="onClickMenu()">☰</div>
       

        <ul class="subnavMobie" style="list-style-type: none;">
            <li><a href="./index.html">Trang chủ</a></li>
            <li><a href="./about.html">Giới thiệu</a></li>
            <li onClick="toggleDichvu()"><a href="#">Dịch vụ <i class="ti-angle-down" ></i></a>
              <ul class="subnavDichvu" style="list-style-type: none ; display:none;">
                <li><a href="./product.html">Thuê xe tự lái</a></li>
                <li><a href="./tour.html">Tour du lịch</a></li>
                <li><a href="./laixeho.html">Thuê lái xe hộ</a></li>
                <li><a href="./xehoa.html">Thuê xe hoa</a></li>
                <li><a href="./kiguixethang.html">Kí gửi xe tháng</a></li>
                <li><a href="./tourtrainghiem.html">Tour DL trải nghiệm</a></li>
              </ul>
           </li>
        <li><a href="./tintuc.html">Tin tức</a></li>
        <li><a href="./lienhe.html">Liên hệ</a></li>
        </ul>

      <ul id="nav" style="list-style-type: none; ">
        <li><a href="./index.html">Trang chủ</a></li>
        <li><a href="./about.html">Giới thiệu</a></li>
        <li><a href="#">Dịch vụ <i class="ti-angle-down"></i></a>
          <ul class="subnav" style="list-style-type: none;">
            <li><a href="./product.html">Thuê xe tự lái</a></li>
            <li><a href="./tour.html">Tour du lịch</a></li>
            <li><a href="./laixeho.html">Thuê lái xe hộ</a></li>
            <li><a href="./xehoa.html">Thuê xe hoa</a></li>
            <li><a href="./kiguixethang.html">Kí gửi xe tháng</a></li>
            <li><a href="./tourtrainghiem.html">Tour du lịch trải nghiệm</a></li>
          </ul>
        </li>
        <li><a href="./tintuc.html">Tin tức</a></li>
        <li><a href="./lienhe.html">Liên hệ</a></li>
      </ul>
  
      <div class="hotline">
      
        <ul class="more_inf">
      
          <li   class="hotline-only"><i class="ti-headphone">  Hotline:</i><a href="#" class="contact_mini"> <span>094-916-1698</span></a></li>
          <li  class="hide-on-mobile"><i class="ti-location-pin">  Địa chỉ:</i><a href="https://maps.app.goo.gl/fYyv9kTjr1yVqAYc9" class="contact_mini"> <span>Số 153, Đường 5C, KDC Hồng Loan, Cái Răng, Cần Thơ</span></a></li>
          <li  class="hide-on-mobile"><i class="ti-facebook">  Fanpage:</i><a href="https://www.facebook.com/profile.php?id=61574960585396" class="contact_mini"> <span>facebook.com/mekongtravel</span></a></li>
        </ul>
       
      </div>
     
    `;
  
    document.getElementById("header").innerHTML = headerHTML;
  }