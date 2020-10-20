
document.addEventListerner('DOMContentLoaded', () => {
    const squares = document.querySelectorAll(',grid div')
    const resultDisplay = document.querySelector('#result')
    let width = 20

    //CHARACTER
    squares[currentShooterIndex].classList.add('shooter')

    function moveShooter(e) {
        squares[currentShooterIndex].classList.add('shooter')
        switch (e.keyCode) {
            case 37:
                if (currentShooterIndex % width !== 0) currentShooterIndex -= 1
                break
            case 39:
                if (currentShooterIndex % width < width - 1) currentShooterIndex += 1
                break
        }
        squares[currentShooterIndex].classList.add('shooter')
    }
    document.addEventListener('keydown', moveShooter)
    }

