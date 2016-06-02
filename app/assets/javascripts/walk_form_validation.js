function error_msg() {
  var error_arr = [];
  if ($('#form_city').val() == ''){
      error_arr.push('City cannot be blank');
  }

  if ($('#form_name').val() == ''){
     error_arr.push('Name cannot be blank');
  }

  if ($('#form_desc').val() == ''){
      error_arr.push('Description cannot be blank');
  }

  if (error_arr.length == 0) {
  return null;
  }
  
  return error_arr;
}
