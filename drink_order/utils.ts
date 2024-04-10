export enum BeverageType{
    coffee = 'coffee', 
    tea = 'tea', 
    orangejuice = 'orange Juice',
    libations = 'Adult libations'
}

export enum BeverageSize{
    small = 'small',
    medium = 'medium',
    large = 'large',
    doubleUp = 'doubleUp'
}
export class Drink{
    type: BeverageType
    size: BeverageSize

    constructor(type: BeverageType, size: BeverageSize){
        this.type = type;
        this.size = size;
    }
    getType(){
        return this.type
    }
    getSize(){
        return this.size
    }
}

