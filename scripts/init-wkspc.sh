#!/usr/bin/env bash
rm -rf test-ui
bit new react-wkspc test-ui --aspect ashwanth1109.looper/generators/react-wkspc
cd test-ui || exit 1
bit install
