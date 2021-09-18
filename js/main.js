{
  // 文字数カウント
  const qs_textCount = document.querySelector('#textCount');
  const qa_textCountWithoutSpace = document.querySelector('#textCountWithoutSpace');
  const qa_gyosuCount = document.querySelector('#gyosuCount');

  textCountArea.addEventListener('input', function () {
    const kaigyoCount = textCountArea.value.split('').filter((text) => text === '\n').length;
    const spaceCount = textCountArea.value.split('').filter((text) => [' ', '　'].includes(text)).length;
    const textCount = textCountArea.value.length - kaigyoCount;
    const gyosuCount = kaigyoCount
      + (textCountArea.value.split('\n').slice(-1)[0].trim().length ? 1 : 0);

    qs_textCount.textContent = textCount;
    qa_textCountWithoutSpace.textContent = textCount - spaceCount;
    qa_gyosuCount.textContent = gyosuCount;
  });
}
