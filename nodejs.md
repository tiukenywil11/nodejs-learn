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
		- Function expressions
	- Calling functions
	- Function scope
	- Scope and the function stack
		- Recursion
		- Nested functions and closures
		- Preservation of variables
		- Multiply-nested functions
		- Name conflicts
	- Closures
	- Using the arguments object
	- Function parameters
		- Default parameters
		- Without default parameters (pre-ECMAScript 2015)
		- With default parameters (post-ECMAScript 2015)
		- Rest parameters
	- Arrow functions
		- Shorter functions
		- No separate 'this'
	- Predefined functions
- Loops
- Scopes
- Arrays
- [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
```javascript
// wrapping strings in ``(backticks) and calling variable with ${} within the backticks.
let name = "Kenny"
let greet = `Hello ${name}!`
console.log(greet); //Hello Kenny!
```
- ECMAScript 6, 2016, 2017
