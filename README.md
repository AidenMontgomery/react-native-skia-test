# React-Native-Skia-Test
This app was created to play around with [react-native-skia](https://github.com/Shopify/react-native-skia).

After running, toggle on the Mock Data switch to start seeing the visualisation.

This has only been tested on iOS.

It is my first attempt at working with react-native-skia, so I am sure there are things that have been done in strange ways. (e.g. the animated lines on the circumference have been achieved by animating the trim on a path!)

## Visualisation
To investigate the abilities of [react-native-skia](https://github.com/Shopify/react-native-skia), this app attempts to replicate the UI from [GivEnergy's](https://www.givenergy.co.uk) iOS app, which displays the current status of solar panels, home, battery and grid power.

[Gif showing GivEnergy vs Skia Test](https://constructivecoding.com/skiatest2.gif)

## Data Sources
On my network the GivEnergy inverter is sending readings to an MQTT server, which is being monitored by a [Node-RED](https://nodered.org) instance, which processes the messages and puts them into an [InfluxDB](https://www.influxdata.com) bucket.
NodeRed is then being used as an HTTP server to provide this application with the most recent readings from InfluxDB.

If you want to know more about this setup please let me know.
