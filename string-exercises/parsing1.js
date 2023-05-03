function myName(fullName) {
  //let fullName = "Zyaire Walker";
  let space = fullName.indexOf(" ");
  let firstName = fullName.substring(0, space);
  let lastName = fullName.substring(space + 1);
  console.log(`Name: ${fullName}`);
  console.log(`Name: ${firstName}`);
  console.log(`Name: ${lastName}`);
}
myName("Brenda Kaye");
myName("Ian Auston");
myName("Siddalee Grace");