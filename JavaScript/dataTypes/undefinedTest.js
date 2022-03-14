//  DON'T DO THIS

//  logs "foo string"

(function() {
    var undefined = 'foo';
    console.log(undefined, typeof undefined);
  })();
  
  //  logs "foo string"
  (function(undefined) {
    console.log(undefined, typeof undefined);
  })('foo');

//===================================================================================================

// If we defined an varibable but not initilize it
var x;
if (x === undefined) {
  // these statements execute
  console.log('if: x is undefined ');
}
else {
  // these statements do not execute
  console.log('else ');
}

//===================================================================================================
//  y has not been declared before

if (typeof y === 'undefined') { //  evaluates to true without errors
   // these statements execute
  console.log(' if ');
}

//but below code will throws(throws a ReferenceError)

// if (y === undefined) { //  throws a ReferenceError

// }

//===================================
if ('y' in globalThis) {
    //  these statements execute only if x is defined globally
    console.log("If 'y' is in globalThis");
  }else{
    console.log("If 'y' is not inglobalThis"); 
  }

//===================================

var z;
console.log(z === void 0); //void 0 will also return undefined

//===================================

//  a has not been declared before
if (a === void 0) {
    //  throws Uncaught ReferenceError: y is not defined
  }