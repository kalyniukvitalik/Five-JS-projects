    const board = document.querySelector('#board');
    const colors = ['#22e608', '#ff42ff', '#fcff4b', '#ffbc7e', '#963bff', '#ff3b55'];
    const SQUARES_NUMBER = 600;

    for (let i = 0; i < SQUARES_NUMBER; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.addEventListener('mouseover', () => setColor(square));

        square.addEventListener('mouseleave', () => removeColor(square));

        board.append(square);
    };

    function setColor(element) {
        const color = getColor();
        element.style.backgroundColor = color;
        element.style.boxShadow = `0 0 22px ${color}, 0 0 80px ${color}`;
    }

    function removeColor(element) {
        element.style.backgroundColor = '#1d1d1d';
        element.style.boxShadow = '0 0 2px #000';
    }

    function getColor() {
      const index = Math.floor(Math.random() * colors.length);
      return colors[index];
    }