const giftBox = document.getElementById('giftBox');
const messageBox = document.getElementById('messageBox');

giftBox.addEventListener('click', () => {
    giftBox.style.display = 'none';
    messageBox.style.display = 'block';
});

function handleApprove() {
    alert("You have accepted the proposal!");
}

function handleDecline() {
    alert("You have declined the proposal.");
}
