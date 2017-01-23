/* -------------------------------------------------- */
/* DECLARE VARS */
/* -------------------------------------------------- */
var ENDPOINTS = {
    users: 'http://jsonplaceholder.typicode.com/users/',
    posts: 'http://jsonplaceholder.typicode.com/posts/'
};

var users = [];
var posts = [];



/* -------------------------------------------------- */
/* DECLARE FUNCTIONS */
/* -------------------------------------------------- */
function fetchUsers( num ) {
    console.log( 'INSIDE `fetchUsers()`' );

    return new Promise( function( resolve, reject ) {
        fetch( ENDPOINTS.users )
            .then(
                function( response ) { resolve( response.json() ); },
                function( error ) { reject( error ); }
            );
    } );
    
}

function handleUserData( data ) {
    users = data;
}

function fetchPosts() {
    console.log( 'INSIDE `fetchPosts()`' );

    return new Promise( function( resolve, reject ) {
        fetch( ENDPOINTS.posts )
            .then(
                function( response ) { resolve( response.json() ); },
                function( error ) { reject( error ); }
            );
    } );
}

function handlePostData( data ) {
    posts = data;
}

function handleError( error ) {
    console.error( error );
}



/* -------------------------------------------------- */
/* DO PROGRAM */
/* -------------------------------------------------- */
fetchUsers()
    .then( handleUserData )
    .then( fetchPosts )
    .then( handlePostData )
    .catch( handleError );
