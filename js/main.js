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
{
  // ランダム文字列生成
  const qs_randomTextArea = document.querySelector('#randomTextArea');
  const qs_randomTextGenerateBtn = document.querySelector('#randomTextGenerateBtn');
  const qs_randomTextCopyBtn = document.querySelector('#randomTextCopyBtn');
  const qs_randomTextSize = document.querySelector('#randomTextSize');
  const qs_checkboxRandomTextNumbers = document.querySelector('#checkboxRandomTextNumbers');
  const qs_checkboxRandomTextUppers = document.querySelector('#checkboxRandomTextUppers');
  const qs_checkboxRandomTextLowers = document.querySelector('#checkboxRandomTextLowers');

  const generateRandomText = function () {
    const randomTextOrigin = ''
      + (qs_checkboxRandomTextNumbers.checked ? '0123456789' : '')
      + (qs_checkboxRandomTextUppers.checked ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '')
      + (qs_checkboxRandomTextLowers.checked ? 'abcdefghijklmnopqrstuvwxyz' : '');

    const randomTextSize = +qs_randomTextSize.value || 10;

    qs_randomTextArea.textContent = Array
      .from(Array(randomTextSize))
      .map(() => randomTextOrigin[Math.floor(Math.random() * randomTextOrigin.length)])
      .join('')
  };
  qs_randomTextGenerateBtn.addEventListener('click', generateRandomText);

  const copyRandomText = function () {
    qs_randomTextArea.select();
    document.execCommand("copy");
  }
  qs_randomTextCopyBtn.addEventListener('click', copyRandomText);
}
