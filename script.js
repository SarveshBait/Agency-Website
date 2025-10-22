const questions = document.querySelectorAll('.faq-question');

questions.forEach(q => {
    q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        const arrow = q.querySelector('.arrow');

        answer.classList.toggle('open');
        arrow.classList.toggle('rotate');
    });
});


/* <script> */
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const symbol = counter.getAttribute('data-symbol');
        const current = +counter.innerText.replace(/\D/g, '');
        const increment = Math.ceil(target / 100);

        if (current < target) {
            counter.innerText = `${current + increment}${symbol}`;
            setTimeout(updateCount, 20); // speed of animation
        } else {
            counter.innerText = `${target}${symbol}`;
        }
    };

    setTimeout(updateCount, 1000); // delay start after 1s
});
// </script>

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () => {
    sideBar.classList.toggle('active');
    body.classList.toggle('active');
}

document.querySelector('.side-bar .close-side-bar').onclick = () => {
    sideBar.classList.toggle('active');
    body.classList.toggle('active');
}



window.onscroll = () => {
    profile.classList.remove('active');
    searchForm.classList.remove('active');

    if(window.innerWidth < 1200) {
        sideBar.classList.remove('active');
        body.classList.remove('active');
    }
}