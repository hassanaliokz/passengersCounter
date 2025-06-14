
const increment = document.querySelector("#increment-btn");
const saveBtn = document.querySelector("#save-btn");
let savePara = document.querySelector("#save-para")
let number = document.querySelector("h2");
let count = 0;

const updatedNum = () => {
    count++;
    number.innerText = count;
}

const save = () => {
    let text = savePara.innerText;
    savePara.innerText = `${text} ${count} - `;
    number.innerText = "0";
    count = 0;
}
increment.addEventListener(("click"), () => updatedNum());
saveBtn.addEventListener(("click"), () => save());
