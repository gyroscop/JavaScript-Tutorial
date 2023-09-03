/* 
1. Primitive data types are stored in stack memory
2. Non-primitive data types are stored in heap memory
3. In stack memory any new assignments result into assignment into a copy of original data , so any change in any of the variable changes the relative data ,not the original data
4. In heap memory any new assignments result into a new pointer pointing into the data, so any change in any of the variable changes the original data

*/

/// stack memory

str1 = "Dibya Jyoti Sarmah";
str2 = str1;
// console.log(`First value of str2 : ${str2}`);

str2 = "Dibya Jyoti Saikia";

// console.log(`Second value of str2 : ${str2}`);

// console.log(`value of str1 : ${str1}`);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

///heap memory

let location_preference = {
  First: "Bangaluru",
  Second: "Kolkata",
};

//console.log(location_preference.First);

let location_preference_2 = location_preference;

console.log(location_preference_2.First);

location_preference_2.First = "Pune";

console.log(location_preference_2.First);

console.log(location_preference.First);
