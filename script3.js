//Multi-Dimentional Array

const activities =  [
                        ["Work", 9],
                        ["Eat", 1],
                        ["Commute", 2],
                        ["Play Game", 1],
                        ["Sleep", 7]
                    ];

//Accessing Multi-Dimentional Array
// console.log(activities[1][0]);


//Adding Elements on Multi-Dimentional Array
activities.push(["Study", 2])

//Insert an Element in the middle of the Array and also can remove some element inside the Array
activities.splice(1, 0, ["Programming", 1])

//calculates the percentage of the hours spent on each activity and appends the percentage to the inner array.
activities.forEach((activity) => {
    let percentage = ((activity[1] /24) * 100).toFixed();
    activity[2] = `${percentage}%`;
})

//Removing Elements in Multi-Dimentional Array / can also use splice to remove
// activities.pop();
// activities.splice(1, 2)

//remove the elements from the inner array of the multidimensional array by using the pop() method.
// activities.forEach((activity) => {
//     activity.pop()
// })

//Iterating over elements of the JavaScript multidimensional array using Loop
for( let i = 0; i < activities.length; i++ ){
    
    for(let j = 0; j < activities[i].length; j++){
        console.log(`${i} ${j} = ${activities[i][j]}`);
    }
}

//Iterating over elements of the JavaScript multidimensional array using forEach
activities.forEach((activity) => {
    activity.forEach((data) => {
        console.log(data)
    })
})

//Sorting From [1] index
const hrs = activities.sort((a, b) => {
    return a[1]-b[1]
})

console.log(hrs)