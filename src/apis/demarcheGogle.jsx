import React from 'react'

const demarcheGogle = () => {
  return (
    <div>

Pour obtenir ta clé Maps_APIKEY, tu dois te rendre sur la Google Cloud Console. Comme tu utilises à la fois des cartes (MapView) et du calcul d'itinéraire (MapViewDirections), tu auras besoin d'activer des services spécifiques.

Voici les étapes pas à pas pour la trouver et la configurer :

🛠️ Étape 1 : Créer un projet sur Google Cloud
Rends-toi sur la Google Cloud Console.

Connecte-toi avec ton compte Google.

En haut à gauche, clique sur le menu déroulant des projets et sélectionne "Nouveau projet".

Donne-lui un nom (par exemple : Baraka Delivery) et clique sur Créer.

🔑 Étape 2 : Activer les API nécessaires
Pour ton code React Native, tu as impérativement besoin d'activer 3 API spécifiques.

Dans la barre de recherche du cloud en haut, tape et active :

Maps SDK for Android (pour l'affichage de la carte sur Android).

Maps SDK for iOS (pour l'affichage de la carte sur iPhone).

Directions API (c'est elle qui permet à MapViewDirections de tracer la ligne violette de l'itinéraire).

Pour chacune d'elles, clique sur le bouton bleu "Activer".

🎫 Étape 3 : Générer ta clé API
Dans le menu latéral de gauche, va dans API et services > Identifiants (Credentials).

Clique sur le bouton "+ Créer des identifiants" en haut de l'écran.

Sélectionne "Clé API".

Une boîte de dialogue s'ouvre avec ta clé (elle ressemble à une longue suite de caractères commençant souvent par AIzaSy...). Copie-la.

🔒 Étape 4 : Activer la facturation (Obligatoire)
⚠️ Attention importante : Google Maps impose d'associer une carte bancaire à ton compte de facturation Google Cloud pour que la Directions API fonctionne.

Pas de panique : Google offre un crédit gratuit de 200 $ chaque mois (ce qui représente des dizaines de milliers de requêtes d'itinéraires). Tant que tu es en développement ou sur un volume modéré, tu ne paieras jamais 1 centime, mais la clé refusera de tracer l'itinéraire si le compte de facturation n'est pas actif.

🚀 Étape 5 : La bonne pratique pour Expo (Ne pas la mettre en dur)
Comme mentionné dans la note de ton code, ne laisse pas ta clé en clair dans ton fichier tracking.jsx. Si tu pousses ton code sur GitHub, des robots vont la voler et l'utiliser à tes frais.

Utilise plutôt les variables d'environnement intégrées d'Expo :

À la racine de ton projet React Native, crée un fichier nommé .env (s'il n'existe pas déjà).

Ajoute ta clé à l'intérieur comme ceci :

Extrait de code
EXPO_PUBLIC_GOOGLE_MAPS_APIKEY=AIzaSyVotreCleGoogleIci...
Dans ton fichier tracking.jsx, remplace ta ligne par :

JavaScript
const GOOGLE_MAPS_APIKEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_APIKEY;
Pense à redémarrer ton serveur Expo (npx expo start -c) après avoir modifié le fichier .env pour qu'il prenne les changements en compte !
    </div>
  )
}

export default demarcheGogle