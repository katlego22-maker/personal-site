const modal = document.getElementById('welcomeModal');
const closeBtn = document.getElementById('closeBtn');

closeBtn.onclick = function () {
  modal.style.display = 'none';
};

// Get form and message div
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-messages');

// Only attach event if form exists on this page
if (form && formMessage) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const currentForm = this;

    // Simulate sending form
    setTimeout(() => {
      const success = Math.random() > 0.3; // 70% success

      // Show message
      formMessage.style.display = 'block';
      formMessage.classList.remove('success', 'error');

      if (success) {
        formMessage.textContent = '✅ Message sent successfully!';
        formMessage.classList.add('success');
        currentForm.reset();
      } else {
        formMessage.textContent = '❌ Failed to send message. Try again.';
        formMessage.classList.add('error');
      }
    }, 1000);
  });
}
