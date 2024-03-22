
/*
const formular = document.querySelector("#registrace")

formular.addEventListener("submit", (event) => {
    event.preventDefault()
    const jmenoTxt = document.querySelector("#jmeno")
    const prijmeniTxt = document.querySelector("#prijmeni")
    alert(`Uzivatel ${jmenoTxt.value} ${prijmeniTxt.value} uspesne registrovan!`)
})*/





const elForm = document.querySelector("#newsletter-reg")
const oznameni = document.querySelector("#news")

elForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const emailEl = document.querySelector("#email")
    oznameni.innerHTML = `<p>Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${emailEl.value}</p>`
    
})




/*
elHeslo.addEventListener("input", (event) => {
8/


elHeslo.addEventListener("change", (event) => {
if(event.target.value.length < 8) {
console.log(`Heslo je kratke, pripis ${8 - event.target.value.length}`)
} else {
console.log("Heslo je zabezpecene")
}
})