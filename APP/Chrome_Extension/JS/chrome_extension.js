let myLeads = []
const inputEl = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputbtn.addEventListener("click" ,function() {
     
    
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads();
})

function renderLeads(){

    let listItems = "";
for(let a = 0; a<myLeads.length ; a++){
     

    listItems +=
    `<li>
          <a href='${myLeads[a]}' target='_blank'>${myLeads[a]}</a>   
    </li>`
}  //Template string Symbol : `

ulEl.innerHTML = listItems;

}

