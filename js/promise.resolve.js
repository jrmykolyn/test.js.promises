// Providing a 'non-Promise' value will immediately trigger the `resolve` handler
// function in the chained `.then()` method.
var myNum = 42;

Promise.resolve( myNum )
    .then(
        function( response ) {
            console.log( 'INSIDE `resolve` HANDLER FOR `myNum`' );
            console.log( response );
        },
        function( error ) {
            console.log( 'INSIDE `reject` HANDLER FOR `myNum`' );
            console.log( error );
        }
    );



var myBool = false;

Promise.resolve( myBool )
    .then(
        function( response ) {
            console.log( 'INSIDE `resolve` HANDLER FOR `myBool`' );
            console.log( response );
        },
        function( error ) {
            console.log( 'INSIDE `reject` HANDLER FOR `myBool`' );
            console.log( error );
        }
    );



var promiseWillSucceed = new Promise( function( resolve, reject ) {
    setTimeout( function() {
        resolve( 'This promise was automatically resolved from within the `executor` function.' );
    }, 3000 );
} );

Promise.resolve( promiseWillSucceed )
    .then(
        function( response ) {
            console.log( 'INSIDE `resolve` HANDLER FOR `promiseWillSucceed`' );
            console.log( response );
        },
        function( error ) {
            console.log( 'INSIDE `reject` HANDLER FOR `promiseWillSucceed`' );
            console.log( error );
        }
    );



var promiseWillFail = new Promise( function( resolve, reject ) {
    setTimeout( function() {
        reject( 'This promise was automatically rejected from within the `executor` function.' );
    }, 3000 );
} );

Promise.resolve( promiseWillFail )
    .then(
        function( response ) {
            console.log( 'INSIDE `resolve` HANDLER FOR `promiseWillFail`' );
            console.log( response );
        },
        function( error ) {
            console.log( 'INSIDE `reject` HANDLER FOR `promiseWillFail`' );
            console.error( error );
        }
    );