const event= require('events')
const util = require('util')

class Emitter extends event.EventEmitter{

}

let receiver = {
    start: function(arg){
        console.log("Event " + arg)
    },
    single: function(arg){
        console.log('Single ' + arg)
    },
    finish: function(){
        console.log('Finish')
    }

}

const emitter = new Emitter()
const startListener = (arg) => receiver.start(arg)
//dodanie słuchacza dla zdarzenia start
emitter.on('start', startListener);
//inna metoda dodawania słuchacza dla zdarzenia
emitter.addListener('finish', (arg) => receiver.finish())
//dodanie jednokrotnego słuchacza dla zdarzenia single
emitter.once('single', (arg) => receiver.single(arg))
//wygenerowanie zdarzenia
emitter.emit('start', 'STARTING')
//ponowne zdarzenie
emitter.emit('start', 'STARTING AGAIN')
//zdarzenie jednokrotne, powinno wygenerować reakcję
emitter.emit('single', "Once start")
//to zdarzenie nie zostanie już zgłoszone, bo jest typu once
emitter.emit('single', "Once start")
//usunięcie słuchacza dla zdarzenia start
emitter.removeListener('start', startListener);
emitter.emit('start',"once again")

emitter.emit('finish',null)
