from random import random
from flask import Flask, render_template, url_for, copy_current_request_context, request
from flask_socketio import SocketIO, emit
from threading import Thread, Event
import time
from time import sleep
import psycopg2


app = Flask(__name__)
app.config["TOP_SECRET_KEY"] = "H4SH"
app.config["DEBUG"] = False

conn, cur = connectDatabase()

socketio = SocketIO(app, async_mode=None, logger=True, engineio_logger=True)

thread = Thread()
thread_stop_event = Event()

def connectDatabase():
    connection = None
    cursor = None
    try:
        connection = psycopg2.connect(user = "Postgres", password = "Batman52", host = "127.0.0.1", port = "5002", database = "postgres");
        cursor = connection.cursor()
        print(connection.get_dsn_parameters(), "\n")

        cursor.execute("SELECT version();")
        record = cursor.fetchone()
        print("You are connected to - ", record, "\n")

    except (Exception, psycopg2.Error) as error:
        print("An error occured while attempting to connect to PostgreSQL", error)

    finally:
        return (connection, cursor)

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

@app.route("/org/create")
def org_create():
    return render_template("org/create.html")

@app.route("/org/create/new", methods=["POST"])
def org_create_new():
    orgName = str(request.form["orgName"])
    country = str(request.form["country"])
    state = str(request.form["state"])
    city = str(request.form["city"])

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
    conn, cursor = connectDatabase()
    app.run(host="0.0.0.0")