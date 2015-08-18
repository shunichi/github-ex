
$input = $('#pull_request_title');
if ($input.length > 0) {
  $input.val( '[review] ' + $input.val() );
}
