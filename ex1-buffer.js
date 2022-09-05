//bufora na podstawie łańcucha
const word = Buffer.from('dąb', 'utf-8')
//długość bufora to liczba bajtów a nie znaków!!!
console.log(word.length)
//zawartość bufora jako bajty w kodzie hex
console.log(word)
//można zmienia wartość dowolnego bajtu
word[3] = 0x73
//zawartość bufora w postaci łańcucha
console.log(word.toString())
//bufor można iterować foreach
for(let code of word){
    console.log(code)
}
//tworzenie bufora kodowanego w base64 i odkodowanie do postaci tekstowej
const creditials = Buffer.from('ADAM 1%$', 'ascii')
const creditialsInBase64 = creditials.toString('base64')
console.log(creditialsInBase64)
const decoded = Buffer.from(creditialsInBase64, 'base64')
console.log(decoded.toString('ascii'))

