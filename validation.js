// Get all input elements
const inputs = document.querySelectorAll('input');

// Define patterns
const patterns = {
  // Username must be alphanumeric and contain 5 - 12 characters
  username: /^[a-z\d]{5,12}$/i,

  /*
   Email must be valid address, e.g. me@mydomain.com
   (): group
   []: 1 kys tự
   +: repeat 1 hoặc nhiều lần.
   ?: repeat 0 hoặc 1 lần.
   {2,8}: xuất hiện từ 2 đến 8 lần.
  */
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,

  // Password must alphanumeric (@, _ and - are also allowed) and be 8 - 20 characters
  password: /^[\w@-]{8,20}$/,

  // Telephone must be a valid UK telephone number (11 digits)
  telephone: /^\d{11}$/,

  // Slug must contain only lowercase letters, numbers, hyphens and be 8 - 20 characters
  profile_slug: /^[a-z\d-]{8,20}$/,
};

// Validation function
function validate(field, regex) {
  var isValid = regex.test(field.value);
  if (isValid) {
    field.classList.remove('invalid');
    field.classList.add('valid');
  } else {
    field.classList.remove('valid');
    field.classList.add('invalid');
  }
}

inputs.forEach( (input, key) => {
  input.addEventListener('keyup', e => {
    var inputTag = e.target;
    var inputName = e.target.name;
    var patternFieldName = patterns[inputName];
    if (patternFieldName != undefined) {
      validate(inputTag, patternFieldName);
    }
  });
} );
