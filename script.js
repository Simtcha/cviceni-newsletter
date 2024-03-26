/*
V CSS si vytvořte třídu, která dělá výrazný červený rámeček kolem textového políčka.
Přidejte na textové políčko posluchač události input.
Během toho, jak uživatel píše, kontrolujte, jestli náhodou políčko není prázdné. 
V takovém případě na políčko přidejte třídu s červeným rámečkem. Pokud je vstup v pořádku, rámeček odeberte.
Zobrazte červený rámeček i v případě, že zadaný e-mail neobsahuje zavináč. K tomu můžete použít metodu indexOf nebo includes.
*/


const formular = document.querySelector("#newsletter-reg")
const emailik = document.querySelector("#email")


const redFrame = (event) => {
    if (event.target.value === "" || !event.target.value.includes('@')) {
        emailik.classList.add("ramecek")
    } else {
        emailik.classList.remove("ramecek")
    }
} 

const newMessage = (event) => {
    event.preventDefault()
    const oznameni = document.querySelector("#news")
    const oznameni2 = document.querySelector("#news2")
    oznameni.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${emailik.value}`
    oznameni2.textContent = ``
}

emailik.addEventListener("input", redFrame) 
formular.addEventListener("submit", newMessage) 


/*
const redFrame = () => {
    const emailikValue = emailik.value;
    if (emailikValue === "" || !emailikValue.includes('@')) {
        emailik.classList.add("ramecek");
    } else {
        emailik.classList.remove("ramecek");
    }
} */


