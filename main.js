<script>
    document.getElementById("enter").addEventListener("click", function() {
      submitEmail();
    });

    document.getElementById("emailInput").addEventListener("keydown", function(event) {
      if (event.keyCode === 13) {
        submitEmail();
      }
    });

    function submitEmail() {
      var email = document.getElementById("emailInput").value;
      // Here you can submit the email using AJAX, form submission, or any other method
      console.log("Submitted email:", email);
      // Example: AJAX submission
      /*
      fetch('submit_email.php', {
        method: 'POST',
        body: JSON.stringify({ email: email }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      */
    }
  </script>