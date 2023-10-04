const inputBox = document.getElementById('input-box')
const addButton = document.getElementById('button-box')

const list = document.getElementById('list-container')


addButton.addEventListener('click', () => {
    const inputValue = inputBox.value

    if(inputValue === '') {
        alert('Campo vazio')
    } else {
        let listItem = document.createElement('li')
        listItem.textContent = inputValue
        list.appendChild(listItem)
        let spanCross = document.createElement('span')
        spanCross.innerHTML = "\u00d7"
        listItem.appendChild(spanCross)
    }

    inputBox.value = '';
    saveData()
})

list.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData()
    }
}, false)

// set e get, salvar no local
function saveData(){
    localStorage.setItem("data", list.innerHTML)
}

function showTask(){
    list.innerHTML = localStorage.getItem('data')
}

showTask()

