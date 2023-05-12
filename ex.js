let partCode = "ACE:1-12";

function parseProductCode(code){
    let pos = code.indexOf(":");
    let supplier = code.substring(0, pos);

    let pos1 = code.indexOf(":")
    let pos2 = code.indexOf("-");
    let productNumber = code.substring(pos1+1, pos2);

    let pos3 = code.indexOf("-")
    let size = code.substring(pos3+1);

    let part1 = {
        supplier: supplier,
        productNumber: productNumber,
        size: size
    };

    return part1;
    
}

let part1 = parseProductCode(partCode);

console.log("Supplier: " + part1.supplier +
" Product Number: " + part1.productNumber +
" Size: " + part1.size);
let label = {
names: "Jeff Jefferson",
address: "123 Street Road",
city: "VillageTown",
state: "Oklahoma",
zip: "15151"
};

function printContact(){
console.log(label.names);
console.log(label.address);
console.log(label.city + ", " + label.state + " " + label.zip);
}

printContact(label);
