const app = Vue.createApp({
    data() {
      return {
        number: '',
        numeroAleatorio: this.randomNumber(),
        attempts: 10,
        result: '',
        guesses: []
      }
    },
    methods:{
        randomNumber(){
            return Math.floor(Math.random() * 101);
        },
        guessNumber(){
            console.log(this.numeroAleatorio)
            
            this.guesses.push(this.number)
            this.attempts--

            if (this.number == this.numeroAleatorio) {
                this.result = "You guessed correctly!"
                this.newGame
            }else if (this.number > this.numeroAleatorio){
                this.number = ''
                this.result = "Too High! Try again!"
            }else if (this.number < this.numeroAleatorio){
                this.number = ''
                this.result = "Too low! Try again!"
            }
        },
        newGame(){
            window.location.reload()
            this.number = ''
            this.result = ''
            this.guesses = []
            this.attempts = 10
        }
    }
})

app.mount('#wrapper')