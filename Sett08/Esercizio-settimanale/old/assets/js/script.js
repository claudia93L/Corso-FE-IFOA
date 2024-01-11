const btnEdit = document.getElementById('btn-edit');
const maturitySettings = document.getElementById('maturity-settings');

function enableButton() {
  maturitySettings.disabled = !maturitySettings.disabled;
  btnEdit.style.backgroundColor = 'var(--color-red)';
  btnEdit.style.color = 'var(--color-white)';
}
