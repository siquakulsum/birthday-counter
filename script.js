let countdownInterval;

        function startCountdown() {
            const birthdayInput = document.getElementById("birthday").value;
            if (birthdayInput === "") {
                alert("Please select your birthday.");
                return;
            }

            const birthdayDate = new Date(birthdayInput);
            const now = new Date();

            birthdayDate.setFullYear(now.getFullYear());

            if (birthdayDate < now) {
                birthdayDate.setFullYear(now.getFullYear() + 1);
            }

            clearInterval(countdownInterval); 
            updateCountdown(birthdayDate);

            countdownInterval = setInterval(() => updateCountdown(birthdayDate), 1000);
        }

        function updateCountdown(birthdayDate) {
            const now = new Date();
            const timeDifference = birthdayDate - now;

            const countdownElement = document.getElementById("countdown");

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s until your birthday!`;
            countdownElement.style.opacity = 1;
        }