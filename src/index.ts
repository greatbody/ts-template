class Roy {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    play = () => {
        console.log(`Hi, I am ${this.name}, I am ${this.age} years old`);
    };
}

const roy = new Roy("Roy", 57);

roy.play();
