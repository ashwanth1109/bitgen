#!/usr/bin/env bash

bit logout
bit login --machine-name "$1"
bit config get user.token
