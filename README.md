# Portfolio — Emmanuel Junior TJADE II (Dequader)

Portfolio personnel — React + Vite + Tailwind CSS, bilingue FR/EN.

Dépôt : [github.com/EmmanuelDequader/porte_Folio](https://github.com/EmmanuelDequader/porte_Folio)

## 1. Installer et lancer en local

```bash
npm install
npm run dev
```

Le site est accessible sur `http://localhost:5173`.

## 2. Personnaliser le contenu

Tout le texte (nom, bio, projets, compétences, contact, actualités) se trouve dans
**`src/data/content.js`** — un seul fichier à modifier.

- Remplace `profileData.cvUrl` et ajoute ton CV en PDF dans `public/cv-dequader.pdf`.
- Remplace les liens GitHub/LinkedIn/WhatsApp dans `profileData.socials`.
- Remplace les projets, compétences, distinctions et articles d'actualité.

Les couleurs (bleu marine + vert émeraude) sont centralisées dans
`tailwind.config.js` sous `theme.extend.colors`.

## 3. Articles partageables (liens directs)

Chaque article de la timeline "Actualités" a sa propre URL, indépendante de la page d'accueil,
au format :

```
https://<ton-domaine>/actualites/<id-de-l-article>
```

Par exemple : `/actualites/conference-algotech-2026`. Ces liens sont directement partageables
(réseaux sociaux, WhatsApp, etc.) et fonctionnent au rechargement grâce à la configuration
`vercel.json` (voir section 5). Dans chaque article, un bouton **« Copier le lien »** permet de
récupérer l'URL en un clic. Le routing est géré par `react-router-dom` (voir `src/App.jsx`).

## 4. Déployer sur GitHub

```bash
git init
git add .
git commit -m "Initial commit — portfolio"
git branch -M main
git remote add origin https://github.com/EmmanuelDequader/porte_Folio.git
git push -u origin main
```

## 5. Déployer sur Vercel

1. Va sur [vercel.com](https://vercel.com) et connecte-toi avec ton compte GitHub.
2. Clique sur **Add New → Project**.
3. Sélectionne le repo `porte_Folio`.
4. Vercel détecte automatiquement Vite : garde les réglages par défaut
   (Build Command: `vite build`, Output Directory: `dist`).
5. Clique sur **Deploy**.

Le fichier `vercel.json` à la racine redirige toutes les routes vers `index.html`
(`rewrites`), ce qui est **indispensable** pour que les liens directs d'articles
(`/actualites/...`) fonctionnent après un rechargement de page ou un accès direct au lien —
sans cette règle, Vercel renverrait une 404 sur ces routes.

À chaque `git push` sur `main`, Vercel redéploie automatiquement.

## 6. Régénérer le CV (PDF)

Le CV téléchargeable (`public/cv-dequader.pdf`) est généré à partir de `cv/cv-source.html`
(HTML/CSS autonome, photo dans `cv/assets/`). Pour le régénérer après une modification :

```bash
"C:\Program Files\Google\Chrome\Application\chrome.exe" --headless --disable-gpu ^
  --print-to-pdf="public\cv-dequader.pdf" --print-to-pdf-no-header ^
  "file:///C:/chemin/vers/portfolio-algotech/cv/cv-source.html"
```

(Remplacer le chemin par le chemin absolu réel du projet ; Edge fonctionne aussi avec les
mêmes options.)

## Structure du projet

```
src/
  data/content.js         ← tout le texte à personnaliser (FR/EN)
  components/
    Header.jsx
    Hero.jsx
    About.jsx
    NewsSection.jsx        ← grille des articles d'actualité
    ArticleView.jsx         ← page d'un article (route /actualites/:id)
    ImageLightbox.jsx        ← visionneuse plein écran pour les photos
    Distinctions.jsx
    ServicesSection.jsx
    Skills.jsx
    Projects.jsx
    Contact.jsx
    Footer.jsx
  App.jsx                  ← routes (react-router-dom)
  main.jsx
  index.css
public/
  news/                    ← photos réelles utilisées dans les articles
cv/
  cv-source.html           ← source HTML du CV, régénérable en PDF
vercel.json                ← redirection SPA pour les liens d'articles
```
