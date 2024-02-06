const baseSuccessCallback = (event) => {
  event.preventDefault();
  const url = 'https://echo.htmlacademy.ru/';
  let formData;

  if (event.target.dataset.form === 'modal') {
    formData = new FormData(event.target);
  } else if (event.target.dataset.form === 'feedback') {
    formData = new FormData(event.target);
  };

  fetch(url, {
    method: 'POST',
    body: formData,
  }).then((response) => response.text()).then((data) => {
    document.body.innerHTML = `<pre>${data}</pre>`;
  }).catch(() => {
    document.body.innerHTML = 'Ошибка: не удалось отправить форму на сервер';
  });
};

const baseErrorCallback = (event) => {
  event.preventDefault();
};

export const callbacks = {
  base: {
    // Сбросс формы
    reset: true,
    // Таймаут сброса формы
    resetTimeout: 500,
    successCallback: baseSuccessCallback,
    errorCallback: baseErrorCallback,
  },
};
