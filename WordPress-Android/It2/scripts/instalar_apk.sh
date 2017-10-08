#!/bin/sh

# Instalar apk en los emuladores, debe estar en esta carpeta. Ver `adb devices` ya que pueden cambiar
adb -s emulator-5554 install org.wordpress.android.apk & adb -s emulator-5556 install org.wordpress.android.apk
