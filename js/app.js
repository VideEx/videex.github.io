let sheet = document.styleSheets[0];
console.log(document.documentElement.clientWidth);
console.log('ldsknldjnd');
if (document.documentElement.clientWidth <= 430) {
    sheet.cssRules[0].style.setProperty('--btn-font-size', '12px');
    sheet.cssRules[0].style.setProperty('--title-font-size', '35px');
    sheet.cssRules[0].style.setProperty('--second-title-font-size', '20px');
    sheet.cssRules[0].style.setProperty('--text-font-size', '14px');
    sheet.cssRules[0].style.setProperty('--input-font-size', '14px');
}
// document.documentElement.clientWidth <= 430 ?sheet.cssRules[0].style.setProperty('', 'новое значение') : alert('dkhcbsfksbd');