console.log('hELLO WORLD ')
const a= "abc"
console.log(a)
//degistirilmemeis gereken bilgiler sifre falan
let c=3
console.log(c)
//sonradan degisterebilirsin

c=1
console.log(c)


let username = "hakan"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN

// console.log("Merhaba", username, "sitemize hosgeldin", "mail adresin:", email)

let info = `
Merhaba ${username} sitemize hosgeldin.. 
mail adresin: ${email}

mail adresinin uzunlugu: ${email.length}
borcunuz: ${(2 + 3) * 10} TL
gunun saat bilgisi : ${new Date().getHours()}

kisa isminiz: ${username[0]}.
`

let dom=document.querySelector("#title")
dom.innerHTML="fatih"



console.log(info)