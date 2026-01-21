# 📋 ProjectKit

ProjectKit est un projet personnel en cours de refonte, visant à évoluer d’un générateur de cahier des charges
vers un outil de gestion de projet orienté développeurs.

L’objectif est de proposer un outil permettant de structurer rapidement un projet,
de réduire la charge cognitive et de faire gagner du temps,
aussi bien aux développeurs juniors qu’aux profils plus expérimentés.

## 🧭 Contexte

ProjectKit a été initialement conçu comme un générateur interactif de cahier des charges pour projets web.

Le projet est actuellement en phase de pause volontaire et de réflexion,
afin d’intégrer des notions de gestion de projet IT vues en formation CDA.

Cette phase de refonte vise à réaligner l’outil avec des pratiques professionnelles
et une vision produit plus large.

## 🎯 Cible

- Développeurs juniors souhaitant structurer leurs projets
- Développeurs confirmés recherchant un outil simple et efficace pour gagner du temps

## 🔮 Perspectives d’évolution

- Structuration de projet (backlog, tâches, priorisation)
- Suivi d’avancement
- Amélioration de l’ergonomie

## ✨ Fonctionnalités actuelles

Les fonctionnalités ci-dessous correspondent à une première version fonctionnelle
servant de base à la réflexion et à la refonte du projet.

- 📝 Formulaire guidé en 9 sections
- 💾 Sauvegarde automatique (localStorage)
- 🔄 Navigation fluide entre les sections
- 📊 Barre de progression visuelle

## 🧠 Apports du projet

- Réflexion produit et expérience développeur
- Structuration d’un projet long
- Prise de recul et refonte fonctionnelle

## 🚀 Installation

```bash
# Cloner le projet
git clone https://github.com/TON_USERNAME/projectKit.git
cd projectKit
```

### Lancer l'application

**Option 1 : Avec Live Server (VS Code)** _(recommandé)_

1. Installer l'extension [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Clic droit sur `index.html` → "Open with Live Server"
3. L'app s'ouvre sur `http://localhost:5500`

**Option 2 : Avec Python**

```bash
python -m http.server 8000
```

ou

```bash
python3 -m http.server 8000
# Puis ouvrir http://localhost:8000
```

**Option 3 : Avec Node.js**

```bash
npx live-server
```

**Option 4 : Directement**

- Ouvrir `index.html` dans votre navigateur
- ⚠️ Certaines fonctionnalités peuvent ne pas marcher (CORS)

## 🛠️ Technologies

- JavaScript Vanilla (ES6 Modules)
- HTML5
- CSS3
- localStorage API

## 📖 Utilisation

1. Remplissez les sections une par une
2. Vos données sont sauvegardées automatiquement
3. Naviguez librement entre les sections

## ⌨️ Raccourcis clavier

- `Alt + →` : Section suivante
- `Alt + ←` : Section précédente
- `Ctrl + S` : Sauvegarde manuelle

## 📝 Licence

MIT

## 👩‍💻 Auteur

Projet créé dans le cadre d'une reconversion en développement web
