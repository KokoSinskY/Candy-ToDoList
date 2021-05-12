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
addbtn.addEventListener('click', newTask);
let addInput = document.getElementById('addinput');
let hrdiv = document.getElementById('hrdiv');
let input = document.getElementById('inpt');


function newTask() {


	input.style.display = 'flex';
    let input2 = document.createElement("input");
    input2.type = "button";
    input2.value = "add";
    input2.className = "submit";
    addInput.appendChild(input2);

    let horizontalLine = document.createElement("HR");
    horizontalLine.className = "hr";
    hrdiv.appendChild(horizontalLine);
    addbtn.disabled = true;

    
input2.addEventListener('click', addTask);
    let tasks = document.getElementById('tasks');
    
    function addTask() {
        let pElem = document.createElement('p');
        pElem.className = "tasksList";
        tasks.appendChild(pElem);
        pElem.innerHTML = "" + `${input.value}` + "";
        input.value = "";
    }

input.addEventListener('keyup', function(event) {
	if (event.code === 'Enter') {
		addTask()
	}
})

}


