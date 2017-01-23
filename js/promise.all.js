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