var input = document.getElementById("myInput");
const ul = document.getElementById("list");

input.addEventListener("keydown", function (event) {

    if (event.key === "Enter" || event.keyCode === 13) {
        handleEnterKeyPress();
    }
});
const cv = {
    "edu.txt": "MMMUT B.Tech Nov 2020 - May 2024",
    "exp.txt": "Current- INTERVIEW KICKSTART  EX-",
    "project.txt": "AIRLINE BACKEND SYSTEM ,DOCTOR APPOINTMENT BOOKING(Available on my github)",
    "skill.txt": "PROGRAMMING:C/C++, Javascript, Python",
    "achievement.txt": "Expert on Codeforces,5 start on CodeChef, 4 Kyu on Atcoder,Guardian on Leetcode,",
}

function handleEnterKeyPress() {

    const li = document.createElement('li');
    li.innerText = ">" + input.value;
    const div = document.createElement('div');
    div.id = "message";
    if (input.value == 'help') {
        const p1 = document.createElement('p');
        p1.innerText = "Available commands are 'ls' 'type' 'help'."
        const p2 = document.createElement('p');
        p2.innerText = "To get detail about a command type help <command>.";
        div.append(p1);
        div.append(p2);
    } else if (input.value == 'help ls') {
        const p1 = document.createElement('p');
        p1.innerText = "This command give the availabe files in current directory.";
        div.append(p1);
    } else if (input.value == 'help type') {
        const p1 = document.createElement('p');
        p1.innerText = "This command display the context of file.";
        div.append(p1);
    } else if (input.value == 'ls') {
        const p1 = document.createElement('p');
        p1.innerText = 'EDUCATION.txt EXPERIENCE.txt PROJECTS.txt SKILLS.txt ACHIEVEMENT.txt';
        div.append(p1);
    } else if (input.value != "") {
        const x = input.value.split(' ');
        console.log(x[1]);
        if (x[1] != undefined && cv[x[1]] != undefined) {
            const p1 = document.createElement('p');
            p1.innerText = cv[x[1]];
            div.append(p1);
        } else {
            const p1 = document.createElement('p');
            p1.innerText = "This command is not currently available.Still working on it."
            div.append(p1);
        }
    }
    li.appendChild(div);
    input.value = "";
    ul.appendChild(li);
}