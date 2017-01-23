var promiseA1 = new Promise( function( resolve, reject ) {
    resolve( 'This promise was resolved immediately from within the `executor` function' );
} );

var promiseA2 = new Promise( function( resolve, reject ) {
    setTimeout( function() {
        resolve( 'This promise was resolved after 5s.' );
    }, 5000 );
} );

Promise.all( [ promiseA1, promiseA2 ] )
    .then(
        function( response ) {
            console.log( 'INSIDE `resolve` HANDLER FOR INITIAL `Promise.all()` INVOCATION.' );
            console.log( response );
        },
        function( error ) {
            console.log( 'INSIDE `reject` HANDLER FOR INITIAL `Promise.all()` INVOCATION.' );
            console.log( error );
        }
    );


// Test below examines the result of:
// - passing 2x promises to `Promise.all()`;
// - both promises are rejected;
// - one promise is rejected immediately, and the other is rejected after 5s.
var promiseB1 = new Promise( function( resolve, reject ) {
    setTimeout( function() {
        reject( 'This promise was rejected after 5s.' );
    }, 5000 )
} );

var promiseB2 = new Promise( function( resolve, reject ) {
    reject( 'This promise was rejected immediately from within the `executor` function.' );
} );

Promise.all( [ promiseB1, promiseB2 ] )
    .then(
        function( response ) {
            console.log( 'INSIDE `resolve` HANDLER FOR SECOND `Promise.all()` INVOCATION' );
            console.log( response );
        },
        function( error ) {
            console.log( 'INSIDE `reject` HANDLER FOR SECOND `Promise.all()` INVOCATION' );
            console.log( error );
        }
    );