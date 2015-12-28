#!/bin/bash

#if  [ "$1" = "addr" ]; then
#	awk ' f && NR==f+1; /iface wlan0/ {f=NR}' ./interfaces | awk '{print $2}'
#elif [ "$1" = "netmask" ]; then
#	awk ' f && NR==f+2; /iface wlan0/ {f=NR}' ./interfaces | awk '{print $2}'
#elif [ "$1" = "gateway" ]; then
#        awk ' f && NR==f+3; /iface wlan0/ {f=NR}' ./interfaces | awk '{print $2}'
#fi

#Test file
file='./test/interfaces'
#System interfes file
#file='/etc/network/interfaces'

addr=$(awk ' f && NR==f+1; /iface wlan0/ {f=NR}' $file | awk '{print $2}')
netmask=$(awk ' f && NR==f+2; /iface wlan0/ {f=NR}' $file | awk '{print $2}')
gateway=$(awk ' f && NR==f+3; /iface wlan0/ {f=NR}' $file | awk '{print $2}')

echo '{"eth0":{"addr":"'$addr'","netmask":"'$netmask'","gateway":"'$gateway'"}}'