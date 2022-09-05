module.exports = {
    hello: function (){
        return this.message.toUpperCase()
    },
    message: "Hello World"

}

module.exports.MyEmail = class Email{
    #from
    #to
    #subject
    #content

    constructor(from, to, subject, content){
        this.#to = to
        this.#from = from
        this.#subject = subject
        this.#content = content
    }

    format(){
        return `from: ${this.#from}, to: ${this.#to}, subject: ${this.#subject}, content: ${this.#content}`
    }
}

function add(a, b) {
    return a + b
}

module.exports.add = add