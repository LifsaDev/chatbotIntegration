const chatbotButton = document.getElementById('chatbotOpenButton');
const chatbotWindow = document.getElementById('chatbotWindow');
const closeButton = document.getElementById('chatbotCloseButton');

chatbotButton.addEventListener('click', () => {
    chatbotWindow.style.display = 'block'; 
    chatbotWindow.style.animation = 'fadeIn 0.5s ease';
});

closeButton.addEventListener('click', () => {
    chatbotWindow.style.display = 'none';
});