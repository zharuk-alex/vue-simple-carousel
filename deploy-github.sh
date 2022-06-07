#!/usr/bin/env sh
# abort on errors
set -e

git branch -M main
git add .
git commit -m 'deploy'

git push origin main
