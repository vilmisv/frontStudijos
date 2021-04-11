const textArea = document.querySelector('textarea');
const button = document.querySelector('button');
const chatContainer = document.querySelector('main.chat-container');

button.addEventListener('click', sendMessage);

function sendMessage () {
    if (textArea.value === '') {
        return;
    }

    const article = generateMessage(textArea.value);
    chatContainer.append(article);
}


function generateMessage(message) {
    const article = document.createElement('article');
    article.classList.add('message', 'self');
    const image = document.createElement('section');
    image.classList.add('image');
    const chatBubble = document.createElement('section');
    chatBubble.classList.add('chat-bubble')

    message.split('\n').forEach(eilute => {
    const paragraph = document.createElement('p');
    const messageTextNode = document.createTextNode(eilute);
    chatBubble.append(paragraph);
    paragraph.append(messageTextNode);
    })

    image.addEventListener('click', () => article.remove());

    article.append(image, chatBubble);


    return article;
}
