
'use strict';

const number = document.querySelector('.text'),
      btn = document.querySelector('.btn');

const { createWorker } = Tesseract;
(async () => {
  const worker = createWorker();
  await worker.load();
  await worker.loadLanguage('rus');
  await worker.initialize('rus');
  await worker.setParameters({
    tessedit_char_whitelist: '0123456789',
  });
  const { data: { text } } = await worker.recognize('../../img/Изображение PNG.png');
  console.log(text.substr(0, 10));
  number.textContent = text.substr(0, 10);
  //await worker.terminate();
})();


btn.addEventListener('click', () => {
  window.getSelection().selectAllChildren(number);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  number.style.color = 'green';
});
