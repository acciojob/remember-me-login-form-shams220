  const username = document.querySelector("#username");
      const password = document.querySelector("#password");
      const check    = document.querySelector('input[type="checkbox"]');
      const subBtn   = document.querySelector("#submit");
      const existingBtn = document.querySelector("#existing");
      console.log("check1");
     
        const userData = localStorage.getItem("users");
        if (!userData) {
            localStorage.removeItem('users')
            existingBtn.style.visibility="hidden"
        }
      
      subBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("check2");

        if (check.checked == false) {
          alert(`Logged in as ${username.value}`);
        } else {
          const data = {
            userName: username.value,
            password: password.value,
            checkbox: check.checked,
          };
          console.log("check3");

          localStorage.setItem("users", JSON.stringify(data));
            existingBtn.style.visibility="hidden"
        }
        alert("User data has been saved.");
      });

      existingBtn.addEventListener('click',(e)=>{
        e.preventDefault()
        const data = localStorage.getItem('users');
        const parsedData = JSON.parse(data);
       alert(`Logged in as ${parsedData.userName}`)

      })