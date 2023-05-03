function myName(fullName) {
  //let fullName = "Zyaire Walker";
  if (
    fullName.indexOf(" ") > 0 &&
    fullName.lastIndexOf(" ") > fullName.indexOf(" ")
  ) {
    let space = fullName.indexOf(" ");
    let space2 = fullName.lastIndexOf(" ");
    let firstName = fullName.substring(0, space);
    let middleName = fullName.substring(space + 1, space2);
    let lastName = fullName.substring(space2 + 1);
    console.log(`Full Name: ${fullName}`);
    console.log(`First Name: ${firstName}`);
    console.log(`Middle Name: ${middleName}`);
    console.log(`Last Name: ${lastName}`);
  } else if (
    fullName.indexOf(" ") > 0 &&
    fullName.lastIndexOf(" ") == fullName.indexOf(" ")
  ) {
    let space = fullName.indexOf(" ");
    let firstName = fullName.substring(0, space);
    let lastName = fullName.substring(space + 1);
    console.log(`Full Name: ${fullName}`);
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
  } else {
    console.log(`Name: ${fullName}`)
    console.log(`Only Name: ${fullName}`);
  }
}

myName("Cher");
myName("Brenda Kaye");
myName("Dana Lynn Wyatt");
