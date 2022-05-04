def send_message():
    radio.set_group(164)
    radio.send_value("message", 0)
basic.show_string("Hello!")

def on_forever():
    pass
basic.forever(on_forever)
