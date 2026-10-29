# personal-website

Source for <https://haoliu4391.github.io/personal-website/>.

- Text on the home page (intro, news, publications, projects, education): `constants/index.ts`
- Friends and books: `data/friends.ts`, `data/books.ts`
- Paper figures: `public/figures/`, CV: `public/Hao_Liu_CV.pdf`

```bash
npm install
npm run dev     # preview at http://localhost:3000/personal-website
npm run build   # static site in out/
```

Pushing to `main` builds and deploys through GitHub Pages (`.github/workflows/deploy.yml`).
