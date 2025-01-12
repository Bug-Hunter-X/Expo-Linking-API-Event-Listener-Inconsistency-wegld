# Expo Linking API Event Listener Inconsistency

This repository demonstrates a bug in Expo's `Linking` API where the `addEventListener` for deep links does not always trigger when the app is already open.  This can lead to unreliable deep link handling.

## Bug Description
The issue occurs when a deep link is tapped while the application is already running. The `Linking.addEventListener` may fail to fire its callback, preventing the app from handling the deep link correctly.  This is inconsistent and not always reproducible, making debugging challenging. 

## Steps to Reproduce
1. Clone the repository.
2. Run the app using Expo Go.
3. Open a browser or another app and try to access the configured deep link.  The listener may or may not work as intended. 

## Solution
The provided `LinkingBugSolution.js` demonstrates a workaround that involves checking for initial URL and using `Linking.getInitialURL` to handle potential cases where the event listener didn't fire.