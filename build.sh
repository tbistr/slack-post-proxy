#!/bin/bash
bun build index.ts --outdir dist --target browser --minify
BOOKMARKLET="javascript:(function(){"$(cat ./dist/index.js | tr -d '\n')"})()"
echo "$BOOKMARKLET" > ./dist/bookmarklet.js
