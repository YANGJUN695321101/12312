const titleRegex = /"goods_name":"(.*?)"/g;
const mainImageRegex = /"goods_thumb_url":"(.*?)"/g;
const skuSpecRegex = /"specs":"(.*?)"/g;
const priceRegex = /"normal_price":(\d+)/g;
const skuImageRegex = /"thumb_url":"(.*?)"/g;

window.addEventListener('load', () => {
  const pageHtml = document.documentElement.innerHTML;

  // 标题
  const titleMatches = [...pageHtml.matchAll(titleRegex)];
  const titles = titleMatches.map(match => match[1]);

  // 主图
  const mainImageMatches = [...pageHtml.matchAll(mainImageRegex)];
  const mainImages = mainImageMatches.map(match => match[1]);

  // SKU规格
  const skuSpecMatches = [...pageHtml.matchAll(skuSpecRegex)];
  const skuSpecs = skuSpecMatches.map(match => match[1]);

  // 价格
  const priceMatches = [...pageHtml.matchAll(priceRegex)];
  const prices = priceMatches.map(match => match[1]);

  // SKU图片
  const skuImageMatches = [...pageHtml.matchAll(skuImageRegex)];
  const skuImages = skuImageMatches.map(match => match[1]);

  // 这里可以处理和使用提取到的数据
});