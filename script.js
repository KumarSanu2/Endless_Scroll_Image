let count=2;
let arr=[];

const container=document.getElementById("container");
const apiKey = "aLIScZ6ZBk-Cl8ob-FoznK18yvkusByAe0tmm96QCOk";
const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=&count=${count}`;

const showImages=() => {
    arr.forEach((ele) => {
        console.log(ele);
        let div = document.createElement("div");
        div.innerHTML= `
            <img src="${ele.urls.small}" alt="${ele.alt_description}"/>
        `;
        container.append(div);
    });
};
const getImage=() => {
    fetch(apiUrl)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            arr =data;
            showImages();
        });
};
getImage();
window.addEventListener("scroll", () => {
  console.log(window.scrollY + window.innerHeight, document.body.offsetHeight);
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
    getImage();
  }
});