#!/bin/bash -ue -o pipefail

if [[ ! -z $(git status -s) ]]; then
  echo "Tree is dirty. Make sure everything is committed first."
  exit 1
fi

hugo
cd public && git add --all && git commit -m "Publishing $(git rev-parse --short HEAD) to gh-pages" && cd ..
