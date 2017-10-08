#!/bin/sh

# Correr AVD 'test' y AVD 'test-tablet', cambiar según sea necesario
emulator -avd test & emulator -avd test-tablet -skin 1280x800
