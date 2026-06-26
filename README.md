# BLTS Patch Notes site

A tiny static page that lists game updates. No build step, no framework — just
`index.html` + `patch-notes.js`. Works opened directly (double-click) or hosted.

## Add a patch
Edit **`patch-notes.js`** and add a new object to the **top** of the array:

```js
{
  version: "0.7.0",
  date: "2026-07-01",
  title: "Short headline",
  notes: [
    { tag: "New",      text: "Something added." },
    { tag: "Improved", text: "Something better." },
    { tag: "Fixed",    text: "Something fixed." },
    { tag: "Balance",  text: "A tuning change." },
  ],
},
```

Save, then redeploy (or just `git push` if you're on GitHub Pages / Netlify auto-deploy).

## Refresh the commit history
The page also shows the full git commit history (collapsible), generated into
`commits.js`. Regenerate it after new commits with this one-liner (from the repo root):

```bash
{ echo "// Auto-generated from: git log. To refresh, re-run the command in README.md."; \
  echo "window.COMMITS = ["; \
  git log --pretty=tformat:'%H%x1f%ad%x1f%s' --date=short | while IFS=$'\x1f' read -r h d s; do \
    s=${s//\\/\\\\}; s=${s//\"/\\\"}; printf '  { hash: "%s", date: "%s", subject: "%s" },\n' "${h:0:7}" "$d" "$s"; \
  done; echo "];"; } > patchnotes/commits.js
```

## Host it free (pick one)

### GitHub Pages — most GitHub-native
GitHub's free plan only serves Pages from **public** repos, so put this folder in a
small public repo (patch notes are public anyway):

1. Create a public repo, e.g. `blts-patchnotes`.
2. Copy this `patchnotes/` folder's contents to its root (`index.html` at the top).
3. Repo **Settings → Pages → Source: Deploy from a branch → main / root**.
4. Live at `https://<user>.github.io/blts-patchnotes/` in ~1 min.

### Netlify / Cloudflare Pages — works from a PRIVATE repo too
1. Sign in with GitHub (free).
2. "Add new site → Import" this repo; set the **publish/output directory** to `patchnotes`.
3. Auto-deploys on every push; gives you a free `*.netlify.app` URL (custom domain optional).

### Zero-repo option
Drag this `patchnotes` folder onto <https://app.netlify.com/drop> — instant free URL,
no git needed. (Re-drag to update.)

## Notes
- `patch-notes.js` is loaded via a `<script>` tag (not `fetch`), so the page also works
  from `file://` with no server.
- This folder lives outside `Assets/`, so Unity ignores it.
