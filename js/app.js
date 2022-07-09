// an array for user_names
let user_names = [`sam`,`nav`,`tom`,`jag`,`raj`,`doug`,`ali`,`rock`,`kane`,`brock`];
// an array for user_ages
let user_ages = [10,12,22,55,11,40,35,16,15,20];
// variable counter will help us counting through the arrays above
let counter = 0;
// while loop will check the condition for entire user ages array
while(counter < user_ages.length){
    // if loop will check if user age is above 18 or equal to 18.
    if(user_ages[counter] >= 18){
        // it will print the users that are above 18 with their names
        console.log(user_ages[counter],user_names[counter]);
    }
    // counter will keep on adding 1 until it looks for every number .
    counter = counter +1;
}
// counter is set to 0
counter = 0;
// for loop will check for user name under 18
for (counter = 0; counter < user_ages.length; counter++){
    // if statement will check the user age for under 18 users
    if(user_ages[counter] <= 18){
        //this console.log will display user under 18 and their actual age
        console.log(user_ages[counter],user_names[counter]);
    }
}