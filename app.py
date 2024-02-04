from flask import Flask, request, jsonify
import requests
from flask_cors import CORS  # Import Flask-CORS

app = Flask(__name__)
CORS(app)  # Initialize CORS with your Flask app

@app.route('/webhook', methods=['POST'])
def webhook():
    user_message = request.json['message']
    response = get_rasa_response(user_message)
    return jsonify({'message': response})

def get_rasa_response(message):
    # Make a request to the Rasa server
    rasa_url = 'http://localhost:5005/webhooks/rest/webhook'
    data = {'message': message}
    response = requests.post(rasa_url, json=data)
    print(response)
    return response.json()[0]['text']

if __name__ == '__main__':
    app.run(debug=True, port=5000)
