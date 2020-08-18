#!/bin/bash



echo "The App must have been built with a01-create.sh"
echo "Enter a folder name of the app you wish to re-build"
read wow4

#cordova create $wow4 com.$wow4.$wow4 $wow4
#cordova create hello com.example.hello HelloWorld


cd $wow4


#cordova platform add android

cordova build android --no-telemetry

number=$RANDOM

cp /workspace/ionic-webcam-help/$wow4/platforms/android/app/build/outputs/apk/debug/app-debug.apk /workspace/ionic-webcam-help/public/$wow4-app-debug$number.apk




echo "<li> Next rebuild <a href="$wow4-app-debug$number.apk">$wow4-app-debug$number.apk</a><br>" >> /workspace/ionic-webcam-help/public/index.html

#open the preview pane
apachectl start
gp await-port 8001
gp preview $(gp url 8001)

echo "Refresh your web browser!"
echo "You must delete your old download on your phone or the installation will give an error as the file name has changed"
