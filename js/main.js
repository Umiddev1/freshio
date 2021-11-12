let SiteBtn = document.querySelector('.shops__icon');
let InnerShops = document.querySelector('.shops__inner');

SiteBtn.addEventListener("click", () => {
  InnerShops.classList.toggle("hidden");
})

