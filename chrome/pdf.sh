alias chrome="/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome"
alias chrome-canary="/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary"
alias chromium="/Applications/Chromium.app/Contents/MacOS/Chromium"

# --remote-debugging-port=9222
chrome-canary --headless --disable-gpu --hide-scrollbars --screenshot --window-size=1280,5371 https://www.google.com


#echo "pdf"
#chrome-canary --headless --disable-gpu --print-to-pdf https://www.meizu.com/
