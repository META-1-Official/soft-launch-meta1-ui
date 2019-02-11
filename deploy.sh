#!/bin/bash
# Deploy script (the Mac OS X version), to execute please use: npm run deploy

npm run build && cd build && cd dist && git init && git remote add origin https://github.com/Wirelery/fine-arts-classic.git && touch CNAME && echo "meta.lampgram.com" >> CNAME && git add . && git commit -m "minified react build deployed to production by MindfulMe's git bot" && git push origin master --force
