// Function Declaration
function SomeThing(a, b, c = "Hello") {
	if (arguments.length == 0){
		return console.log("До побачення");
	}
	a += 1
	b += 1
	c += "Drug";
	return console.log(a), console.log(b), console.log(c)
  alert( "Привет" );
}

// Function Expression
let SomeThingElse = function() {
  alert( "Привет" );
};

SomeThing(3, 4);
SomeThingElse()