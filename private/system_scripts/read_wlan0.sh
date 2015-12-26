#!/bin/bash

if  [ "$1" = "addr" ]; then
	awk ' f && NR==f+1; /iface wlan0/ {f=NR}' /etc/network/interfaces | awk '{print $2}'
elif [ "$1" = "netmask" ]; then
	awk ' f && NR==f+2; /iface wlan0/ {f=NR}' /etc/network/interfaces | awk '{print $2}'
elif [ "$1" = "gateway" ]; then
        awk ' f && NR==f+3; /iface wlan0/ {f=NR}' /etc/network/interfaces | awk '{print $2}'
fi