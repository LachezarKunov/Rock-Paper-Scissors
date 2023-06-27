    const imgRock = document.querySelector('.rock-image')
    const imgPaper = document.querySelector('.paper-image')
    const imgScissors = document.querySelector('.scissors-image')

    const pcImgRock = document.querySelector('.pc-rock-image')
    const pcImgPaper = document.querySelector('.pc-paper-image')
    const pcImgScissors = document.querySelector('.pc-scissors-image')


    function getComputerChoice()
    {
        let x = Math.random();

        if(x<0.33)return 'Rock'
        else if(x>=0.33 && x<0.66)return 'Paper'
        else return 'Scissors'
    }

    function game(userChoice, computerChoice)
    {
        if(userChoice == 'Rock')
        {
            if(computerChoice =='Rock')
            {
                pcImgRock.classList.add('pc-choice-border')

                setTimeout(function(){
                    alert('Draw!')
                }, 10)

                setTimeout(function(){
                    pcImgRock.classList.remove('pc-choice-border')
                }, 11)
                
            }

            if(computerChoice == 'Paper')
            {
                pcImgPaper.classList.add('pc-choice-border')

                setTimeout(function()
                {
                    alert('You lose!')
                }, 10)

                setTimeout(function(){
                    pcImgPaper.classList.remove('pc-choice-border')
                }, 11)

            }

            if(computerChoice =='Scissors')
            {
                pcImgScissors.classList.add('pc-choice-border')

                setTimeout(function()
                {
                    alert('You win!')
                }, 10)

                setTimeout(function(){
                    pcImgScissors.classList.remove('pc-choice-border')
                }, 11)
            }
        }

        if(userChoice == 'Paper')
        {
            if(computerChoice =='Paper')
            {
                pcImgPaper.classList.add('pc-choice-border')

                setTimeout(function()
                {
                    alert('Draw!')
                }, 10)

                setTimeout(function(){
                    pcImgPaper.classList.remove('pc-choice-border')
                }, 11)
            }
            
            if(computerChoice =='Scissors')
            {
                pcImgScissors.classList.add('pc-choice-border')

                setTimeout(function()
                {
                    alert('You lose!')
                }, 10)

                setTimeout(function(){
                    pcImgScissors.classList.remove('pc-choice-border')
                }, 11)
            }

            if(computerChoice =='Rock')
            {
                  pcImgRock.classList.add('pc-choice-border')

                  setTimeout(function(){
                    alert('You win!')
                }, 10)
                
                setTimeout(function(){
                    pcImgRock.classList.remove('pc-choice-border')
                }, 11)
            }
        }

        if(userChoice == 'Scissors')
        {
            if(computerChoice =='Rock')
            {
                pcImgRock.classList.add('pc-choice-border')

                setTimeout(function(){
                  alert('You Lose!')
              }, 10)

              setTimeout(function(){
                pcImgRock.classList.remove('pc-choice-border')
            }, 11)
            }

            if(computerChoice == 'Paper')
            {
                pcImgPaper.classList.add('pc-choice-border')

                setTimeout(function()
                {
                    alert('You win!')
                }, 10)

                setTimeout(function(){
                    pcImgPaper.classList.remove('pc-choice-border')
                }, 11)
            }

            if(computerChoice =='Scissors')
            {
                pcImgScissors.classList.add('pc-choice-border')

                setTimeout(function()
                {
                    alert('Draw!')
                }, 10)

                setTimeout(function(){
                    pcImgScissors.classList.remove('pc-choice-border')
                }, 11)
            }
        }

    }


    imgRock.addEventListener('click',()=>game('Rock',getComputerChoice()))
    imgPaper.addEventListener('click',()=>game('Paper',getComputerChoice()))
    imgScissors.addEventListener('click',()=>game('Scissors',getComputerChoice()))
