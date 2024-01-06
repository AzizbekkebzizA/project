const test=[
    ["Akmeologiya ilmiy ilk marotaba kim fanga kiritgan?","X.Shayxova","N.A.Ribnikov","B.G.Ananev"],
    ["Yetuklik davri qaysi davirga mos keladi?","10-14","20-25","18-20"],
    ["Akmealogiyada yuldizli onlar atamasini qaysi olim fanga kiritgan?","G.Tilayeva","N.V.kuzmina","X.Shayxova"],
    ["Akmeologiyada pedagogik refleksiya tushunchasi qanday manoni anglatadi?","Ortga nazar tashlash","Oldinga siljish","Yuksak maraga erishish"],
    ["Pedagogik akmealogiya fanida pedagogik refleksiyani turlari nechta?","3","5","4"],
    ["Akmealogiyada pedagog tomonidan ozini psixologik harakati va holatini tushinib yetish qanday nomlanadi?","Akme shaxs","Akme Tushunchasi","Refleksiya"],
    ["Shaxsning rivojlanishidagi choqi ramzi nima?","Muvozanat","Akme","Professionalik"],
    ["Akmeologiya fan sifatida ilk bor qachon tadbiq qilingan?","1928yil","1938yil","1918yil"],
    ["Akmeologiya fani nechta rivojlanish bosqichiga ega?","2","4","3"],
    ["Akmealogiyani rivojlanishidagi kambenation bosqich nechinchi bosqichga to'g'ri keladi?","1","2","3"],
];
function userProgress(time) {
    var start = 0;
    var time = Math.round(time * 1000 / 100);
    var progressElement = document.getElementById("user-progess");
    var width = 50;
    var intervalId = setInterval(function () {
        if (start >=100, width >=100) {
            clearInterval(intervalId);
            timeout();
        }
        else {
            progressElement.value = start;
            width++;
            progressElement.style.width = width + "%";
            progressElement.innerHTML = width + "%";
        }
        start++;
    }, time);
   width=0;
   start=0;
}
userProgress(31);
const testContent = document.querySelector(".test-content");
const checkBtn = document.querySelector(".check-btn");
const progressBar = document.querySelector(".progress-bar");
const correct = document.querySelector(".correct");
const incorrect = document.querySelector(".incorrect");
const mark = document.querySelector(".mark");
let myanswer = document.querySelector(".myanswer");
let s =0;
let loading = 0;
let j = 0, count = 0, answers = "ACABCABACB", checkCount = 0;
for (let i = 0; i < test.length; i++) {
    testContent.innerHTML += `
        <ul class="list-group">
        <li class="list-group-item active bg-gradient">
            <h4>${i + 1}-Savol</h4>
            <p>${test[i][j]}</p>
        </li>
        <li class="list-group-item vstack gap-3">
            <label class="form-check-label d-block" for="firstCheckbox">
                <input class="form-check-input me-1" type="radio" value="A" name="check${i}">
                A)${test[i][j + 1]}
            </label>
            <label class="form-check-label d-block" for="firstCheckbox">
                <input class="form-check-input me-1" type="radio" value="B" name="check${i}">
                B)${test[i][j + 2]}
            </label>
            <label class="form-check-label d-block" for="firstCheckbox">
                <input class="form-check-input me-1" type="radio" value="C" name="check${i}">
                C)${test[i][j + 3]}
            </label>
        </li>
    </ul>`
}


let val = false; const arr = [];

checkBtn.addEventListener('click', timeout);


function timeout() {
    for (let i = 0; i < test.length; i++) {
        let checkArr = document.querySelectorAll(`[type="radio"][name="check${i}"]`);
        for (let j = 0; j < checkArr.length; j++) {
            if (checkArr[j].checked) {
                checkCount++;
                checkArr.forEach(input => {
                    input.setAttribute('disabled', true);
                });
            }
        }
    }
    if (checkCount == 10) {
        for (let i = 0; i < test.length; i++) {
            let rigth = document.querySelector(`[type="radio"][name="check${i}"]:checked`);
            if (answers[i] == rigth.value) {
                count++;
                rigth.parentElement.classList.add("true");
            }
            else {
                rigth.parentElement.classList.add("false");
            }
        }
    }
    else {
        alert("Barcha savollarga javob bering!");
    }
    checkCount = 0;

    correct.innerText=count;
    incorrect.innerText=test.length - count; 
    s = count * 100/ test.length ;
    console.log(s + "%")


    if (s >= 0 && s < 56) {
        mark.innerText = "2 baho"
    }
    else {
        if (s > 56 && s < 72) {
            mark.innerText = " 3 baho "
        }
        else {
            if (s > 72 && s < 86) {
                mark.innerText = " 4 baho "
            }
            else {
                mark.innerText = " 5 baho "
            }
        }
    }
}