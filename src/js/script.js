const title = document.querySelectorAll(".title");

title.forEach((item) => {
  item.addEventListener("click", () => {
    const parent = item.parentElement;
    const contentBox = parent.nextElementSibling;

    const isClose = item.classList.contains("before:content-['+']");

    item.classList.toggle("before:content-['+']", !isClose);
    item.classList.toggle("before:content-['-']", isClose);

    contentBox.classList.toggle("h-0", !isClose);
    contentBox.classList.toggle("py-4", !isClose);
    
    contentBox.classList.toggle("h-auto", isClose);
    contentBox.classList.toggle("py-4", isClose);
  });
});
