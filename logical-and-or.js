let temp = 80

// Logical And Operator - True if both sides are true, False otherwise.
// Logical Or Operator - True if atleast one side is true, False otherwise.
if(temp >= 60 && temp <= 90){
console.log('It is pretty nice outside!')
}else if(temp <= 0 || temp >= 120){
    console.log('Do not go outside!')
}else{
console.log('Do what you want!')
}

let isGuestOneVegan = true
let isGuestTwoVegan = false

if(isGuestOneVegan && isGuestTwoVegan){
    console.log('Only offer up vegan dishes.')
}else if(isGuestOneVegan || isGuestTwoVegan){
    console.log('Make sure to offer up some vegan options')
}else{
    console.log('Offer up anthing on the menue.')
}