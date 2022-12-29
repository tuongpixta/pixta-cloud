function postToGoogle() {
  var nameVal = $('#name').val();
  var companyVal = $('#company').val();
  var emailVal = $('#email').val();
  var messageVal = $('#message').val();

  $.ajax({
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSfWJclw_NvasyQhMYe-wcR4Hb3_VTnaKKYeT1bO7NdUgB1NDw/formResponse',
    data: {
      'entry.1144370362': nameVal,
      'entry.719743602': companyVal,
      'entry.1380366076': emailVal,
      'entry.849207910': messageVal,
    },
    type: 'GET',
    dataType: 'jsonp',
    crossDomain: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    jsonpCallback: 'handleResponse',
    success: function (d) {
      alert('success!', d);
    },
    error: function (error) {
      console.log(error);
    },
  });
  return false;
}
function handleResponse(response) {
  console.log(response);
}
