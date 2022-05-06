# Pre-requisites
- [VSCode](https://code.visualstudio.com/)
- [NodeJS](https://nodejs.dev/download/)
- [Git](https://git-scm.com/downloads)

# Steps in learning NodeJS

## Learn the following concepts from vanilla Javascript
1. Lexical Structure
	- Unicode: In Javascript you can use different languages, and emojis as variable names, except for some the following:
		- [Reserved words](https://www.w3schools.com/js/js_reserved.a)
		- Non-reserved words that act like reserved words (NaN, Infinity, undefined)
		- [Valid identifier names](https://developer.mozilla.org/en-US/docs/Glossary/Identifier)
	- Semicolons: For Javascript these are optional, and is up to the developer to add at the end of each statement or not.
	- White space: For Javascript these has less meaning, and again is up to the developer to create their own standard.
	- Case sensitive: 'A' and 'a' acts as different variables.
	- Comments: Uses the following syntax.
	``` javascript
	/* */
	//
	```
	- Literals and Identifiers: 
		- Literals: Values that are declared in the source code.
		- Identifier: Sequence of characters that identify a variable, function, or an object.
2. [Operators and Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
	- Assignment operators
	- Comparison operators
	- Arithmetic operators
	- Bitwise operators
	- Logical operators
	- String operators
	- Conditionl (ternary) operator
	- Comma operator
	- Unary operators
	- Relational operators
3. [Data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
	- Data types
		- Primitive values
			- Boolean type
			- Null type
			- Undefined type
			- Number type
			- BigInt type
			- String type
			- Symbol type
		- Objects
		- Functions
	- Data property
		- [[Value]]: Any Javascript type
		- [[Writable]]: Boolean
		- [[Enumerable]]: Boolean
		- [[Configurable]]:Boolean
		- Read-only
		- DontEnum
		- DontDelete
	- Accessor property
		- [[Get]]: Function object or undefined
		- [[Set]]: Function object or undefined
		- [[Enumerable]]: Boolean
		- [[Configurable]]: Boolean
	- Dates
	- Indexed collections: Arrays and typed Arrays
		- Typed arrays
			- Int8Array
			- Uint8Array
			- Uint8ClampedArray
			- Int16Array
			- Uint16Array
			- Int32Array
			- Float32Array
			- Float64Array
			- BigInt64Array
			- BigUint64Array
	- Keyed collections: Maps, Sets, WeakMaps, WeakSets
	- Structured data: JSON
4. [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
	- Defining classes
		- Class declarations
		```javascript
		class Person {
		
			constructor(name, age) {
				this.name = name;
				this.age = age;
			}
		}
		```
		- Hoisting: Classses must be defined before being constructed.
		```javascript
		class Person {
			// insert code here
		}
		
		const p = new Person();
		```
		- Class expressions: Named classes can access the name via 'name' property.
		
		```javascript
		let Person = class {
			constructor(name, age) {
				this.name = name;
				this.age = age;
			}
		}
		console.log(Person.name); //Person
		
		let Person = class Kenny{
			constructor(name, age) {
				this.name = name;
				this.age = age;
			}
		}
		console.log(Person.name); //Kenny
		```
	- Class body and method definition
		- [Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode): Helps usbject codes to stricter syntax for better performance
		```javascript
			'use strict'
			// insert statement here. 
		```
		- Constructor 
		```javascript
		class Student {
			constructor() {
				this.name = 'Kenny';
				this.age = 27;
			}
		}

		const student = new Student();

		console.log(student.name); //Kenny
		console.log(student.age); //27
		```
		- [Static initialization blocks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_static_initialization_blocks): Static blocks allow statements to be evaluated during initialization
		```javascript
		class A {
			static A = 'a';
			static B;
			static {
				this.B = 'b';
			}
		}
		  
		console.log(A.A);
		// output: "a"
		console.log(A.B);
		// output: "b"
		```
		- [Prototype methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions): Functions assigned to method names.
		```javascript
		const Person = {
			greet() {
				return 'Hey there';
			}
		};

		console.log(Person.greet());
		```
		- **[Generator methods]https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators): Need to review.**
		- Static methods and properties: Called without instantiating their class. Cannot be called through a class instance.)
		```javascript
		class Person {
			constructor(name, age) {
				this.name = name;
				this.age = age;
			}
			
			static displayClassName = "Person";
			static age_gap(a, b) {
				let gap = a.age - b.age;
				return gap;
			}
		}
			
		const p = new Person("Kenny", 27);
		const p2 = new Person("Will", 20);

		console.log(p.birthday); // undefined
		console.log(p2.birthday); // undefined
		console.log(Person.age_gap(p,p2)); // 7
		```
		- **[Binding 'this' with prototype and static method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#binding_this_with_prototype_and_static_methods): Need to review**
		- Instance properties: Must be defined inside a class method.
		```javascript
		class Person {
			constructor(name, age) {
				this.name = name;
				this.age = age;
			}
		}
		```
	- Field Declarations
		- Public field declarations: Can be used by all.
		```javascript
		class Person {
			height = 0;
			width;
			constructor(name, age) {
				this.name = name;
				this.age = age;
			}
		}
		```
		- Private field declarations Can only be used within the class.
		```javascript
		class Person {
			#height = 0;
			#width;
			constructor(name, age) {
				this.name = name;
				this.age = age;
			}
		}
		```
	- Sub classing with 'extends'
		- Function-based
		```javascript
		class Person {
			constructor(name) {
				this.name = name;
			}
			
			greet() {
				console.log(`${this.name} says hello!`);
			}	
		}

		class Developer extends Person {
			constructor(name) {
				// gets parent class' constructor arguments (in this case 'name')
				super(name);
			}
			
			greet() {
				console.log(`${this.name} messaged hello on Google spaces`);
			}
		}

		let p = new Developer('Kenny');
		p.greet(); // Kenny messaged hello on Google spaces
		```
		   
		```javascript
		class Person {
			constructor(name) {
				this.name = name;
			}
		}
		
		Person.prototype.greet = function () {
			console.log(`${this.name} says hello!`);
		}

		class Developer extends Person {
			constructor(name) {
				// gets parent class' constructor arguments (in this case 'name')
				super(name);
			}
			
			greet() {
				console.log(`${this.name} messaged hello on Google spaces`);
			}
		}

		let p = new Developer('Kenny');
		p.greet(); // Kenny messaged hello on Google spaces
		```
		- Species: Extend [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
		```javascript
		class KennyArray extends Array {
			// Overwrite species to the parent Array constructor
			static get [Symbol.species]() { return Array; }
		}

		let a = new KennyArray(1,2,3);
		let mapped = a.map(x => x * x);

		console.log(mapped instanceof KennyArray); // false
		console.log(mapped instanceof Array);   // true
		```
	- Super class calls with ['super'](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super): Gets parent class' constructor arguments.
	```javascript
	class Person {
		constructor(name) {
			this.name = name;
		}
		
		greet() {
			console.log(`${this.name} says hello!`);
		}	
	}

	class Developer extends Person {
		constructor(name) {
			super(name);
		}
		
		greet() {
			console.log(`${this.name} messaged hello on Google spaces`);
		}
	}

	let p = new Developer('Kenny');
	p.greet(); // Kenny messaged hello on Google spaces
	```
	- **[Mix-ins](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#mix-ins): Class templates, need to review**
	- Re-running a class definition: Creating a class with the same name would cause a 'SyntaxError'.
		
5. [Variables](https://www.w3schools.com/js/js_variables.asp)
```javascript
// declaring variables
var x = 1;
let y = 1;
const z = 1; // cannot be changed

// using underscores is a convention to declare private/hidden variables
let _a = 1;

// re-assigning variable value
x = 1; 
```
- [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#calling_functions)
	- Defining functions
		- Function declarations
		```javascript
		function fn(parameter) {
			return parameter;
		}
		```
		- Function expressions
		```javascript
		// anonymous function
		const fn = function(parameter) {
			return parameter;
		}
		
		var call_fn = fn(11);//11
		```
		
		```javascript
		const fn = function fn_name(parameter) {
			return parameter;
		}
		
		var call_fn = fn(11); //11
		```
		
		```javascript
		function main_fn(fn, parameter){
			// fn(5) will return 6, + parameter = 5
			add_passed_parameters = fn(5) + parameter;
			return add_passed_parameters;
		}

		const passed_fn = function fn_name(parameter) {
			return parameter + 1;
		}

		var call_fn = main_fn(passed_fn, 5);
		console.log(call_fn); //11
		```
	- Calling functions
	```javascript
	function fn(parameter) {
		return parameter;
	}
	
	// calling function
	fn(11);
	```
	
	```javascript
	// recursive function from 11 to 0
	function fn(parameter) {
		if(parameter >= 0) 
			return 0;
		else
			return fn(parameter) - 1;
	}

	fn(11); // 0
	```
	
	- Function scope
	```javascript
	// global variable
	let global_name = "Kenny";
	
	// global function
	function global_fn() {
		return global_name;
	}
	
	console.log(global_fn()); //Kenny
	
	// nested function
	function nested_fn() {
		let global_name = "Nested Kenny"
		
		function local_fn() {
			return global_name;
		}
		
		return local_fn();
	}
	
	console.log(nested_fn()); //Nested Kenny
	
	```
	- Scope and the function stack
		- Recursion: Can be called by the following:
			```javascript
			let fn = function fn_name() {
				// statements go here
			}
			```
			- The function's name: fn_name()
			- arguments.callee()
			- An in-scope variable that refers to the function: fn()
		- Nested functions and closures
		```javascript
		function outer_fn(outer) {
					
			function inner_fn(inner) {
				return outer + inner;
			}
			
			return inner_fn;
		}

		set_outer_fn = outer_fn(5);//sets outer function to always have the parameter 5
		call_inner_fn = set_outer_fn(6);//11

		call_fn = outer_fn(5)(6); //11

		console.log(call_inner_fn);
		console.log(call_fn);
		```
		- Preservation of variables: On the example above, the 'outer' parameter's value is preserved while calling 'inner_fn' function.
		- Multiply-nested functions
		```javascript
		function A(x) {
			function B(y) {
				function C(z) {
					console.log(x + y + z);
				}
				C(3);
			}
			B(2);
		}
		A(1); // logs 6 (1 + 2 + 3)
		```
		- Name conflicts: Inner most scope takes precedence upon name duplication.
		```javascript
		function outer_fn() {
			var parameter = 5;
			function inner_fn(parameter) {
				return parameter * 2;
			}
			return inner_fn;
		}

		outer_fn()(10); // returns 20 from 'inner_fn'
		```
	- Closures
	```javascript
	
	function outer_fn(outer) {
			
		// 'inner_fn' has access to the 'outer' variable
		// 'inner_fn' can't be diretly called outside becuse of 'outer_fn'
		function inner_fn(inner) {
			return outer + inner; 
		}
		
		// returning 'inner_fn' exposes it outside 'outer_fn' scope
		return inner_fn;
	}

	set_outer_fn = outer_fn(5);//sets outer function to always have the parameter 5
	call_inner_fn = set_outer_fn(6);//11

	call_fn = outer_fn(5)(6); //11

	console.log(call_inner_fn);
	console.log(call_fn);
	```
	```javascript
	var createPerson = function(name) {
		let job;
		
		return {
			setName: function(newName) {
				name = newName;
			},
			getName: function() {
				return name;
			},
			getJob: function() {
				return job;
			},
			setJob: function(newJob) {
				job = newJob;
			},
		}
	}

	let person = createPerson("Kenny");
	person.getName(); //Kenny

	person.setName("Will");
	person.getName(); // Will
	person.setJob("Developer");
	person.getJob(); // Developer
	```
	- Using the arguments object: Maintained in an array-like object.
	```javascript
	arguments[i];
	```
	- Function parameters
		- Default parameters: Parameters always starts as 'undefined'.
		- Without default parameters (pre-ECMAScript 2015)
		```javascript
		function greet(name) {
			name = typeof name !== 'undefined'? name:"Kenny";
			return name;
		}
		```
		- With default parameters (post-ECMAScript 2015)
		```javascript
		function greet(name = "Kenny") {
			return name;
		}
		```		
		- [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters):Allows indefinite amounts of arguments.
		```javascript
		function sum(parameter, ...theArgs) {
			return theArgs.map(arg => parameter + arg);
		}

		let array = sum(1,2,3,4,5); //[3,4,5,6]
		console.log(array);
		```	
	- Arrow functions
		- Shorter functions
		```javascript
		let non_arrow = function(parameter) {
			// insert statements here.
		}
		
		let arrow = arr_parameter => {
			// insert statements here.
		}		
		```
		- No separate 'this'
		```javascript
		let non_arrow = function(parameter) {
			// insert statements here.
		}
		
		let arrow = arr_parameter => {
			// insert statements here.
		}		
		```
	- Predefined functions
	```javascript
	function Person() {
		const self = this;
		
		self.age = 0;
		
		setInterval(function growUp() {
			self.age++;
		} , 1000);
	}
	
	```
- [Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#labeled_statement)
	- 'for' statement
	```javascript
	for (let i = 0; i < 5; i++) {
		console.log(`iterate: ${i}`);
	}
	```
	- 'do...while' statement
	```javascript
	do {
		// insert statement here
	} while(condition)
	```
	- 'while' statement
	```javascript
	while(condition) {
		// insert statement here
	}
	```
	- 'labeled' statement
	```javascript
	label:
		statement
	```
	- 'break' statement
	```javascript
	break;
	break [label];
	```
	- 'continue' statement
	```javascript
	continue;
	continue [label];
	```
	- 'for...in' statement: iterates a specified variable over all the enumerable properties of an object
	```javascript
	for (variable in object) {
		// insert statement here
	}
	```
	- 'for...of' statement: Loop iterating over iterable objects (including Array, Map, Set, arguments object and so on)
	```
	for (variable of object){
		// insert statement here
	}
  ```
- [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
	- **Examples (Will populate these)**
		- Creating an array
		- Create a string from an array
		- Access an array item by index
		- Find the index of an item in an array
		- Check if an array contains a certain item
		- Append an item to an array
		- Remove the last item from an array-like
		- Remove multiple items from the end of an array
		- Truncate an array down to just its fist N items
		- Remove the first item from an array
		- Remove multiple items from thr beginning of an array-like
		- Add a new first item to an array
		- Remove a single item by index
		- Remove multiple items by index
		- Replace multiple items in an array
		- Iterate over an array
		- Call a function on each element in an array
		- Merge multiple arrays together
		- Copy an array
		- Grouping the elements of an array
	- **Advanced examples (Will populate these)**
		- Creating a two-dimensional array
		- Using an array to tabulate a set of values
	- Notes
		- Relationship between length and numerical properties
		- Creating an array using the result match
- [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
```javascript
// wrapping strings in ``(backticks) and calling variable with ${} within the backticks.
let name = "Kenny"
let greet = `Hello ${name}!`
console.log(greet); //Hello Kenny!
```
- ECMAScript 6, 2016, 2017

# NodeJS Concepts
1. NodeJS basics
	- How to run NodeJS via CLI.
	- How to exit from NodeJS app in CLI.
2. Reading environment variables.
	- Bash
	- Javascript
	- .env file
	- .env file in Javascript
3. NodeJS REPL (Read-Eval-Print-Loop)
	- Get arguments from CLI
4. NodeJS I/O
	- Output from CLI
	- Input from CLI
5. Module
	- Import modules
	- Export modules
6. NPM (Node Package Manager)
	- Installing all dependecies
	- Installing a single package
	- Updating packages
	- Versioning
	- Running Tasks
7. Packages
	- package.json
	- package-lock.json
	- Check nstalled version of NPM package
	- Install an older version of NPM package
	- Update all NPM packages to latest
	- Semantic versioning
	- Uninstall NPM package
	- Global or local
	- Dependencis, and dev dependecies
	- NPX package runner
8. Event loop
	- process.nextTick()
	- setImmediate()
	- Javascript timers
		- setTimeout()
		- Zero delay
		- setInterval()
		- Recursive setTimeout()
	- **[Javascript Asynchronous Programming (Callbacks)](https://nodejs.dev/learn/javascript-asynchronous-programming-and-callbacks)**: Need to review.
		- Asynchronicity in Programming Languages
		- Javascript
		- Callbacks
		- Error handling on callbacks
		- Limitations on callbacks
		- Alternatives to callbacks
	- **[Javascript Promises](https://nodejs.dev/learn/understanding-javascript-promises)**: Need to review.
		- Creating a promise
		- Consuming a promise
		- Chaining promises
		- Handling error
		- Cascading errors
		- Orchetrating promises
			- Promise.all()
			- Promise.race()
			- Promise.any()
	- Modern Asynchronous Javascript with Async and Await
		- Example
		- Multiple asyn funtions in series
	- **[Event Emitter](https://nodejs.dev/learn/the-nodejs-event-emitter)**: Need to review
	- Building an HTTP server
		- Get request
		- Post request
		- Put request
		- Delete request
	- Get HTTP request body data
	- File system module
		- **[File descriptors](https://nodejs.dev/learn/working-with-file-descriptors-in-nodejs)**: Need to review
		- File stat()
		- Reading files
		- Writing files
			- Write
			- Append
	- Paths
		- dirname
		- basename
		- extname
	- Folders
		- Check if folder exists
		- Create a new folder
		- Read the content of directory
		- Rename a folder
		- Remove a folder
	- [Filesystem module](https://nodejs.dev/learn/the-nodejs-fs-module): Traverses file system.
	- [Path module](https://nodejs.dev/learn/the-nodejs-path-module): Parses paths.
	