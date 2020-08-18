#!/bin/bash


echo "Enter a folder name, no spaces, no dashes, underscore allowed, for your app and folder example: helloWorld"
read wow4

cordova create $wow4 com.$wow4.$wow4 $wow4 

cd $wow4


cordova platform add android


cordova build android --no-telemetry

number=$RANDOM

cp /workspace/ionic-webcam-help/$wow4/platforms/android/app/build/outputs/apk/debug/app-debug.apk /workspace/ionic-webcam-help/public/$wow4-app-debug$number.apk



qrcode -o /workspace/ionic-webcam-help/public/qrout.png $(gp url 8001);
echo "<br>Just a QR code to the same webpage <br><img src='qrout.png'><br>" >> /workspace/ionic-webcam-help/public/index.html

echo "<li><a href="$wow4-app-debug$number.apk">$wow4-app-debug$number.apk</a><br>" >> /workspace/ionic-webcam-help/public/index.html

#open the preview pane
apachectl start
gp await-port 8001
gp preview $(gp url 8001)

#echo "Refresh your web browser!"
