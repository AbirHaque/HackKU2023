from flask import Flask, redirect, url_for, request, jsonify
from flask_cors import CORS
import spacy
import pytextrank
from urllib.request import urlopen
import json
import bs4
import time

import gensim

app = Flask('app')
CORS(app)

# load a spaCy model, depending on language, scale, etc.
nlp = spacy.load("en_core_web_sm")
# add PyTextRank to the spaCy pipeline
nlp.add_pipe("textrank")

w2v_model = gensim.models.Word2Vec.load('model.bin')


@app.route('/')
def main():
	return "Wiki Keyword API"


@app.route('/get_keywords', methods=['POST'])
def get_keywords():
	text = request.get_json()['text']
	num_phrases = int(request.get_json()['num_phrases'])
	print(text)
	print(num_phrases)
	# load a spaCy model, depending on language, scale, etc.
	nlp = spacy.load("en_core_web_sm")
	# add PyTextRank to the spaCy pipeline
	nlp.add_pipe("textrank")
	doc = nlp(text)
	final_phrases = []
	# examine the top-ranked phrases in the document
	for phrase in doc._.phrases[:num_phrases]:
		final_phrases.append(phrase.text)
	return jsonify({'keywords': final_phrases})


@app.route('/get_wiki_keywords', methods=['GET'])
def get_wiki_keywords():
	start = time.time()
	text = request.args.get('text')
	#filters = request.args.get("filters")
	num_phrases = int(request.args.get('num_phrases'))
	doc = nlp(text)
	final_phrases = []
	scraped_data = []
	#end = time.time()
	#print("Start: " + str(end - start))
	# examine the top-ranked phrases in the document
	for phrase in doc._.phrases[:num_phrases]:
		#start = time.time()
		final_phrases.append(phrase.text)
		response = urlopen(
		 "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
		 phrase.text.replace(" ", "%20") + "&limit=1&namespace=0&format=json")
		data_json = json.loads(response.read())
		#end = time.time()
		#print(str(end - start))
		if (len(data_json[3]) == 1):
			#start = time.time()
			html = urlopen(data_json[3][0])
			soup = bs4.BeautifulSoup(html, "html.parser")
			p_tags = soup.find_all("p")
			p_tags = [tag for tag in p_tags if tag.has_attr("class") == False]
			summary = str(p_tags[0])
			wiki_data = {
			 "topic": data_json[1][0],
			 "link": data_json[3][0],
			 "summary": summary
			}
			scraped_data.append(wiki_data)
	end = time.time()
	print(str(end - start))
	# for phrase in final_phrases:
	# 	for filter in filters:
	# 		if w2v_model.wv.similarity(phrase, filter) < 0.3:
	# 			rec_phrases.add(phrase)
	# rec_phrases = list(rec_phrases)

	return jsonify({"final_phrases": final_phrases, "scraped_data": scraped_data})


app.run(host='0.0.0.0', port=8080)
