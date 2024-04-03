const inputArea = document.getElementById("write");
const wordCount = document.getElementById("word-count");
const charCount = document.getElementById("character-count");

inputArea.addEventListener("input", ()=>{
    //count characters
    charCount.innerHTML = inputArea.value.length;
    let num = inputArea.value.trim(); 
    wordCount.innerHTML = num.split(/\s+/).filter((item)=> item).length;
});