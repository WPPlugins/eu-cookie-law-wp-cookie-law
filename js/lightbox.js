( function( $ ) {

$( function() {
  $( '.aleu-lightbox-optin' ).each( function() {
    var optin = $( this )
    window.setTimeout( function() {
      optin.dialog( {
        draggable: false,
        modal: true,
        width: 640
      } );
    }, 100 );
  } );
} );

} )( jQuery );
