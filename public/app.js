const newsletterForm = document.getElementById('newsletter-form');
const newsletterStatus = document.getElementById('newsletter-status');

if (!(newsletterForm instanceof HTMLFormElement)) {
  throw new Error('O formulário da newsletter não foi encontrado.');
}

if (!(newsletterStatus instanceof HTMLElement)) {
  throw new Error('A área de status da newsletter não foi encontrada.');
}

function handleNewsletterSubmit(event) {
  event.preventDefault();
  newsletterStatus.textContent = 'Inscrição confirmada!';
}

newsletterForm.addEventListener('submit', handleNewsletterSubmit);
