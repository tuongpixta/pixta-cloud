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
    type: 'POST',
    dataType: 'xml',
    success: function (d) {
      alert('success!', d);
    },
    error: function (x, y, z) {
      console.log(x, y, z);
    },
  });
  return false;
}
