function init() {
  const datepicker = document.getElementById('datepicker')
  const instances = M.Datepicker.init(datepicker, {
    autoClose: true,
    container: document.querySelector('.datepicker'),
    orientation: 'portrait',
  });
}

document.addEventListener('DOMContentLoaded', init)
