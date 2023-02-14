const findTheOldest = function(people) {

  // console.log(people[0].yearOfDeath);

  people.sort((personOne, personTwo) => {
    // for second test add a yearOfDeath to currentYear using JS Date function
    // and then.. use existing if/else math
    if (personOne.yearOfDeath === undefined) {
      personOne.yearOfDeath =  new Date().getFullYear();
      console.log(personOne.yearOfDeath.toString());
    } 

    if (personTwo.yearOfDeath === undefined) {
      personTwo.yearOfDeath = new Date().getFullYear();
      console.log(personTwo.yearOfDeath.toString());
    }

    let personOneAge = personOne.yearOfDeath - personOne.yearOfBirth;
    let personTwoAge = personTwo.yearOfDeath - personTwo.yearOfBirth;

    // console.log(`person name: ${personOne.name} person one is: ${personOneAge}`);
    // console.log(`person name: ${personTwo.name} person two is: ${personTwoAge}`);

    if (personOneAge > personTwoAge) {
      return -1; // this means person one goes before person two (i.e.: person 1 is older)
    } else if (personOneAge < personTwoAge) { // this means person one goes AFTER person two (i.e.: person 2 is older)
      return 1;
    } else { // they're the same age, don't do anything
      return 0;
    }
  });

  console.log(people);
  return people.at(0);
  /*
  0 [carly, ray, jane]
  1 [ray, carly, jane]
  2 [jane, ray, carly]
  */
};

// Do not edit below this line
module.exports = findTheOldest;
