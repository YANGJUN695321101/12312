document.getElementById('getInfo').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {message: 'get_product_info'}, (response) => {
      if (response) {
        let productInfoContainer = document.getElementById('productInfo');
        productInfoContainer.innerHTML = '';
        response.forEach((product) => {
          productInfoContainer.innerHTML += `<p>商品名称：${product.title}<br>商品价格：${product.price}<br>图片链接：${product.imgUrl}</p>`;
        });
      } else {
        alert('未找到商品信息，请确保您在拼多多移动端网页上。');
      }
    });
  });
});
