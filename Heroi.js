class Heroi {
    constructor(Nome, idade, tipo) {
        this.Nome = Nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

let novoHeroi = new Heroi("Vini", 22, "mago");


for (let i = 1; i <= 3; i++) { 
    console.log(`Ataque ${i}:`);
    novoHeroi.atacar();
}
