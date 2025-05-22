const form = document.getElementById('contactForm');
  const scriptURL = 'https://script.google.com/macros/s/AKfycbw_ONF6kaYC6ENZnvPxJqyFQcdxebc6GftsIz3menJWC6OucbfM1BpRVVyBdmtIvtDy/exec';

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(() => {
        alert('Đã gửi thành công!');
        form.reset();
      })
      .catch(() => alert('Lỗi gửi!'));
  });