# Déploiement sur Vercel via Git

## Étapes pour déployer

### 1. Créer un dépôt GitHub

1. Allez sur [github.com](https://github.com)
2. Cliquez sur "New repository"
3. Nommez-le `zizounation` (ou autre nom)
4. Ne cochez PAS "Initialize with README"
5. Cliquez sur "Create repository"

### 2. Connecter le projet local à GitHub

```bash
cd /Users/admin/Desktop/zizounation

# Ajouter le remote GitHub (remplacez USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/USERNAME/zizounation.git

# Pousser le code
git branch -M main
git push -u origin main
```

### 3. Déployer sur Vercel

#### Option A : Via l'interface web (Recommandé)

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur "Sign Up" ou "Log In"
3. Cliquez sur "Add New Project"
4. Importez votre dépôt GitHub `zizounation`
5. Vercel détectera automatiquement Next.js
6. Cliquez sur "Deploy"
7. Attendez 2-3 minutes
8. Votre site sera en ligne ! 🎉

#### Option B : Via la CLI

```bash
# Se connecter à Vercel
vercel login

# Déployer
vercel

# Suivre les instructions
```

### 4. Configuration automatique

Vercel configurera automatiquement :
- ✅ Framework: Next.js
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `.next`
- ✅ Install Command: `npm install`

### 5. Domaine personnalisé (Optionnel)

Après le déploiement :
1. Allez dans les paramètres du projet sur Vercel
2. Section "Domains"
3. Ajoutez votre domaine personnalisé

## Variables d'environnement (si nécessaire)

Si vous avez besoin de variables d'environnement :
1. Vercel Dashboard → Votre projet → Settings → Environment Variables
2. Ajoutez vos variables

## Mises à jour futures

Pour mettre à jour le site :
```bash
git add .
git commit -m "Description des changements"
git push
```

Vercel redéploiera automatiquement ! 🚀

## Support

- Documentation Vercel : https://vercel.com/docs
- Support Next.js : https://nextjs.org/docs

