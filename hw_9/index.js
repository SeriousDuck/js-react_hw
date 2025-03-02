const amount = 100; 
const monday = [ 
   ['Write a tutorial', 180], 
   ['Some web development', 120]
 ]; 
const tuesday = [ 
   ['Keep writing that tutorial', 240],
   ['Some more web development', 360], 
   ['A whole lot of nothing', 120] 
];

const allTask = monday.concat(tuesday);
const hour = 60;

const complateTask = allTask
    .map(task => [task[0], task[1] / hour, task[1] / hour * amount])
    .filter(task => task[1] > 2)


const documentWrite = complateTask.map(task =>
    `        
        <tr> 
            <td>Task name: ${task[0]}</td> 
            <td>Task duration: ${task[1]} hour</td>
            <td>Task amount: ${task[2]}$</td> 
        </tr>
    `
).join('');

document.write(
    `
        <table>
            ${documentWrite}
        </table>
        
    `
)

// console.log(complateTask);