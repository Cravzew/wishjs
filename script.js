let legendary = [
    {
        rare: '★★★★★',
        name: 'Нилу',
        type: './element/gidro.png',
        art: './char/nilou.png'
    },
    {
        rare: '★★★★★',
        name: 'Джинн',
        type: './element/anemo.png',
        art: './char/jean.png'
    },
    {
        rare: '★★★★★',
        name: 'Дилюк',
        type: './element/pyro.png',
        art: './char/diluc.png'
    },
    {
        rare: '★★★★★',
        name: 'Кэ Цин',
        type: './element/electro.png',
        art: './char/keqing.png'
    },
    {
        rare: '★★★★★',
        name: 'Мона',
        type: './element/gidro.png',
        art: './char/mona.png'
    },
    {
        rare: '★★★★★',
        name: 'Тигнари',
        type: './element/dendro.png',
        art: './char/tignari.png'
    },
    {
        rare: '★★★★★',
        name: 'Ци Ци',
        type: './element/cryo.png',
        art: './char/qiqi.png'
    },
]

let epic = [
    {
        rare: '★★★★',
        name: 'Сиканоин Хейдзо',
        type: './element/anemo.png',
        art: './char/haizhou.png'
    },
    {
        rare: '★★★★',
        name: 'Меч Фавоний',
        type: './element/sword.png',
        art: './weapon/favsword.png'
    },
    {
        rare: '★★★★',
        name: 'Бесструнный',
        type: './element/bow.png',
        art: './weapon/stringles.png'
    },
    {
        rare: '★★★★',
        name: 'Черногорская бритва',
        type: './element/claymore.png',
        art: './weapon/slasher.png'
    },
    {
        rare: '★★★★',
        name: 'Дори',
        type: './element/electro.png',
        art: './char/dori.png'
    },
    {
        rare: '★★★★',
        name: 'Лайла',
        type: './element/cryo.png',
        art: './char/layla.png'
    },
]

let blue = [
    {
        rare: '★★★',
        name: 'Чёрная кисть',
        type: './element/polearm.png',
        art: './weapon/blackt.png'
    },
    {
        rare: '★★★',
        name: 'Дубина переговоров',
        type: './element/claymore.png',
        art: './weapon/debatc.png'
    },
    {
        rare: '★★★',
        name: 'Меч небесного всадника',
        type: './element/sword.png',
        art: './weapon/skyriders.png'
    },
    {
        rare: '★★★',
        name: 'Рогатка',
        type: './element/bow.png',
        art: './weapon/slingshot.png'
    },
    {
        rare: '★★★',
        name: 'Изумрудный шар',
        type: './element/catalyst.png',
        art: './weapon/emeraldo.png'
    },
]

let wish = document.getElementById('wish')
let skip = document.getElementById('skip')
let img = document.getElementById('img')
let nameChar = document.getElementById('name-char')
let rare = document.getElementById('rare')

wish.addEventListener('click', () => {
    let random = Math.round(Math.random() * 100);
    if (random <= 13) {
        let num = Math.round(Math.random() * (legendary.length - 1))
        nameChar.textContent = legendary[num].name
        rare.textContent = legendary[num].rare
        type.src = legendary[num].type
        img.src = legendary[num].art
    } else if (random <= 26) {
        let num = Math.round(Math.random() * (epic.length - 1))
        nameChar.textContent = epic[num].name
        rare.textContent = epic[num].rare
        type.src = epic[num].type
        img.src = epic[num].art
    } else {
        let num = Math.round(Math.random() * (blue.length - 1))
        nameChar.textContent = blue[num].name
        rare.textContent = blue[num].rare
        type.src = blue[num].type
        img.src = blue[num].art
    }
})

skip.addEventListener('click', () => {
    nameChar.textContent = ''
    rare.textContent = ''
    type.src = ''
    img.src = ''
})