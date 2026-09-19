# AtelierPilot

Application web de révision pour le cours de charpenterie et menuiserie, construite à partir de deux documents fournis par l'utilisateur :

- Module 1 : La sécurité
- Module 2 : L'outillage

Le labo du minot de pommes n'est pas intégré à l'application.

## Contenu

- Sécurité : risques, EPI et règles générales avec les outils
- Mesures : pouce, pied, verge, fractions et convertisseur pouces → cm
- Outillage : catégories d'outils manuels et outils électriques
- Machines à bois : liste des machines du module 2 avec champs à compléter en atelier
- Quiz : questions basées uniquement sur les informations écrites dans les notes
- Sources : explication de la provenance du contenu

## Fidélité aux cours

Les documents contiennent plusieurs espaces volontairement vides à compléter pendant les démonstrations en atelier. AtelierPilot ne remplit pas ces trous avec des connaissances externes : ils restent indiqués comme « à compléter ».

## Développement local

```bash
npm install
npm run dev
```

Puis ouvrir `http://localhost:3000`.

## Production

```bash
npm run build
```

Le projet utilise `output: "export"`, ce qui génère un site statique dans `out/`.

## Déploiement GitHub Pages

Le workflow `.github/workflows/deploy-pages.yml` construit et publie automatiquement le site à chaque push sur `main`.

Dans GitHub, aller dans **Settings → Pages → Build and deployment → Source** et choisir **GitHub Actions** si nécessaire.
