class Question {
  constructor({ id, version, key, text, options, replacement = [] }) {
    this.id = id;
    this.version = version;
    this.key = key;
    this.text = text;
    this.replacement = replacement;
    this.options = options;

    this.anwser = {
      option: null,
      text: null
    };
  }

  /**
   * Affecte la réponse de l'utilisateur à la question
   * 
   * @param {Mixed}     value     La valeur à affecter à la réponse
   * @param {Function}  callback  Un callback à exécuter à la fin de la fonction
   */
  setAnwser = ({ value, callback = null }) => {
    this.anwser.option = value.value;
    this.anwser.text = value.text;

    if (callback) callback();
  };

  /**
   * Récupère le texte de la question en remplaçant éventuellement certains mots-clés par des propriétés du personnage
   * 
   * @param {Object}  character  Un objet représentant le personnage
   * @return {Void}
   */
  getText = ({ character }) => {
    if (!this.replacement.length) {
      return this.text;
    } else {
      let text = this.text;
      this.replacement.forEach(word => text = text.replace(`::${word}`, character[word]));

      return text;
    }
  };
}

export default Question;