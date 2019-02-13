(function (doc, win) {
  const docEle = doc.documentElement;
  const screenMonitor = 'orientationchange' in win ? 'orientationchange' : 'resize';
  function recalc() {
    const getWidth = docEle.clientWidth;
    if (!getWidth) return;
    docEle.style.fontSize = `20 * (${getWidth} / 100) + px`;
  }
  if (!doc.addEventListener) return;
  win.addEventListener(screenMonitor, recalc, false);
  doc.addEventListener('DomContentLoaded', recalc, false);
})(document, window);
