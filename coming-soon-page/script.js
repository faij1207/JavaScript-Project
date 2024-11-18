const launchTime = new Date("Jan 1, 2025 00:00:00").getTime();
        
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = launchTime - now;
        
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
            document.getElementById("days").textContent = days;
            document.getElementById("hours").textContent = hours;
            document.getElementById("minutes").textContent = minutes;
            document.getElementById("seconds").textContent = seconds;
        
            if (distance < 0) {
                clearInterval(timer);
                document.querySelector(".launch-time").textContent = "Launched!";
                document.getElementById("days").textContent = 0;
                document.getElementById("hours").textContent = 0;
                document.getElementById("minutes").textContent = 0;
                document.getElementById("seconds").textContent = 0;
            }
        }, 1000);