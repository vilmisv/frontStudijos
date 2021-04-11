const textArea = document.querySelector('textarea');
const button = document.querySelector('button');
const chatContainer = document.querySelector('main.chat-container');

button.addEventListener('click', sendMessage);

function sendMessage () {
    const article = generateMessage(textArea.value);
    chatContainer.append(article);
}

function generateMessage (message) {
    const article = document.createElement('article');
    article.classList.add('message', 'self');
    const image = document.createElement('section');
    image.classList.add('image');
    const chatBubble = document.createElement('section');
    chatBubble.classList.add('chat-bubble');

    const messageArray = message.split('\n')

    messageArray.forEach(eilute => {
   const paragraph = document.createElement('p');
    const messageTextNode = document.createElement(message);
    });

 

    article.append(image, chatBubble);
    chatBubble.append(paragraph);
    paragraph.append(messageTextNode);

   image.addEventListener('click', () => article.remove());

    return article;

}


