let myLeads = []
const inputEl = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputbtn.addEventListener("click" ,function() {
     
    
    myLeads.push(inputEl.value)
    console.log(myLeads)
    renderLeads();
})

function renderLeads(){

    let listItems = "";
for(let a = 0; a<myLeads.length ; a++){
     

    listItems +="<li>"+myLeads[a] +"</li>"
    // console.log(myLeads[a])
}

ulEl.innerHTML = listItems;

}
