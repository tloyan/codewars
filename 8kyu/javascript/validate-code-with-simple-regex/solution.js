function validateCode (code) {
  return !!code.toString().match(/^[123]/);
}