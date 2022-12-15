var studentArr = [
    {
        name: "Syed Akif Zaidi",
        rolNam: "02468",
        age: 21
    },
    {
        name: "Syed Ayaan Zaidi",
        rolNam: "09878",
        age: 22
    },
    {
        name: "Syed Shazil Zaidi",
        rolNam: "08765",
        age: 23
    },
    {
        name: "Syed Hudaib Zaidi",
        rolNam: "03245",
        age: 24
    },
    {
        name: "Mustafa",
        rolNam: "05467",
        age: 25
    },
    {
        name: "Ibad",
        rolNam: "07658",
        age: 26
    },
    {
        name: "Hamza",
        rolNam: "05647",
        age: 27
    },
    {
        name: "Ali",
        rolNam: "09873",
        age: 28
    },
    {
        name: "Sharoz",
        rolNam: "08795",
        age: 29
    },
    {
        name: "Hasnain",
        rolNam: "02468",
        age: 21
    }
];
var objInput = document.getElementById("objInput")
var renderArea = document.getElementById("renderArea")
var renderArea2 = document.getElementById("renderArea2")
var renderArea3 = document.getElementById("renderArea3")
function Search() {
    for (i = 0; i < studentArr.length; i++) {
        if (objInput.value == studentArr[i].name || objInput.value == studentArr[i].rolNam || objInput.value == studentArr[i].age){
            renderArea.innerHTML = studentArr[i].name;
            renderArea2.innerHTML = studentArr[i].age;
            renderArea3.innerHTML = studentArr[i].rolNam;
            objInput.value = ""

        }
    }
}