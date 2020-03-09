# chat_react-native

git clone https://github.com/BurasovArtem/chat-react-native.git or download the archive from github

Console "expo init project"

Move downloaded files to the root folder with replacement

Console "npm intall react-navigation react-navigation-stack react-native-safe-area-context react-native-screens @react-native-community/masked-view firebase"

Сreate project on the site https://console.firebase.google.com

Create a db on the "Database" tab, go to the "Realtime Database" tab: on the "Rules" tab, change all rights to "true", on the "Data" tab, delete the default db

Create the application in db "Web-application" and replace the apiKey in the AuthLoadingScreen.js file
