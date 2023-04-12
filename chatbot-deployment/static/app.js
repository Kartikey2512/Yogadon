class Chatbox {

    constructor() {
        this.args = {
        openButton: document.querySelector('.chatbox__button'),
        chatBox: document.querySelector('.chatbox__support'),
        sendButton: document.querySelector('.send__button')
        }

    this.state = false;
    this.message = [];

    }
    display(){
        const { openButton, chatBox, sendButton } = this.args;
        openButton.addEventListener('click', () => this.togglestate(chatBox))
        sendButton.addEventListener('click', () => this.onsendMessage(chatBox))

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({key:string}) => {
            if (key == "Enter") {
                this.onsendButton(chatBox)
            }
        })
    }

    togglestate(chatBox){
        this.state = !this.state;
        if(this.state){
            chatBox.classList.add('chatbox--active');
        }
        else{
            chatBox.classList.remove('chatbox--active');
        }
    }

    onsendMessage(chatBox){
        var textField = chatBox.querySelector('input');
        let text1 = textField.value;
        if(text1 == "") {
            return;
        }

        let msg1 = {name: "User", message: text1}
        this.message.push(msg1);

        // 'http://127.0.0.1:5000/predict'
        fetch ($SCRIPT_ROOT + '/predict', {
            method: 'POST',
            body: JSON.stringify({ message: text1 }),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(r => r.json())
        .then(r => {
            let msg2 = {name: "Sam", message: r.answer};
            this.message.push(msg2);
            this.updateChatText(chatBox)
            textField.value = "";
        }).catch((error) => {
            console.error('Error:', error);
            this.updateChatText(chatBox)
            textField.value = ''
           });
    }

    updateChatText(chatBox){
        var html = '';
        this.message.slice(0).reverse().forEach(function(item,index) {
            if(item.user == "Sam")
            {
                html += '<div class = "messages__item messages__item--visitor">' + item.message + '</div>'

            }
            else
            {
                html += '<div class = "messages__item messages__item--operator">' + item.message + '</div>'
            }
        });

        const chatmessage = chatBox.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;

        }

}

const chatbox = new Chatbox();
chatbox.display();
