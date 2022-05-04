enum RadioMessage {
    message1 = 49434,
    remove_light = 31594,
    addSpaceForNewMessage = 33327
}
function send_message (message: string) {
    radio.sendMessage(RadioMessage.addSpaceForNewMessage)
    for (let index = 0; index <= message.length; index++) {
        radio.sendString(message.charAt(index))
        basic.pause(1000)
    }
    radio.sendMessage(RadioMessage.remove_light)
}
radio.onReceivedMessage(RadioMessage.remove_light, function () {
    led.unplot(4, 0)
})
input.onButtonPressed(Button.A, function () {
    send_message(your_message)
})
radio.onReceivedString(function (receivedString) {
    message_store[0] = "" + message_store[0] + receivedString
    led.toggle(4, 0)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (message_store[0]))
    basic.pause(500)
    basic.clearScreen()
})
radio.onReceivedMessage(RadioMessage.addSpaceForNewMessage, function () {
    message_store.unshift("")
})
let message_store: string[] = []
let your_message = ""
// type your message here!
your_message = "m1"
radio.setGroup(164)
