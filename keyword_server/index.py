from flask import Flask, redirect, url_for, request, jsonify
import spacy
import pytextrank
from urllib.request import urlopen
import json
import bs4

app = Flask('app')


@app.route('/get_wiki_keywords', methods=['GET'])
def get_keywords():
	text = request.args.get('text')
	num_phrases = int(request.args.get('num_phrases'))
	# load a spaCy model, depending on language, scale, etc.
	nlp = spacy.load("en_core_web_sm")
	# add PyTextRank to the spaCy pipeline
	nlp.add_pipe("textrank")
	doc = nlp(text)
	final_phrases = []
	scraped_data=[]
	# examine the top-ranked phrases in the document
	for phrase in doc._.phrases[:num_phrases]:
		final_phrases.append(phrase.text)
		response = urlopen("https://en.wikipedia.org/w/api.php?action=opensearch&search="+phrase.text.replace(" ","%20")+"&limit=1&namespace=0&format=json")
		data_json = json.loads(response.read())
		if (len(data_json[3])==1):
			html=urlopen(data_json[3][0])
			soup = bs4.BeautifulSoup(html, "html.parser")
			p_tags = soup.find_all("p")
			p_tags=[tag for tag in p_tags if tag.has_attr("class")==False] 
			summary=str(p_tags[0])
			wiki_data={            "topic":data_json[1][0],            "link":data_json[3][0],            "summary":summary          }
			scraped_data.append(wiki_data)
	return jsonify({        "final_phrases": final_phrases,"scraped_data":scraped_data})


#app.run(host='0.0.0.0', port=8080)
app.run(host='0.0.0.0', port=8080)
