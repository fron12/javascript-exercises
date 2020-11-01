let findTheOldest = function(peopleArray) {
    // Return the object that contains the oldest person. yearOfDeath - yearOfBirth
    // One of the tests checks for people with no death-date.. 
    // use JavaScript's Date function to get their age as of today.

    let oldestPerson = peopleArray.reduce((eldest, person) => {
        if(!person.yearOfDeath) {
            let thisDate = new Date();
            let thisYear = thisDate.getFullYear();
            person.yearOfDeath = thisYear;
        }
        let yearsLived = person.yearOfDeath - person.yearOfBirth;
        let eldestYearsLived = eldest.yearOfDeath - eldest.yearOfBirth;
        if(!person.yearsLived) {
            person.yearsLived = yearsLived;
        }
        if((eldestYearsLived < yearsLived)){
            eldest = person;
        }
        return eldest;
    }, { name: 'initial', yearOfBirth: 0, yearOfDeath: 0})
    return oldestPerson;
}

module.exports = findTheOldest
