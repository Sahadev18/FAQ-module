const qnas = document.querySelectorAll('.qna');

for(qna of qnas) {
    const question = qna.querySelector('.question');
    const answer = qna.querySelector('.answer');
    const icon = qna.querySelector('.plus-icon');

    question.addEventListener('click', function(){
        answer.classList.toggle('show');
        if (icon.src.includes("icon-plus.svg")) {
            icon.src = "./assets/images/icon-minus.svg";
        } else {
            icon.src = "./assets/images/icon-plus.svg";
        }
    });
}