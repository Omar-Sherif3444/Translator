const textAreaOne = document.querySelector('[data-cls="from-text"]');
const textAreaTwo = document.querySelector('[data-cls="to-text"]');
const selectOne = document.querySelector('[data-cls="select-from"]');
const selectTwo = document.querySelector('[data-cls="select-to"]');
const translateBtn = document.querySelector('[data-cls="translate-btn"]');

Object.entries(countries).forEach(([code, name]) => {
  const option = `<option value="${code}">${name}</option>`;
  selectOne.innerHTML += option;
  selectTwo.innerHTML += option;
});
translateBtn.addEventListener("click", () => {
  fetch(
    `https://api.mymemory.translated.net/get?q=${textAreaOne.value}&langpair=${selectOne.value.split("-")[0]}|${selectTwo.value.split("-")[0]}`,
  )
    .then((response) => response.json())
    .then((data) => {
      textAreaTwo.value = data.responseData.translatedText;
    });
});
