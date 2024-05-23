addEventListener(
  "fetch",event => {
     let url=new URL(event.request.url);
     url.hostname="vip.tuzi226.top"; // 修改成自己的节点IP/域名
     url.protocol='https'; // 如为http协议请修改为http
     let request=new Request(url,event.request);
     event. respondWith(
       fetch(request)
     )
  }
)