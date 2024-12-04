var pages = [
    { name: "ホーム", file: "index.html" },
    { name: "自己紹介", file: "about.html" },
    { name: "作品", file: "works.html" } // 必要なら追加
];

var navList = document.getElementById("nav-list");
pages.forEach(function(page) {
    var li = document.createElement("li");
    li.innerHTML = `<a href="${page.file}">${page.name}</a>`;
    navList.appendChild(li);
});
