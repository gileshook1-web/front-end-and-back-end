const fruitsArray = require ('../fruits.json')

class FruitsModel {
    constructor(fruit){
        this.genus = fruit.genus;
        this.name - fruit.name;
        this.id = fruit.id;
        this.family = fruit.family;
        this.order = fruit.order;
        this.nutritions = fruit.nutritions;
    }

    static showAllFruits(){
        return fruitsArray.map(f => new FruitsModel(f))
    }
        static showFruit(name) {
            const fruits = fruitsArray.filter(fruit => 
                fruit.name.toLowerCase().startsWith(name.toLowerCase()))
        
        if (fruits.length > 0) {
            return fruits.map(f => new FruitsModel(f))
        } else {
            throw "No fruits found with that name"
        }
    }
    static create(data){
        const newFruit = data;
        console.log(newFruit) // this is only for debugging

        newFruit["id"] = fruitsArray.length + 1;

        fruitsArray.push(newFruit);

        return new FruitsModel(newFruit)
    }

    update(data) {
        const updateFruit = fruitsArray.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())
        if(updateFruit){
            updateFruit.name = data.name
            return new FruitsModel(updateFruit)
    } else {
        throw "Fruit not found"
    }
    }




}
module.exports = FruitsModel
