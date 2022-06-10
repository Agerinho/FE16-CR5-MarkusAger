var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var animalsListContainer = document.getElementById("content");
var Animal = /** @class */ (function () {
    function Animal(name, gender, size, age, vaccine, image) {
        this.name = name;
        this.gender = gender;
        this.size = size;
        this.age = age;
        this.vaccine = vaccine;
        this.image = image;
    }
    Animal.prototype.display = function () {
        animalsListContainer.innerHTML += "\n            <div class=\"col mb-4\">\n                <div class=\"card shadow-lg animate__animated animate__fadeIn\">\n                    <img class=\"card-img-top\" src=\"".concat(this.image, "\"alt=\"").concat(this.name, "\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">").concat(this.name, "</h5>\n                        <div class=\"float-left\">\n                            <span>Gender: </span>\n                            <span>").concat(this.gender, "</span><br>\n                            <span>Age: </span>\n                            <span>").concat(this.age, "</span><br>\n                            <span>Size: </span>\n                            <span>").concat(this.size, "</span>\n                        </div>\n                        ").concat(this.vaccine ? '<div class="vaccBtn my-1 p-1 rounded text-white text-center">Vaccine</div>' : '<div class="vaccBtn my-1 p-1 rounded text-white text-center">Vaccine</div>', "\n                    </div>\n                </div>\n            </div>\n        ");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, gender, size, age, vaccine, image, breed, furcolor, URLbreed) {
        var _this = _super.call(this, name, gender, size, age, vaccine, image) || this;
        _this.name = name;
        _this.gender = gender;
        _this.size = size;
        _this.age = age;
        _this.vaccine = vaccine;
        _this.image = image;
        _this.breed = breed;
        _this.furcolor = furcolor;
        _this.URLbreed = URLbreed;
        return _this;
    }
    Cat.prototype.display = function () {
        animalsListContainer.innerHTML += "\n            <div class=\"col mb-4\">\n                <div class=\"card shadow-lg animate__animated animate__fadeIn\">\n                    <img class=\"card-img-top\" src=\"".concat(this.image, "\"alt=\"").concat(this.name, "\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">").concat(this.name, "</h5>\n                        <div class=\"float-left\">\n                            <span>Gender: </span>\n                            <span>").concat(this.gender, "</span><br>\n                            <span>Age: </span>\n                            <span>").concat(this.age, "</span><br>\n                            <span>Size: </span>\n                            <span>").concat(this.size, "</span>\n                        </div>\n                        ").concat(this.vaccine ? '<div class="vaccBtn my-1 p-1 rounded text-white text-center">Vaccine</div>' : '<div class="vaccBtn my-1 p-1 rounded text-white text-center">Vaccine</div>', "\n                        <div class=\"float-left\">\n                            <span>Breed: </span>\n                            <span>").concat(this.breed, "</span><br>\n                            <span>Furcolor: </span>\n                            <span>").concat(this.furcolor, "</span><br>\n                            <span>Breed info: </span>\n                            <a href=\"").concat(this.URLbreed, "\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ");
    };
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, gender, size, age, vaccine, image, breed, training) {
        var _this = _super.call(this, name, gender, size, age, vaccine, image) || this;
        _this.name = name;
        _this.gender = gender;
        _this.size = size;
        _this.age = age;
        _this.vaccine = vaccine;
        _this.image = image;
        _this.breed = breed;
        _this.training = training;
        return _this;
    }
    Dog.prototype.display = function () {
        animalsListContainer.innerHTML += "\n            <div class=\"col mb-4\">\n                <div class=\"card shadow-lg animate__animated animate__fadeIn\">\n                    <img class=\"card-img-top\" src=\"".concat(this.image, "\"alt=\"").concat(this.name, "\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">").concat(this.name, "</h5>\n                        <div class=\"float-left\">\n                            <span>Gender: </span>\n                            <span>").concat(this.gender, "</span><br>\n                            <span>Age: </span>\n                            <span>").concat(this.age, "</span><br>\n                            <span>Size: </span>\n                            <span>").concat(this.size, "</span>\n                        </div>\n                        ").concat(this.vaccine ? '<div class="vaccBtn my-1 p-1 rounded text-white text-center">Vaccine</div>' : '<div class="vaccBtn my-1 p-1 rounded text-white text-center">Vaccine</div>', "\n                        <div class=\"float-left\">\n                            <span>Breed: </span>\n                            <span>").concat(this.breed, "</span><br>\n                            <span>Training: </span>\n                            <span>").concat(this.training, "</span><br>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ");
    };
    return Dog;
}(Animal));
var animal1 = new Animal("Cheeks", "female", "small", 1, true, "https://media.dehner.de/new_ads_main/dehner-polyresinhamster/6706055_WE_FS_001_DehnerHamster.jpg");
var animal2 = new Animal("Bacon", "female", "medium", 2, false, "https://images.gutefrage.net/media/fragen/bilder/baby--bzw-minischweine-besuchen/0_full.jpg");
var cat1 = new Cat("Kili", "male", "small", 6, true, "/img/kili.jpg", "Unknown", "white", "https://en.wikipedia.org/wiki/Persian_cat");
var cat2 = new Cat("Fluffi", "male", "small", 4, true, "https://i0.wp.com/www.justagric.com/wp-content/uploads/2022/01/how-much-do-persian-cats-weigh.jpg", "Persian Cat", "white", "https://en.wikipedia.org/wiki/Persian_cat");
var dog1 = new Dog("Gerhard", "male", "large", 7, true, "https://cf.ltkcdn.net/dogs/images/orig/284637-1600x1066-german-shepherd-characteristics.jpg", "German Shepherd", true);
var dog2 = new Dog("Baraby", "male", "medium", 10, false, "https://cdn.britannica.com/05/30105-004-644BE36D.jpg", "Bulldog", true);
var animalsList = [];
animalsList.push(animal1);
animalsList.push(cat1);
animalsList.push(dog1);
animalsList.push(animal2);
animalsList.push(cat2);
animalsList.push(dog2);
console.table(animalsList);
var displayAnimals = function () {
    for (var i = 0; i < Animal.length; i++) {
        animalsList[i].display();
    }
};
displayAnimals();
var setVacc = function () {
    var vaccBtns = document.querySelectorAll(".vaccBtn");
    for (var i = 0; i < animalsList.length; i++) {
        if (animalsList[i].vaccine) {
            var icon = document.createElement("i");
            icon.className = "vaccIcon ps-2 bi bi-patch-check";
            vaccBtns[i].appendChild(icon);
        }
        else {
            vaccBtns[i].classList.add("notVacc");
            var icon = document.createElement("i");
            icon.className = "vaccIcon ps-2 bi bi-patch-minus";
            vaccBtns[i].appendChild(icon);
        }
    }
};
setVacc();
var changeVacc = function () {
    var icon = document.querySelectorAll(".vaccIcon");
    var vaccBtns = document.querySelectorAll(".vaccBtn");
    vaccBtns.forEach(function (btn, i) {
        btn.addEventListener("click", function () {
            animalsList[i].vaccine = !animalsList[i].vaccine;
            btn.classList.toggle("notVacc");
            if (animalsList[i].vaccine) {
                icon[i].className = "vaccIcon ps-2 bi bi-patch-check";
            }
            else {
                icon[i].className = "vaccIcon ps-2 bi bi-patch-minus";
            }
        });
    });
};
changeVacc();
var sortAnimals = function () {
    animalsListContainer.innerHTML = "";
    var icon = document.getElementById("sortIcon");
    if (icon.className === "bi bi-sort-up") {
        icon.className = "bi bi-sort-down";
        animalsList.sort(function (a, b) {
            return b.age - a.age;
        });
    }
    else {
        icon.className = "bi bi-sort-up";
        animalsList.sort(function (a, b) {
            return a.age - b.age;
        });
    }
    displayAnimals();
};
