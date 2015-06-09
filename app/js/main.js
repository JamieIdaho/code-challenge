/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////                                                             ////
////      _____              __               __                 ////
////     / ___/__  ___  ___ / /_______ ______/ /____  _______    ////
////    / /__/ _ \/ _ \(_-</ __/ __/ // / __/ __/ _ \/ __(_-<    ////
////    \___/\___/_//_/___/\__/_/  \_,_/\__/\__/\___/_/ /___/    ////
////                                                             ////
////                                                             ////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////

// 1. ------------------------------------------------------------ //
var Foo = function(options) {
  var args = options || {};
  this.name = args.name;
  this.job = args.job;
};

var foo = new Foo ({name: "Roger", job: "accountant"});

// Create a simple constructor function called `Foo` and create a new
// instance from it called `foo`.

// -- â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ - Your Answer - â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ -- //


// -- â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ -- //

// ==== Validating =============================================== //

console.assert(foo instanceof Foo);

// --------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// 2. ------------------------------------------------------------ //

var Dog = function(options) {
  var args = options || {};
  this.says = 'life is ruff';
};
// Create a constructor function called `Dog` that sets a property
// on itself within the constructor. The property should be called
// `says` and the value should be `life is ruff`

// -- â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ - Your Answer - â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ -- //


// -- â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ -- //

// ==== Validating =============================================== //

console.assert(new Dog().says === "life is ruff");

// --------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// 3. ------------------------------------------------------------ //

var Cat = function(options) {
  var args = options || {};
};

Cat.prototype.growl = function() {
    return "meow";
  };

var cat = new Cat();

// Create a constructor function called `Cat` that has a method on
// it's prototype called `growl` that returns the string `meow`.
// create an instance of this called `cat`

// -- â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ - Your Answer - â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ -- //


// -- â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ -- //

// ==== Validating =============================================== //

console.assert(cat instanceof Cat);
console.assert(cat.growl() === "meow");

// --------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// 4. ------------------------------------------------------------ //

var KeepSecret = function(options) {
  var args = options || {};
  this.secret = args.secret;
};

KeepSecret.prototype.squeal = function(x) {
    return this.secret;
  };

// Create a constructor called `KeepSecret`. The constructor function
// itself should accept a parameter called `secret` it should store
// this in a private variable (use a closure). Add a method to the
// prototype that is called `squeal` that returns the secret string.

// -- â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ - Your Answer - â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ -- //


// -- â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ -- //

// ==== Validating =============================================== //

var mySecret = "My class rocks!";
var dontTellNobody = new KeepSecret({secret: mySecret});
console.assert(dontTellNobody.squeal() === mySecret);

// --------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// 5. ------------------------------------------------------------ //

// Create a constructor called `Key`. Create another constructor
// called `Safe`. Make the Safe constructor take 2 arguments. The
// first argument can be any piece if data to keep safe. This must
// be stored using a private variable like you did with KeepSecret.
// The 2nd param to the `Safe` constructor needs to be an instance
// of `Key` you need to store it privately as well. Add a function
// to the Safe prototype called `unlock` that accepts a key. If the
// key matches the key that was used to create the Safe; then return
// the secret data.

// -- â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ - Your Answer - â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ â†“ -- //

var Key = function() {

};

var Safe = function(a,b) {
  this.secret = a;
  this.key = b;
};

Safe.prototype.unlock = function(key) {
  if (key === this.key) {
    return this.secret;
  }
};


// -- â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ â†‘ -- //

// ==== Validating =============================================== //

var sensitive = "shhhhh!";
var rightKey  = new Key();
var wrongKey  = new Key();
var safe      = new Safe(sensitive, rightKey);

console.assert(safe.unlock(wrongKey) !== sensitive);
console.assert(safe.unlock(rightKey) === sensitive);

// --------------------------------------------------------------- //
