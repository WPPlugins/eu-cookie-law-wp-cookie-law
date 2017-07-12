( function( $ ) {

$( function() {
  $( 'input.color[name^=aleu_settings]' ).each( function() {
    var picker = $( '<div>' ).insertAfter( this );
    $.farbtastic( picker ).linkTo( this );
  } );

} );

} )( jQuery );
