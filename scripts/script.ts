const animalsListContainer = document.getElementById("content")

class Animal {
    constructor(public name: string, public gender: string, public size: string, public age: number, public vaccine: boolean, public image: string) {
    }
    display() { // ④
        animalsListContainer.innerHTML += `
            <div class="col mb-4">
                <div class="card shadow-lg animate__animated animate__fadeIn">
                    <img class="card-img-top" src="${this.image}"alt="${this.name}">
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <div class="float-left">
                            <span>Gender: </span>
                            <span>${this.gender}</span><br>
                            <span>Age: </span>
                            <span>${this.age}</span><br>
                            <span>Size: </span>
                            <span>${this.size}</span>
                        </div>
                        ${this.vaccine ? '<div class="vaccBtn my-1 p-1 rounded text-white text-center">Vaccine</div>' : '<div class="vaccBtn my-1 p-1 rounded text-white text-center">Vaccine</div>'}
                    </div>
                </div>
            </div>
        `
    }       
}

class Cat extends Animal {
    constructor(public name: string, public gender: string, public size: string, public age: number, public vaccine: boolean, public image: string, public breed: string, public furcolor: string, public URLbreed: string) {
        super(name, gender, size, age, vaccine, image)
    }
    display() {
        animalsListContainer.innerHTML += `
            <div class="col mb-4">
                <div class="card shadow-lg animate__animated animate__fadeIn">
                    <img class="card-img-top" src="${this.image}"alt="${this.name}">
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <div class="float-left">
                            <span>Gender: </span>
                            <span>${this.gender}</span><br>
                            <span>Age: </span>
                            <span>${this.age}</span><br>
                            <span>Size: </span>
                            <span>${this.size}</span>
                        </div>
                        ${this.vaccine ? '<div class="vaccBtn my-1 p-1 rounded text-white text-center">Vaccine</div>' : '<div class="vaccBtn my-1 p-1 rounded text-white text-center">Vaccine</div>'}
                        <div class="float-left">
                            <span>Breed: </span>
                            <span>${this.breed}</span><br>
                            <span>Furcolor: </span>
                            <span>${this.furcolor}</span><br>
                            <span>Breed info: </span>
                            <a href="${this.URLbreed}">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

class Dog extends Animal {
    constructor(public name: string, public gender: string, public size: string, public age: number, public vaccine: boolean, public image: string, public breed: string, public training: boolean) {
        super(name, gender, size, age, vaccine, image)
    }
    display() {
        animalsListContainer.innerHTML += `
            <div class="col mb-4">
                <div class="card shadow-lg animate__animated animate__fadeIn">
                    <img class="card-img-top" src="${this.image}"alt="${this.name}">
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <div class="float-left">
                            <span>Gender: </span>
                            <span>${this.gender}</span><br>
                            <span>Age: </span>
                            <span>${this.age}</span><br>
                            <span>Size: </span>
                            <span>${this.size}</span>
                        </div>
                        ${this.vaccine ? '<div class="vaccBtn my-1 p-1 rounded text-white text-center">Vaccine</div>' : '<div class="vaccBtn my-1 p-1 rounded text-white text-center">Vaccine</div>'}
                        <div class="float-left">
                            <span>Breed: </span>
                            <span>${this.breed}</span><br>
                            <span>Training: </span>
                            <span>${this.training}</span><br>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

var animal1 = new Animal("Cheeks", "female", "small", 1, true, "https://media.dehner.de/new_ads_main/dehner-polyresinhamster/6706055_WE_FS_001_DehnerHamster.jpg")
var animal2 = new Animal("Bacon", "female", "medium", 2, false, "https://images.gutefrage.net/media/fragen/bilder/baby--bzw-minischweine-besuchen/0_full.jpg")
var cat1 = new Cat("Kili", "male", "small", 6, true, "img/kili.jpg", "Unknown", "white", "https://en.wikipedia.org/wiki/Persian_cat")
var cat2 = new Cat("Fluffi", "male", "small", 4, true, "https://i0.wp.com/www.justagric.com/wp-content/uploads/2022/01/how-much-do-persian-cats-weigh.jpg", "Persian Cat", "white", "https://en.wikipedia.org/wiki/Persian_cat")
var dog1 = new Dog("Gerhard", "male", "large", 7, true, "https://cf.ltkcdn.net/dogs/images/orig/284637-1600x1066-german-shepherd-characteristics.jpg", "German Shepherd", true)
var dog2 = new Dog("Baraby", "male", "medium", 10, false, "https://cdn.britannica.com/05/30105-004-644BE36D.jpg", "Bulldog", true)

const animalsList = []
animalsList.push(animal1)
animalsList.push(cat1)
animalsList.push(dog1)
animalsList.push(animal2)
animalsList.push(cat2)
animalsList.push(dog2)
console.table(animalsList)

const displayAnimals = () => {
    for(var i = 0; i< Animal.length; i++) {
        animalsList[i].display()
    }
}
displayAnimals ()

const setVacc = () => {
    const vaccBtns = document.querySelectorAll(".vaccBtn")
    for(var i = 0; i < animalsList.length; i++) {
        if (animalsList[i].vaccine) {
            var icon = document.createElement("i")
            icon.className = "vaccIcon ps-2 bi bi-patch-check"
            vaccBtns[i].appendChild(icon)
        } else {
            vaccBtns[i].classList.add("notVacc")
            var icon = document.createElement("i")
            icon.className = "vaccIcon ps-2 bi bi-patch-minus"
            vaccBtns[i].appendChild(icon)
        }
        
    }
}

setVacc()

const changeVacc = () => {
    const icon = document.querySelectorAll(".vaccIcon")
    const vaccBtns = document.querySelectorAll(".vaccBtn")
    vaccBtns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            animalsList[i].vaccine = !animalsList[i].vaccine
            btn.classList.toggle("notVacc")
            if (animalsList[i].vaccine) {
                icon[i].className = "vaccIcon ps-2 bi bi-patch-check"
            } else {
                icon[i].className = "vaccIcon ps-2 bi bi-patch-minus"
            }
        })
    })
}

changeVacc()

const sortAnimals = () => {
    animalsListContainer.innerHTML = ""
    var icon = document.getElementById("sortIcon")

    if (icon.className === "bi bi-sort-up") {
        icon.className = "bi bi-sort-down"
        animalsList.sort(function (a, b) {
            return b.age - a.age
        })
    } else {
        icon.className = "bi bi-sort-up"
        animalsList.sort(function (a, b) {
            return a.age - b.age
        })
    }
    displayAnimals ()
    setVacc()
    changeVacc()
}