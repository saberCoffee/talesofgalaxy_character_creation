CHARGEMENT DU PROFIL DEPUIS LA BASE DE DONNÉES GALACTIQUE ... ... ... 
PROFIL CORROMPU ! 

[ Créer un nouveau profil ]

Une voix synthétique raisonne :

"Bienvenue dans l'interface de création de profil. Je vais vous guider pas à pas lors de ce processus indispensable. Tout d'abord, quel est votre nom complet ?"

<< [fullname]

"[fullname], c'est ça ? C'est joli, vous pouvez remercier vos parents. Vous avez un surnom ?"

<< oui => [surname] || non 

"oui => Et vous préférez que je vous appelle [fullname] ou plutôt [surname] ? || skip

<< [fullname] || [surname]
= [name]

"Fort bien. Est-ce que vous avez un titre ?"

<< oui, prefix || oui suffixe || non

"Je vois, merci. Excusez-moi mais j'ai du mal avec tous ces noms, c'est très confus et j'ai du mal à vous différencier : êtes-vous un homme ou une femme ?"

<< [gender: dataset=masculin/féminin/indéfini]

"Très bien, [civlity] [name]. Puis-je avoir votre date de naissance ?"

<< [birthdate]

"Oh ! Vous êtes né à [période chronologique]. Vous devez avoir des tas d'histoires à raconter ! Mais au fait, vous êtes né où ?"

<< [homeworld]

"Coruscant = Incroyable, c'est là-bas qu'on a développé mon processeur !
Corellia = Sérieusement ? C'est ici qu'on a développé ma mémoire flash !
Nal Hutta = Cela explique l'odeur que mes senseurs ont détecté à votre arrivée
Tatooïne = Je l'avais deviné, avec votre bronzage !"

"J'oubliais. A quelle espèce appartenez-vous ? Pour moi, tous les êtres de chair se ressemblent donc ça ne fait aucune différence mais vous comprenez, le protocole m'impose ces questions."

<< [species]

"[réponse adaptée]. Maintenant, pourriez-vous vous décrire en quelques phrases ? Soyez honnête, pas la peine de mentir sur votre poids car de toute façon le siège sur lequel vous êtes assis vous a déjà pesé à votre arrivée."

<< [physique]

"Je vais vous croire sur parole, après tout qu'est-ce que j'en ai à faire, je ne comprends pas vos concepts de beauté. Maintenant, pouvez-vous me décrire votre personalité ? Oui, c'est toujours pour la création de profil je vous assure !"

<< [mental]

"Vous êtes donc [civility/title] [name] [title], [species] d'/de [homeworld], né(e) en [birthdate]. Passons maintenant à votre carrière... A quelle faction appartenez-vous ? Ne vous inquiétez pas, votre réponse reste strictement confidentielle."

<< [faction: dataset=factions]

"[réponse adaptée]. Et quel est votre rang au sein de ce groupe ?

<< [rank]

"[réponse adaptée]. Et si vous deviez définir votre niveau, vous seriez..?

<< [level: dataset=novice/confirmé/expert/prodige]

"[réponse adaptée]. Ok, merci. Je pense qu'on se connaît mieux maintenant, mais j'aimerais qu'on soit encore plus intimes. Racontez-moi un peu votre vie ! Ne soyez pas timide, je veux tout savoir."

<< [c'est une histoire triste / vous allez rire / j'ai un passé mystérieux...]
<< [histoire]

"[réponse adaptée]. Bon, on arrive au bout ! C'est que l'heure tourne, et j'ai un bain d'huile prévu à [now() + 30 minutes]. Je voudrais vous faire passer une simulation de compétences, rien de bien méchant..."

<< [skills]

"[réponse adaptée]. Mais ça prouve que vous êtes bien [level] ! Et quels sont vos talents ?"

<< [talents]

"[réponse adaptée]. Ok, et maintenant je voudrais connaître vos points forts et vos points faibles. Non, je plaisante ! Merci d'avoir répondu à cet entretien 100% confidentiel et qui ne déterminera pas du tout le restant de vos jours. Bon courage !"

