import os
from flask import Flask, send_from_directory
from OpenSSL import SSL

app = Flask(__name__, static_folder='build')

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
	if(path == ""):
		return send_from_directory('frontend/build', 'index.html')
	else:
		if(os.path.exists("frontend/build/" + path)):
			return send_from_directory('frontend/build', path)
		else:
			return send_from_directory('frontend/build', 'index.html')


if __name__ == '__main__':
    context = SSL.Context(SSL.SSLv23_METHOD)
    context.use_privatekey_file('yourserver.key')
    context.use_certificate_file('yourserver.crt')
	app.run(use_reloader=True, port=80, threaded=True, ssl_context=context)
