#!/bin/bash
bun build ./src/bookmarklet.ts --outdir dist --target browser --minify
BOOKMARKLET="javascript:(function(){"$(cat ./dist/bookmarklet.js | tr -d '\n')"})()"
echo "$BOOKMARKLET" > ./dist/bookmarklet.js
