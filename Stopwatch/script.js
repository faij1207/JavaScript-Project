let[seconds, minutes, hours] = [0, 0, 0];
        let displayTime = document.getElementById('displayTime');
        let timer=null;

        function stopWatch(){
            seconds++;
            if(seconds / 60 === 1){
                seconds = 0;
                minutes++;
                if(minutes / 60 === 1){
                    minutes = 0;
                    hours++;
                }
            }  
            displayTime.innerHTML = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);         
        }
        function watchStart(){
                if(timer !== null){
                    clearInterval(timer);
                    timer = null;
                }else{
                    timer = setInterval(stopWatch, 1000);
                }
            }

        function watchStop(){
            clearInterval(timer);
            timer = null;
        }

        function watchReset(){
            clearInterval(timer);
            timer = null;
            [seconds, minutes, hours] = [0, 0, 0];
            displayTime.innerHTML = "00:00:00";
        }