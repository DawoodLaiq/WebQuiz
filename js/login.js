document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');
  
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const teamName = document.getElementById('team-name').value;
      const password = document.getElementById('password').value;
  
      try {
        const response = await fetch('https://vccfinal.online/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: teamName, password: password }),
        });
  
        const data = await response.json();
  
        if (data.message && data.message.includes('Login successful')) {
          sessionStorage.setItem('currentTeam', teamName);
          window.location.replace('quiz.html');
        } else {
          showError('Invalid team name or password');
        }
      } catch (error) {
        showError('An error occurred. Please try again later.');
      }
    });
  
    function showError(message) {
      const errorElement = document.createElement('p');
      errorElement.classList.add('error-message');
      errorElement.textContent = message;
  
      const container = document.querySelector('.container');
      container.appendChild(errorElement);
  
      setTimeout(() => {
        errorElement.remove();
      }, 3000);
    }
  });