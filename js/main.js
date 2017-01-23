/* -------------------------------------------------- */
/* DECLARE VARS */
/* -------------------------------------------------- */
var request = new Promise( function( resolve, reject ) {
    setTimeout( function() {
        if ( Math.random() < 0.5 ) {
            resolve( 'Hooray! Looks like the request succeeded.' );
        } else {
            reject( 'Whoops! Looks like the request failed.' );
        }
    }, 1000 );
} );


/* -------------------------------------------------- */
/* DO PROGRAM */
/* -------------------------------------------------- */
// Call `.then()` method on `request` var. initialized above.
request.then(
    function( response ) {
        console.log( 'INSIDE `resolve` HANDLER' );
        console.log( response );
    },
    function( error ) {
        console.log( 'INSIDE `reject` HANDLER' );
        console.error( error );
    }
);

