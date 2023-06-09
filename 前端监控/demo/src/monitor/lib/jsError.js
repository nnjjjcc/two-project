export function injectJsError() {
  //监听全局未捕获的错误
  window.addEventListener("error", function (event) {
    //错误事件对象
    conso.log(event);
  });
}
