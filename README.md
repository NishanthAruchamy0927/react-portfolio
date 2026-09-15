# Nishanth A S — Portfolio (React)

A personal portfolio built with React + Vite. Dark/light theme, interactive skills tabs,
project cards, timeline for experience/education, and a contact section.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This outputs a static site to the `dist/` folder — this is what you deploy.

## Add your resume

Drop your final `resume.pdf` into the `public/` folder. It will be served at `/resume.pdf`,
which is already wired up to the "Download resume" button (see `src/data/content.js`).

## Edit your content

All personal info, skills, projects, experience, education, and achievements live in one file:
`src/data/content.js`. Edit that file and the whole site updates.

---

## 1. Push to GitHub

```bash
cd react-portfolio
git init
git add .
git commit -m "Initial commit: React portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

(Create the empty repo first at https://github.com/new — don't initialize it with a README so
there's no merge conflict with this push.)

## 2. Deploy to Vercel

**Easiest way (no CLI):**
1. Go to https://vercel.com/new
2. Import the GitHub repo you just pushed.
3. Vercel auto-detects Vite — leave the defaults (Build Command: `npm run build`,
   Output Directory: `dist`).
4. Click **Deploy**. You'll get a live URL like `https://your-repo-name.vercel.app`.

**Or via CLI:**
```bash
npm install -g vercel
vercel login
vercel --prod
```

## 3. Upload the project to an AWS S3 bucket

This is for hosting a copy of your build output (or the source) in S3 — separate from Vercel.

```bash
# Build the static site first
npm run build

# Create a bucket (skip if you already have one)
aws s3 mb s3://your-bucket-name --region ap-south-1

# Enable static website hosting (optional, if you want S3 itself to serve it)
aws s3 website s3://your-bucket-name --index-document index.html

# Upload the build output
aws s3 sync dist/ s3://your-bucket-name --acl public-read
```

Your site will then be reachable at:
`http://your-bucket-name.s3-website-<region>.amazonaws.com`

(Requires the AWS CLI installed and configured with `aws configure` using your access key.)

## GitHub Student Developer Pack

If you're verified for the GitHub Student Developer Pack (https://education.github.com/pack),
relevant perks for this project:
- **GitHub Pro** — free while a student, private repos with extra features.
- **Namecheap** — a free `.me` domain for a year, which you can point at your Vercel deployment
  via Vercel's custom domain settings.
- Vercel itself doesn't require the Student Pack — its free Hobby tier already covers a project
  like this.
