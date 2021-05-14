let date = document.getElementById('date');

const myData = new Date();
const monthNames = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
    "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"
];

const weekDay = myData.toLocaleString('pl-PL', { weekday: 'long' });
const month = monthNames[myData.getMonth()];
const dayOfMonth = myData.getDate();

date.textContent = "" + weekDay + ", " + month + " " + dayOfMonth + "";

let addbtn = document.getElementById('btn');
let addInput = document.getElementById('addinput');
let hrdiv = document.getElementById('hrdiv');
let input = document.getElementById('inpt');
let priorityBtn = document.getElementById('priorityBtn');
let pTasks = document.getElementById('pTasks');
addbtn.addEventListener('click', newTask);

function newTask() {

    priorityBtn.style.display = 'flex';
    input.style.display = 'flex';

    let horizontalLine = document.createElement("HR");
    horizontalLine.className = "hr";
    hrdiv.appendChild(horizontalLine);
    addbtn.disabled = true;

    let input2 = document.createElement("input");
    input2.type = "button";
    input2.value = "Add";
    input2.className = "submit";
    addInput.appendChild(input2);

    input2.addEventListener('click', addTask);

    input.addEventListener('keyup', function(event) {
        if (event.code === 'Enter') {
            addTask()
        }
    })
}

let tasksH = document.getElementById('tasksH');
let tasksM = document.getElementById('tasksM');
let tasksL = document.getElementById('tasksL');

function addTask() {
    let pElem = document.createElement('p');
    pElem.className = "tasksList";
    pElem.setAttribute("data-aos", "fade-left");

    let doneElem = document.createElement('i');
    doneElem.id = "doneTask";
    doneElem.className = "fas fa-check fa-sm";
    doneElem.setAttribute("data-aos", "fade-left");

    let iElem = document.createElement('i');
    iElem.id = "removeTask";
    iElem.className = "fas fa-trash fa-sm";
    iElem.setAttribute("data-aos", "fade-left");

    if (priorityBtn.options[priorityBtn.selectedIndex].text == "High") {
        tasksH.appendChild(pElem);
        tasksH.appendChild(doneElem);
        tasksH.appendChild(iElem);
        pElem.innerHTML = "" + `${input.value}` + "";
        input.value = "";
    } else if (priorityBtn.options[priorityBtn.selectedIndex].text == "Normal") {
        tasksN.appendChild(pElem);
        tasksN.appendChild(doneElem);
        tasksN.appendChild(iElem);
        pElem.innerHTML = "" + `${input.value}` + "";
        input.value = "";
    } else {
        tasksL.appendChild(pElem);
        tasksL.appendChild(doneElem);
        tasksL.appendChild(iElem);
        pElem.innerHTML = "" + `${input.value}` + "";
        input.value = "";
    }

    let removeTasks = document.getElementsByClassName('removeTask');
    iElem.addEventListener('click', deleteTask);

    function deleteTask() {
        pElem.remove();
        iElem.remove();
        doneElem.remove();
    }

    let doneTasks = document.getElementById('doneTasks');
    doneElem.addEventListener('click', done);

    function done() {
        
        

        // let pElem = document.createElement('p');
        // pElem.className = "tasksList";
        //pElem.setAttribute("data-aos", "fade-left");


        pElem.appendChild(doneTasks);
        // doneTasks.innerHTML = "" + `${pElem.value}` + "";
        console.log(pElem);
        // pElem.remove();
        // iElem.remove();
        // doneElem.remove();
    }
}