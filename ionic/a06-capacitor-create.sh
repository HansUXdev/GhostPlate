#!/bin/bash



echo "The App must have been built with a04-ionic-start.sh"
echo "Enter a folder name of the app you wish to re-build"
read wow4





npx @capacitor/cli create --npm-client npm  $wow4 $wow4 com.$wow4.$wow4 $wow4





cd $wow4


npx cap add android

./android/gradlew

cd android

export ANDROID_HOME=/home/gitpod/.android

./gradlew assembleDebug




#npx cap open android
#npx cap serve

#echo "Not sure how this works"



number=$RANDOM

cp /workspace/ionic-webcam-help/$wow4/android/app/build/outputs/apk/debug/app-debug.apk /workspace/ionic-webcam-help/public/$wow4-app-debug$number.apk


qrcode -o /workspace/ionic-webcam-help/public/qrout.png $(gp url 8001);
echo "<br>Just a QR code to the same webpage <br><img src='qrout.png'><br>" >> /workspace/ionic-webcam-help/public/index.html

echo "<li><a href="$wow4-app-debug$number.apk">$wow4-app-debug$number.apk</a><br>" >> /workspace/ionic-webcam-help/public/index.html

#open the preview pane
apachectl start
gp await-port 8001
gp preview $(gp url 8001)

#echo "Refresh your web browser!"
