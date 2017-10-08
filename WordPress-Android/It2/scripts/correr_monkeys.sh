#!/bin/sh

adb -s emulator-5554 shell monkey -p org.wordpress.android -v -s 1234 --ignore-security-exceptions --kill-process-after-error --monitor-native-crashes 100000 > logs/cel_log.txt & adb -s emulator-5556 shell monkey -p org.wordpress.android -v -s 1234 --ignore-security-exceptions --kill-process-after-error --monitor-native-crashes 100000 > logs/tablet_log.txt