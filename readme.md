# 📋 ProjectKit

Générateur interactif de cahier des charges pour projets web avec sauvegarde automatique et export PDF

## ✨ Fonctionnalités

- 📝 Formulaire guidé en 9 sections
- 💾 Sauvegarde automatique (localStorage)
- 🔄 Navigation fluide entre les sections
- 📊 Barre de progression visuelle
- ⌨️ Raccourcis clavier (Alt+Flèches, Ctrl+S)
- 📄 Export PDF _(en développement)_

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
4. Exportez votre cahier des charges en PDF _(à venir)_

## ⌨️ Raccourcis clavier

- `Alt + →` : Section suivante
- `Alt + ←` : Section précédente
- `Ctrl + S` : Sauvegarde manuelle

## 🎯 Roadmap

- [x] Structure du projet
- [x] Navigation entre sections
- [x] Sauvegarde automatique
- [ ] Validation des champs
- [ ] Export PDF
- [ ] Version mobile optimisée
- [ ] Backend avec authentification

## 📝 Licence

MIT

## 👩‍💻 Auteur

Projet créé dans le cadre d'une reconversion en développement web
