// main.js
document.addEventListener('DOMContentLoaded', () => {
  // year in footer
  const y = new Date().getFullYear();
  document.getElementById('year')?.textContent = y;
  document.getElementById('year2')?.textContent = y;

  // Masks: CPF, phone, CEP
  function setInputFilter(elem, func){
    elem.addEventListener('input', (e)=>{
      const old = elem.value;
      elem.value = func(elem.value);
    });
  }

  const cpf = document.getElementById('cpf');
  const phone = document.getElementById('phone');
  const cep = document.getElementById('cep');

  if(cpf){
    cpf.addEventListener('input', e=>{
      let v = cpf.value.replace(/\D/g,'');
      if(v.length > 11) v = v.slice(0,11);
      v = v.replace(/(\d{3})(\d)/,'$1.$2');
      v = v.replace(/(\d{3})\.(\d{3})(\d)/,'$1.$2.$3');
      v = v.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/,'$1.$2.$3-$4');
      cpf.value = v;
    });
  }

  if(phone){
    phone.addEventListener('input', e=>{
      let v = phone.value.replace(/\D/g,'');
      if(v.length > 11) v = v.slice(0,11);
      // (00) 00000-0000 or (00) 0000-0000
      v = v.replace(/^(\d{2})(\d)/,'($1) $2');
      v = v.replace(/(\d{5})(\d)/,'$1-$2');
      phone.value = v;
    });
  }

  if(cep){
    cep.addEventListener('input', e=>{
      let v = cep.value.replace(/\D/g,'');
      if(v.length > 8) v = v.slice(0,8);
      v = v.replace(/(\d{5})(\d)/,'$1-$2');
      cep.value = v;
    });
  }

  // form submit handling (HTML5 validation + visual)
  const signupForm = document.getElementById('signupForm');
  if(signupForm){
    signupForm.addEventListener('submit', (e)=>{
      if(!signupForm.checkValidity()){
        e.preventDefault();
        // focus first invalid
        const firstInvalid = signupForm.querySelector(':invalid');
        if(firstInvalid) firstInvalid.focus();
        alert('Corrija os campos destacados antes de enviar.');
      } else {
        // simulate successful submission
        e.preventDefault();
        alert('Cadastro enviado com sucesso — obrigado por ajudar!');
        signupForm.reset();
      }
    });
  }

  // donation form simulate
  const donationForm = document.getElementById('donationForm');
  if(donationForm){
    donationForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      alert('Doação simulada — obrigado pelo apoio!');
      donationForm.reset();
    });
  }
});
