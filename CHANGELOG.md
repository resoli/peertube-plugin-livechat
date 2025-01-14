# Changelog

## ???

* Code is now in Typescript

## v1.0.8

* Fix: typo that can prevent settings chat-only-locals to work

## v1.0.7

* New tutorial to setup [Prosody on the Peertube server](documentation/tutorials/prosody.md)
* Add link to documentation in the settings page.

## v1.0.6

* New icons by [Porrumentzio](https://github.com/Porrumentzio)

## v1.0.5

* New buttons and logo.
* Fix: changing default value to false for every checkbox settings (Peertube bug in <=3.0.1: https://github.com/Chocobozzz/PeerTube/issues/3838).

## v1.0.4

### Features

* Translations for ca, eo, es and eu. Thanks to [Porrumentzio](https://github.com/Porrumentzio).
* UX improvments. Buttons are now icons, and placed on top of the chat container.

### Bug Fixes

* Fix buttons disappearing when lives started of finished.

## v1.0.3

### Various changes

* Using converseJS ^7.0.4
* Updating documentation

## v1.0.2

### Bug fixes

* Quick fix: add a min-height for the iframe, so that it is not too tiny when under the video.

## v1.0.1

### Bug fixes

* When installing the plugin from npm, the node_modules don't come with: copying converseJS to dist folder.

## v1.0.0

### Features

* Optional Builtin ConverseJS
* Option for enabling live only on local videos
* The «open in new window» button is optional

## v0.0.8

### Features

* The chat is displayed on the right of the video

## v0.0.7

### Bug Fixes

* Fix incomplete commit

## v0.0.6

### Features

* Use eslint to lint the code

### Bug fixes

* Fix dom positionning
* Chat should be displayed for waiting and ended lives
* Chat and chat buttons must be cleaned out of the dom on navigation

## v0.0.5

* Initial release
