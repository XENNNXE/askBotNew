const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")
let init = 0
const botSay = (data) => {
    return [
        "hallo perkenalkan saya ardibot, siapa nama kamu?",
        `Halo ${data?.nama}, berapa usia kamu?`,
        `wihh ${data?.usia} tahun,btw hobi kamu apa?`,
        `sama dong aku juga hobi ${data?.hobi}, btw punya pacar ga?`,
        `oalahhh ${data?.pacar}, yahh yauda klo gitu udahan yah?`,
    ]
}

pertanyaan.innerHTML = botSay()[0]

let userData = []

function botStart() {
    if (jawaban.value.length < 1) return alert ("silahkan isi jawaban dulu")
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value })
    } else if (init === 2) {
        botDelay({ usia: jawaban.value })
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value })
    } else if (init === 4) {
        botDelay({ pacar: jawaban.value })
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
}



function botDelay(jawabanUser) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
    loaders.style.display = "none"
    container[0].style.filter = "none"
    },[1000])
    userData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `makasih ${userData[0]} udah mampirr`
    jawaban.value = "SIAP THANKS JUGA"
}

function botEnd() {
    alert (`terima kasih ${userData[0]} sudah berkunjung}`)
    window.location.reload()
}