// Classes
import Question from '../utils/questions/Question';

let questions = [
  {
    id: 0,
    version: 0,
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
  },
  {
    id: 1,
    version: 0,
    key: 'surname',
    text: `::realname, c'est ça ? C'est joli, vous pouvez remercier vos parents. Vous avez un surnom ?`,
    replacement: [
      'realname'
    ],
    options: [
      {
        id: 0,
        text: `Non`,
        goto: {
          id: 2,
          version: 0
        }
      },
      {
        id: 1,
        text: `Oui, mon nom est...`,
        goto: {
          id: 2,
          version: 1
        }
      }
    ]
  },
  {
    id: 2,
    version: 0,
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
  {
    id: 2,
    version: 1,
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
];

questions = questions.map(question => new Question(question));

export default questions;