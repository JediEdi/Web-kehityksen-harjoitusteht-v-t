from flask import Flask, Response
import json
app = Flask(__name__)


@app.route("/translate/<word_english>") # käännä sana
def translate(word_english):
    try:
        word_english = str.lower(word_english)
        with open("python_flask_palvelin/teht2/static/dictionary.json", "r", encoding="UTF-8") as dictionary_data:
            dictionary = json.load(dictionary_data)
        response = {
            "English" : (word_english),
            "Finnish" : (dictionary[word_english])
            }
        return response
    
    except KeyError:
        json_response = json.dumps({
            "English" : (word_english),
            "message" : ("Key error: the word is not in the list."),
            "status" : 404
        })
        return Response(response=json_response, status=404, mimetype="application/json")

@app.route("/words") # kaikki sanat englanniksi, suomea ei ole
def word_list():
        with open("python_flask_palvelin/teht2/static/dictionary.json", "r", encoding="UTF-8") as dictionary_data:
            dictionary = json.load(dictionary_data)
        word_dictionary_english = {}
        word_index = 0
        for word_english in dictionary:
            word_index += 1
            word_dictionary_english[word_index] = word_english
        return word_dictionary_english

@app.route("/add/<word_english>/<word_finnish>") # lisää sana ja käännös
def add_word(word_english, word_finnish): # error-handlausta ei tarvita. errorhandler(404) hoitaa
    new_word = {word_english : word_finnish}
    with open("python_flask_palvelin/teht2/static/dictionary.json", "r", encoding="UTF-8") as dictionary_data:
        dictionary = json.load(dictionary_data)
    dictionary.update(new_word)
    with open("python_flask_palvelin/teht2/static/dictionary.json", "w", encoding="UTF-8") as dictionary_data:
        json.dump(dictionary, dictionary_data)
    return dictionary


@app.errorhandler(404)
def page_not_found(error_code):
    json_response = json.dumps({
        "message" : "Not found: the page does not exist.",
        "status" : 404
    })
    return Response(response=json_response, status=404, mimetype="application/json")

if __name__ == "__main__":
    app.run(host = "127.0.0.1", port = 3000, use_reloader = True)