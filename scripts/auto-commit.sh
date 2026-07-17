#!/usr/bin/env bash
# Runs after every successful `next build` (see package.json "postbuild").
# Commits and pushes automatically — no per-run confirmation, by design.
set -euo pipefail

cd "$(dirname "$0")/.."

if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
  echo "[auto-commit] not a git repository, skipping."
  exit 0
fi

git add -A

if git diff --cached --quiet; then
  echo "[auto-commit] no changes to commit."
  exit 0
fi

timestamp=$(date "+%Y-%m-%d %H:%M:%S")
git commit -m "Auto-commit: build passed at ${timestamp}" --quiet
echo "[auto-commit] committed."

branch=$(git rev-parse --abbrev-ref HEAD)

if git push origin "${branch}" --quiet; then
  echo "[auto-commit] pushed to origin/${branch}."
else
  echo "[auto-commit] commit created locally but push failed — push manually."
fi
