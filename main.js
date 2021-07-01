let date = document.getElementById('date');

const myData = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const weekDay = myData.toLocaleString('en-US', { weekday: 'long' });
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
    let divElem = document.createElement('div');
    divElem.className = "divElem";

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
    pElem.innerHTML = "" + `${input.value}` + "";
    input.value = "";

    if (priorityBtn.options[priorityBtn.selectedIndex].text == "High") {
        tasksH.appendChild(pElem);
        tasksH.appendChild(doneElem);
        tasksH.appendChild(iElem);
        tasksH.appendChild(divElem);
        divElem.appendChild(pElem);
        divElem.appendChild(doneElem);
        divElem.appendChild(iElem);
        pElem.id = "High"
    } else if (priorityBtn.options[priorityBtn.selectedIndex].text == "Normal") {
        tasksN.appendChild(pElem);
        tasksN.appendChild(doneElem);
        tasksN.appendChild(iElem);
        tasksN.appendChild(divElem);
        divElem.appendChild(pElem);
        divElem.appendChild(doneElem);
        divElem.appendChild(iElem);
        pElem.id = "Normal"
    } else if (priorityBtn.options[priorityBtn.selectedIndex].text == "Low") {
        tasksL.appendChild(pElem);
        tasksL.appendChild(doneElem);
        tasksL.appendChild(iElem);
        tasksL.appendChild(divElem);
        divElem.appendChild(pElem);
        divElem.appendChild(doneElem);
        divElem.appendChild(iElem);
        pElem.id = "Low"
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
        let delCrossBtn = document.createElement('i');
        delCrossBtn.id = "delCrossBtn";
        delCrossBtn.className = "fas fa-times fa-sm";
        let reverseBtn = document.createElement('i');
        reverseBtn.id = 'reverseBtn';
        reverseBtn.className = "fas fa-history";

        doneTasks.appendChild(divElem);
        divElem.appendChild(pElem);
        divElem.appendChild(reverseBtn);
        divElem.appendChild(delCrossBtn);
        doneElem.remove();
        iElem.remove();

        divElem.setAttribute("data-aos", "fade-left");

        delCrossBtn.addEventListener('click', deleteTask);

        function deleteTask() {
            pElem.remove();
            delCrossBtn.remove();
            reverseBtn.remove();
        }

        reverseBtn.addEventListener('click', reverseTask);

        function reverseTask() {
            if (pElem.id == "High") {
                tasksH.appendChild(pElem);
                tasksH.appendChild(doneElem);
                tasksH.appendChild(iElem);
                tasksH.appendChild(divElem);
                divElem.appendChild(pElem);
                divElem.appendChild(doneElem);
                divElem.appendChild(iElem);
                delCrossBtn.remove();
                reverseBtn.remove();
            } else if (pElem.id == "Normal") {
                tasksN.appendChild(pElem);
                tasksN.appendChild(doneElem);
                tasksN.appendChild(iElem);
                tasksN.appendChild(divElem);
                divElem.appendChild(pElem);
                divElem.appendChild(doneElem);
                divElem.appendChild(iElem);
                delCrossBtn.remove();
                reverseBtn.remove();
            } else if (pElem.id == "Low") {
                tasksL.appendChild(pElem);
                tasksL.appendChild(doneElem);
                tasksL.appendChild(iElem);
                tasksL.appendChild(divElem);
                divElem.appendChild(pElem);
                divElem.appendChild(doneElem);
                divElem.appendChild(iElem);
                delCrossBtn.remove();
                reverseBtn.remove();
            }
        }

        let delAllTasks = document.getElementById('delAllTasks');
        delAllTasks.addEventListener('click', ClearDoneTasks)

        function ClearDoneTasks() {
        	divElem.remove();
        }
    }
}

