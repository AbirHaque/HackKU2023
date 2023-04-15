'''
# example text from principia mathematica
text = """
The Natural Numbers
The most direct comparison with Frege’s development of the natural numbers comes with the notion of Inductive Cardinal by which PM means the natural numbers 0, 1, 2,…, and the theory of these numbers including the principle of induction. Although the numbers 0 and 1, as well as addition of natural numbers 
+
c
 is has been defined earlier, they are defined as cardinal numbers and addition will apply to all cardinal numbers, finite and transfinite. For the finite natural numbers, special notions need to be defined first. For the proof of the Peano Postulates it is necessary not only to define 0, but also the notion of successor. For Frege the notion of (weak) predecessor of a number is defined, thus 0 and 1 are the predecessors of 1, while 0, 1 and 2 are the predecessors of 2, etc. The successor of n is then defined by counting the predecessors of a number, in terms of the definition of number, it is the number of the class of predecessors. This definition would not work for PM, where each number would be of a higher type, as it is defined as a set containing that number. There will in fact be natural numbers for each type, thus a set of all pairs of individuals of type 0, a set of pairs of sets of type 1, etc., for each type. There is no one type, however, at which there are all of the natural numbers (sets of equinumerous sets of that type) without an assumption that there are infinitely many members of some one type.
"""



example get request:
http://localhost:8080/get_keywords?text=The%20Natural%20Numbers%0AThe%20most%20direct%20comparison%20with%20Frege’s%20development%20of%20the%20natural%20numbers%20comes%20with%20the%20notion%20of%20Inductive%20Cardinal%20by%20which%20PM%20means%20the%20natural%20numbers%200,%201,%202,…,%20and%20the%20theory%20of%20these%20numbers%20including%20the%20principle%20of%20induction.%20Although%20the%20numbers%200%20and%201,%20as%20well%20as%20addition%20of%20natural%20numbers%20%0A+%0Ac%0A%20is%20has%20been%20defined%20earlier,%20they%20are%20defined%20as%20cardinal%20numbers%20and%20addition%20will%20apply%20to%20all%20cardinal%20numbers,%20finite%20and%20transfinite.%20For%20the%20finite%20natural%20numbers,%20special%20notions%20need%20to%20be%20defined%20first.%20For%20the%20proof%20of%20the%20Peano%20Postulates%20it%20is%20necessary%20not%20only%20to%20define%200,%20but%20also%20the%20notion%20of%20successor.%20For%20Frege%20the%20notion%20of%20(weak)%20predecessor%20of%20a%20number%20is%20defined,%20thus%200%20and%201%20are%20the%20predecessors%20of%201,%20while%200,%201%20and%202%20are%20the%20predecessors%20of%202,%20etc.%20The%20successor%20of%20n%20is%20then%20defined%20by%20counting%20the%20predecessors%20of%20a%20number,%20in%20terms%20of%20the%20definition%20of%20number,%20it%20is%20the%20number%20of%20the%20class%20of%20predecessors.%20This%20definition%20would%20not%20work%20for%20PM,%20where%20each%20number%20would%20be%20of%20a%20higher%20type,%20as%20it%20is%20defined%20as%20a%20set%20containing%20that%20number.%20There%20will%20in%20fact%20be%20natural%20numbers%20for%20each%20type,%20thus%20a%20set%20of%20all%20pairs%20of%20individuals%20of%20type%200,%20a%20set%20of%20pairs%20of%20sets%20of%20type%201,%20etc.,%20for%20each%20type.%20There%20is%20no%20one%20type,%20however,%20at%20which%20there%20are%20all%20of%20the%20natural%20numbers%20(sets%20of%20equinumerous%20sets%20of%20that%20type)%20without%20an%20assumption%20that%20there%20are%20infinitely%20many%20members%20of%20some%20one%20type.&num_phrases=10

'''
from flask import Flask, redirect, url_for, request, jsonify
import spacy
import pytextrank

app = Flask('app')


@app.route('/get_keywords', methods=['GET'])
def login():
	text = request.args.get('text')
	num_phrases = int(request.args.get('num_phrases'))
	# load a spaCy model, depending on language, scale, etc.
	nlp = spacy.load("en_core_web_sm")
	# add PyTextRank to the spaCy pipeline
	nlp.add_pipe("textrank")
	doc = nlp(text)
	final_phrases = []
	# examine the top-ranked phrases in the document
	for phrase in doc._.phrases[:num_phrases]:
		final_phrases.append(phrase.text)
	data = {
	 "final_phrases": final_phrases,
	}
	return jsonify(data)


app.run(host='0.0.0.0', port=8080)
