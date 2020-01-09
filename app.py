from random import random
from flask import Flask, render_template, url_for, copy_current_request_context, request
from flask_socketio import SocketIO, emit
from threading import Thread, Event
import time
from time import sleep

app = Flask(__name__)
app.config["TOP_SECRET_KEY"] = "H4SH"
app.config["DEBUG"] = False

socketio = SocketIO(app, async_mode=None, logger=True, engineio_logger=True)

thread = Thread()
thread_stop_event = Event()

def randomNumberGenerator():
    while not thread_stop_event.isSet():
        number = round(random()*10, 3)
        print(number)
        socketio.emit('newnumber', {'number':number}, namespace="/test")
        socketio.sleep(5)

@app.route("/test")
def test():
    return render_template("test.html")

@app.route("/hello")
def hello():
    return "<h1>Hello World</h1><br><i>I've missed you...</i>"

@socketio.on("my event")
def test_message(msg):
    emit("my response", {"data": "got it!"})

@socketio.on("connect", namespace="/test")
def test_connect():
    global thread
    print("Client {0} Connected.", request.remote_addr)

    if not thread.isAlive():
        print("Starting thread...")
        thread = socketio.start_background_task(randomNumberGenerator)
    
@socketio.on("disconnect", namespace="/test")
def test_disconnect():
    global thread
    print("Client {0} Disconnected.", request.remote_addr)


if __name__ == "__main__":
    print("Starting app...")
    app.run(host="0.0.0.0")