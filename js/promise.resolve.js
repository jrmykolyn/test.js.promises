var promiseWillFail = new Promise( function( resolve, reject ) {
    setTimeout( function() {
        reject( 'This promise was automatically failed.' );
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