document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Получаем значения
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
    const formMessage = document.getElementById('formMessage');

    if(name && email && message) {
        formMessage.style.color = "green";
        formMessage.textContent = "Спасибо за ваше сообщение, мы свяжемся с вами в ближайшее время.";
        this.reset();
    } else {
        formMessage.style.color = "red";
        formMessage.textContent = "Пожалуйста, заполните все поля.";
    }
});
