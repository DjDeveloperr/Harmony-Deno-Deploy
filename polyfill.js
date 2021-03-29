if (typeof Deno === 'undefined') {
  window.Deno = {};
}

if (typeof Deno.errors === 'undefined') {
  Deno.errors = {
    UnexpectedEof: Error,
  };
}