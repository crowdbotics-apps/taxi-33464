import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8feb/e549/8f3c4b89edbb4711896afd9c6ebdd53f"
        }}
        style={styles.ImageBackground_1_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2cc4/349d/06d3832b4651880894dbbe25d3554ad1"
        }}
        style={styles.ImageBackground_1_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6946/6d5b/c4a5972e9532130e14f75fd037bb274b"
        }}
        style={styles.ImageBackground_1_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f72c/cb93/92ca94c613ae4f82f8bbdec2be503446"
        }}
        style={styles.ImageBackground_1_6}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2cc4/349d/06d3832b4651880894dbbe25d3554ad1"
        }}
        style={styles.ImageBackground_1_7}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58a4/8038/edc48f533ed6f6e558092f8dcda033fc"
        }}
        style={styles.ImageBackground_1_8}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(207, 215, 223, 1)" },
  View_2: { height: hp("164%") },
  ImageBackground_1_3: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("122%"),
    minHeight: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("60%"),
    resizeMode: "cover"
  },
  ImageBackground_1_4: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("122%"),
    minHeight: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("-72%")
  },
  ImageBackground_1_5: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("122%"),
    minHeight: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("76%"),
    resizeMode: "cover"
  },
  ImageBackground_1_6: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("122%"),
    minHeight: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("-57%"),
    resizeMode: "cover"
  },
  ImageBackground_1_7: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("122%"),
    minHeight: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("118%"),
    resizeMode: "cover"
  },
  ImageBackground_1_8: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("122%"),
    minHeight: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("-15%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
