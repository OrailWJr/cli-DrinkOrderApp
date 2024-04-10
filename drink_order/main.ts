import { input, select } from '@inquirer/prompts';
import { BeverageSize, BeverageType, Drink } from './utils';


console.log('welcome to The beverage shack')
const getName = async () => {
   return await input({ message: 'Can I get a name for your order?'}) 
}
const getDrinkType = async () => {
    return  await  select({ message: "What type of drink would you like?", choices: [
        {
            name: BeverageType.coffee,
            value: BeverageType.coffee,
            description: 'The shit that makes crackheads'
        },
        {
            name: BeverageType.orangejuice,
            value: BeverageType.orangejuice,
            description: 'Floridas finest'
        },
        {
            name: BeverageType.tea,
            value: BeverageType.tea,
            description: 'Mint tea is the best'
        },
        {
            name: BeverageType.libations,
            value: BeverageType.libations,
            description: 'Shots, shots, shots'
        }
    ]});
}

const getDrinkSize = async () => {
    return  await  select({ message: "What size drink would you like?", choices: [
        {
            name: BeverageSize.small,
            value: BeverageSize.small,
            description: 'Tthe one you dont want'
        },
        {
            name: BeverageSize.medium,
            value: BeverageSize.medium,
            description: 'This is 16 oz cup'
        },
        {
            name: BeverageSize.large,
            value: BeverageSize.large,
            description: 'Standard large 32 oz'
        },
        {
            name: BeverageSize.doubleUp,
            value: BeverageSize.doubleUp,
            description: 'Super Large drink, double shots of good stuff'
        }
    ]});
}

const closeDrinkPromise = async () => {
    const customerFinalDrink = await getDrinkType();
    const customerDrinkSize = await getDrinkSize()
    const cDrink = new Drink(customerFinalDrink, customerDrinkSize)
    console.log(`Hey ${await getName()}, your  ${cDrink.getSize()} ${cDrink.getType()} is ready. Thank you for stopping by today`)
}
// getName();
closeDrinkPromise();
// console.log('What kind of drink would you like?')
// console.log()
// const customerDrink = input({ message: BeverageType})
