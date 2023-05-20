# mathpaws
Mobile app created by Nathalie Smabrekke

# Building the app
## Step 1: Install Dependencies
run "npm install" to install the npm modules required to build the app
## Step 2: Select Android in Metro
run "npx react-native start" and wait for metro to load. After metro loaded, press "a" in the command prompt
## Step 3: Fix EPERM Error.
If you get the EPERM error, cancel the build using "ctrl+c" in command prompt, and change security permissions of the project folder. Give the user "Everyone" all the permissions. After all files' security settings are updated, run "npx react-native start" to run metro and build app in debug mode. Or to build the release apk, run "npx react-native run-android --mode=release". Wait for build to finish.
## Step 4: Sign APK file
After the build is completed, open the "android" folder and run "./gradlew assembleRelease" in terminal. Wait for process to finish.
## Step 5: Install APK
After the steps above are finished, the finished app will be found in the folder: ".\yourprojectname\android\app\build\outputs\apk\release\" with the name "app-release.apk".
