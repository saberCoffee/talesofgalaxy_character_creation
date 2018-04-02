// Classes
import Question from './Question';

let questions = {
	0: {
		0: {
			key: 'realname',
			text: `Bienvenue dans l'interface de création de profil. Je vais vous guider pas à pas lors de ce processus indispensable. Tout d'abord, quel est votre nom complet ?`,
			options: [
				{
					id: 0,
					text: `Mon nom est ...`,
					goto: {
						id: 1,
						version: 0
					}
				}
			]
		}
	},
	1: {
		0: {
			key: 'surname',
			text: `::realname, c'est ça ? C'est joli, vous pouvez remercier vos parents. Vous avez un surnom ?`,
			replacement: [
				'realname'
			],
			options: [
				{
					0: {
						text: `Non`,
						goto: {
							id: 2,
							version: 0
						}
					},
					1: {
						text: `Oui, mon nom est...`,
						goto: {
							id: 2,
							version: 1
						}
					}
				}
			]
		}
	},
	2: {
		0: {
			key: 'birthdate',
			text: `Compris ! Pas de surnom pour ! ::realname?`,
			replacement: [
				'realname'
			],
			options: [
				{
					id: 0,
					text: `Stap`,
					goto: {
						id: 2,
						version: 0
					}
				}
			]
		},
		1: {
			key: 'birthdate',
			text: `Bonjour ::surname !`,
			replacement: [
				'surname'
			],
			options: [
				{
					id: 0,
					text: `Stap`,
					goto: {
						id: 2,
						version: 0
					}
				}
			]
		}
	}
};


// export default questions.map(question => new Question(question));

let arr = [];

for (let id in questions) {
	for (let version in questions[id]) {
		let question = questions[id][version];
		question.id = id;
		question.version = version;

		arr.push(new Question(question));
	}
}

export default arr;