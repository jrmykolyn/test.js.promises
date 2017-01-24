var myNum = 42;

Promise.reject( myNum )
    .then(
        function( response ) { 
            console.log( 'INSIDE `resolve` HANDER FOR `Promise.reject( myNum )`.' );
            console.log( response );
        },
        function( error) {
            console.log( 'INSIDE `reject` HANDER FOR `Promise.reject( myNum )`.' );
            console.error( error );
        }
    );



var myBool = false;

Promise.reject( myBool )
    .then(
        function( response ) { 
            console.log( 'INSIDE `resolve` HANDER FOR `Promise.reject( myBool )`.' );
            console.log( response );
        },
        function( error) {
            console.log( 'INSIDE `reject` HANDER FOR `Promise.reject( myBool )`.' );
            console.error( error );
        }
    );



var myRejectedPromise = new Promise( function( resolve, reject ) {
    reject( 'This promise was rejected immediately from within the `executor` function.' );
} );

Promise.reject( myRejectedPromise )
    .then(
        function( response ) {
            console.log( 'INSIDE `resolve` HANDLER FOR `Promise.reject( myRejectedPromise )`.' );
            console.log( response );
        },
        function( error ) {
            console.log( 'INSIDE `reject` HANDLER FOR `Promise.reject( myRejectedPromise )`.' );
            console.error( error );
        }
    );



var myResolvedPromise = new Promise( function( resolve, reject ) {
    resolve( 'This promise was resolved immediately from within the `executor` function.' );
} );


Promise.reject( myResolvedPromise )
    .then(
        function( response ) {
            console.log( 'INSIDE `resolve` HANDLER FOR `Promise.reject( myResolvedPromise )`.' );
            console.log( response );
        },
        function( error ) {
            console.log( 'INSIDE `reject` HANDLER FOR `Promise.reject( myResolvedPromise )`.' );
            console.error( error );
        }
    )