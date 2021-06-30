import React from "react"
import { View, Text, StyleSheet, ActivityIndicator } from "react-native"
import { UserContext } from "../../Contexts/UserContext"
import MapBoxGL from "@react-native-mapbox-gl/maps"

// import { Container } from './styles';
const AnyReactComponent = ({ text }) => <div>{text}</div>

const MapScreen = () => {
  MapBoxGL.setAccessToken(
    "pk.eyJ1IjoicmFmYWVsYnJhZGF4IiwiYSI6ImNrcWhmaHdkcTFsaTkyd252MXE2N2dmOTMifQ.VrvDbkGCywqMnBfq3hk6Rg"
  )
  const { user } = React.useContext(UserContext)

  return (
    <View style={styles.container}>
      <MapBoxGL.MapView
        styleURL={MapBoxGL.StyleURL.Street}
        zoomLevel={17}
        centerCoordinate={[Number(user.longitude), Number(user.latitude)]}
        style={{ flex: 1 }}
      >
        <MapBoxGL.Camera
          zoomLevel={17}
          centerCoordinate={[Number(user.longitude), Number(user.latitude)]}
          animationMode={"flyTo"}
          animationDuration={0}
        ></MapBoxGL.Camera>
      </MapBoxGL.MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#06b1ff",
    width: "100%",
    height: "100%",
  },
})

export default MapScreen
