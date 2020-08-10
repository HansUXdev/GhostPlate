# FROM gitpod/workspace-full

# # Install mongodb
# RUN sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
# RUN echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
# RUN sudo apt-get update \
#  && sudo apt-get install -y mongodb-org \
#  && sudo apt-get clean \
#  && sudo rm -rf /var/lib/apt/lists/*
# RUN sudo mkdir -p /data/db \
#  && sudo chown gitpod:gitpod -R /data/db


FROM gitpod/workspace-mongodb

# The following is from https://github.com/hpssjellis/ionic-webcam-help 
USER root

RUN apt-get update \
    && apt-get install -y default-jdk \
    && apt-get clean && rm -rf /var/cache/apt/* && rm -rf /var/lib/apt/lists/* && rm -rf /tmp/*

USER gitpod
  
RUN mkdir -p /home/gitpod/rocksetta                                                                            \ 
    && mkdir -p /home/gitpod/rocksetta/logs                                                                    \ 
    && mkdir -p /home/gitpod/.android                                                                          \
    && touch /home/gitpod/.android/repositories.cfg                                                            \
    && touch /home/gitpod/rocksetta/logs/mylogs.txt                                                            \
    && echo "Installation start, made some folders in /home/gitpod" >> /home/gitpod/rocksetta/logs/mylogs.txt  \
    && echo "Try installing cordova, ionic, qrcode, @ionic/lab, cordova-res, native-run" >> /home/gitpod/rocksetta/logs/mylogs.txt  \
    && npm install -g cordova ionic qrcode @ionic/lab cordova-res native-run                                   \
    && echo "Back to root to install the Android sdk" >> /home/gitpod/rocksetta/logs/mylogs.txt                
    
# Give back control
USER root

 ENV ANDROID_SDK_ROOT /home/gitpod/.android
 ENV PATH ${PATH}:${ANDROID_SDK_ROOT}/tools:${ANDROID_SDK_ROOT}/tools/bin:${ANDROID_SDK_ROOT}/platform-tools

WORKDIR /home/gitpod/.android

RUN wget https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip     \
    && unzip sdk-tools-linux-4333796.zip                                          \                                                             
    && rm sdk-tools-linux-4333796.zip                                             \
    && chmod -R 775 /home/gitpod/.android                                         \
    && chown -R gitpod:gitpod /home/gitpod/.android                               


USER gitpod


RUN  echo "Here is the android sdk" >> /home/gitpod/rocksetta/logs/mylogs.txt             \
     && ls -ls /home/gitpod/.android >> /home/gitpod/rocksetta/logs/mylogs.txt            \
     &&  echo "Installation all done" >> /home/gitpod/rocksetta/logs/mylogs.txt          


# Give back control
USER root


# Cleaning
RUN apt-get clean