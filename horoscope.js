const month1 = document.querySelector('#fortune1')
const month2 = document.querySelector('#fortune2')
const month3 = document.querySelector('#fortune3')
const month4 = document.querySelector('#fortune4')
const month5 = document.querySelector('#fortune5')
const month6 = document.querySelector('#fortune6')
const month7 = document.querySelector('#fortune7')
const month8 = document.querySelector('#fortune8')
const month9 = document.querySelector('#fortune9')
const month10 = document.querySelector('#fortune10')
const month11 = document.querySelector('#fortune11')
const month12 = document.querySelector('#fortune12')

document.querySelector('#monthNext1').addEventListener('click', month1Revealed)
document.querySelector('#monthNext2').addEventListener('click', month2Revealed)
document.querySelector('#monthNext3').addEventListener('click', month3Revealed)
document.querySelector('#monthNext4').addEventListener('click', month4Revealed)
document.querySelector('#monthNext5').addEventListener('click', month5Revealed)
document.querySelector('#monthNext6').addEventListener('click', month6Revealed)
document.querySelector('#monthNext7').addEventListener('click', month7Revealed)
document.querySelector('#monthNext8').addEventListener('click', month8Revealed)
document.querySelector('#monthNext9').addEventListener('click', month9Revealed)
document.querySelector('#monthNext10').addEventListener('click', month10Revealed)
document.querySelector('#monthNext11').addEventListener('click', month11Revealed)
document.querySelector('#monthNext12').addEventListener('click', month12Revealed)

function month1Revealed(){
    month1.classList.toggle('hidden')
    month2.classList.add('hidden')
    month3.classList.add('hidden')
    month4.classList.add('hidden')
    month5.classList.add('hidden')
    month6.classList.add('hidden')
    month7.classList.add('hidden')
    month8.classList.add('hidden')
    month9.classList.add('hidden')
    month10.classList.add('hidden')
    month11.classList.add('hidden')
    month12.classList.add('hidden')
}

function month2Revealed(){
    month1.classList.add('hidden')
    month2.classList.toggle('hidden')
    month3.classList.add('hidden')
    month4.classList.add('hidden')
    month5.classList.add('hidden')
    month6.classList.add('hidden')
    month7.classList.add('hidden')
    month8.classList.add('hidden')
    month9.classList.add('hidden')
    month10.classList.add('hidden')
    month11.classList.add('hidden')
    month12.classList.add('hidden')
}

function month3Revealed(){
    month1.classList.add('hidden')
    month2.classList.add('hidden')
    month3.classList.toggle('hidden')
    month4.classList.add('hidden')
    month5.classList.add('hidden')
    month6.classList.add('hidden')
    month7.classList.add('hidden')
    month8.classList.add('hidden')
    month9.classList.add('hidden')
    month10.classList.add('hidden')
    month11.classList.add('hidden')
    month12.classList.add('hidden')
}

function month4Revealed(){
    month1.classList.add('hidden')
    month2.classList.add('hidden')
    month3.classList.add('hidden')
    month4.classList.toggle('hidden')
    month5.classList.add('hidden')
    month6.classList.add('hidden')
    month7.classList.add('hidden')
    month8.classList.add('hidden')
    month9.classList.add('hidden')
    month10.classList.add('hidden')
    month11.classList.add('hidden')
    month12.classList.add('hidden')
}

function month5Revealed(){
    month1.classList.add('hidden')
    month2.classList.add('hidden')
    month3.classList.add('hidden')
    month4.classList.add('hidden')
    month5.classList.toggle('hidden')
    month6.classList.add('hidden')
    month7.classList.add('hidden')
    month8.classList.add('hidden')
    month9.classList.add('hidden')
    month10.classList.add('hidden')
    month11.classList.add('hidden')
    month12.classList.add('hidden')
}

function month6Revealed(){
    month1.classList.add('hidden')
    month2.classList.add('hidden')
    month3.classList.add('hidden')
    month4.classList.add('hidden')
    month5.classList.add('hidden')
    month6.classList.toggle('hidden')
    month7.classList.add('hidden')
    month8.classList.add('hidden')
    month9.classList.add('hidden')
    month10.classList.add('hidden')
    month11.classList.add('hidden')
    month12.classList.add('hidden')
}

function month7Revealed(){
    month1.classList.add('hidden')
    month2.classList.add('hidden')
    month3.classList.add('hidden')
    month4.classList.add('hidden')
    month5.classList.add('hidden')
    month6.classList.add('hidden')
    month7.classList.toggle('hidden')
    month8.classList.add('hidden')
    month9.classList.add('hidden')
    month10.classList.add('hidden')
    month11.classList.add('hidden')
    month12.classList.add('hidden')
}

function month8Revealed(){
    month1.classList.add('hidden')
    month2.classList.add('hidden')
    month3.classList.add('hidden')
    month4.classList.add('hidden')
    month5.classList.add('hidden')
    month6.classList.add('hidden')
    month7.classList.add('hidden')
    month8.classList.toggle('hidden')
    month9.classList.add('hidden')
    month10.classList.add('hidden')
    month11.classList.add('hidden')
    month12.classList.add('hidden')
}

function month9Revealed(){
    month1.classList.add('hidden')
    month2.classList.add('hidden')
    month3.classList.add('hidden')
    month4.classList.add('hidden')
    month5.classList.add('hidden')
    month6.classList.add('hidden')
    month7.classList.add('hidden')
    month8.classList.add('hidden')
    month9.classList.toggle('hidden')
    month10.classList.add('hidden')
    month11.classList.add('hidden')
    month12.classList.add('hidden')
}

function month10Revealed(){
    month1.classList.add('hidden')
    month2.classList.add('hidden')
    month3.classList.add('hidden')
    month4.classList.add('hidden')
    month5.classList.add('hidden')
    month6.classList.add('hidden')
    month7.classList.add('hidden')
    month8.classList.add('hidden')
    month9.classList.add('hidden')
    month10.classList.toggle('hidden')
    month11.classList.add('hidden')
    month12.classList.add('hidden')
}

function month11Revealed(){
    month1.classList.add('hidden')
    month2.classList.add('hidden')
    month3.classList.add('hidden')
    month4.classList.add('hidden')
    month5.classList.add('hidden')
    month6.classList.add('hidden')
    month7.classList.add('hidden')
    month8.classList.add('hidden')
    month9.classList.add('hidden')
    month10.classList.add('hidden')
    month11.classList.toggle('hidden')
    month12.classList.add('hidden')
}

function month12Revealed(){
    month1.classList.add('hidden')
    month2.classList.add('hidden')
    month3.classList.add('hidden')
    month4.classList.add('hidden')
    month5.classList.add('hidden')
    month6.classList.add('hidden')
    month7.classList.add('hidden')
    month8.classList.add('hidden')
    month9.classList.add('hidden')
    month10.classList.add('hidden')
    month11.classList.add('hidden')
    month12.classList.toggle('hidden')
}