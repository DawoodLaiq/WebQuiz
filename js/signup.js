async function signup() {
    const teamName = document.getElementById("signup_team_name").value;
  
    const response = await fetch("https://vccfinal.online/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: teamName,
        password: "abc",
        solved_questions: 0,
          color: "#0000FF",
          connected: 0,
      }),
    });
  
    const data = await response.json();
  
    const signupError = document.getElementById("signup-error");
    if (data.message === "Team created successfully") {
      signupError.classList.add("hidden");
      toggleSignup();
    } else {
      signupError.textContent = data.message;
      signupError.classList.remove("hidden");
    }
  }