#!/bin/bash
if ! [ -x "$(command -v npm)" ]; then
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
  nvm i 12
  nvm use 12
fi

npm run build
