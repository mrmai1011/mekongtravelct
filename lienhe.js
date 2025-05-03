const form = document.getElementById('contactForm');
  const scriptURL = 'https://script.google.com/macros/s/AKfycbz6_O1P4yxygBYG4UKvS8ITQPJfSDXHnViFOAKH9wUuHW59z581pw4yD6baznLPaX8Y/exec';

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