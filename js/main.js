const emailInput = document.querySelector('input[type="email"]');

emailInput.addEventListener("input", () => {
    emailInput.checkValidity() ? submitBtn.classList.add("valid-email") : submitBtn.classList.remove("valid-email");
})


const handleSubmit = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        document.querySelector('.form-card').classList.remove('form-card-visible');
        document.querySelector('.form-card').classList.add('hidden');
        document.querySelector('.success-card').style.display = 'block';
    });
}
document.querySelector(".dismiss-btn").addEventListener('click', () => {
    document.querySelector('.success-card').style.display = 'none';
    document.querySelector('.form-card').classList.add('form-card-visible');
})