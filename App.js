/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';
import Share from 'react-native-share';

type Props = {};
const storeName = Platform.OS === 'android' ? 'Play Store.' : 'App Store.' ;
const shareText = 'Please download ShareApp from '  + storeName;
const WHATSAPP_TYPE = "whatsapp";
const SMS_TYPE = "sms";
const EMAIL_TYPE = "email";
const MESSENGER_TYPE = "messenger";

export default class App extends Component<Props> {

  constructor(props){
    super(props);
  }

  shareData(type){
    switch(type){
      case WHATSAPP_TYPE:
            this.singleShare(Share.Social.WHATSAPP);
            break;
      case SMS_TYPE: 
           this.multipleShare(Share.Social.SMS);
           break;
      case EMAIL_TYPE:
           this.singleShare(Share.Social.EMAIL);
           break;
      case MESSENGER_TYPE:
           this.multipleShare(Share.Social.MESSENGER) ;
           break;
      default:
          Alert.alert("Something Went Wrong");         
    }
  }

  singleShare(socialOption){
    const shareOptions = {
      title: 'Share via',
      message: shareText,
      url: 'https://www.google.com/',
      social: socialOption
    };
    Share.shareSingle(shareOptions);
  }

  multipleShare(socialOption){
    const shareOptions = {
      title: 'Share via',
      message: shareText,
      url: 'https://www.google.com/',
      social: socialOption
    };
    Share.open(shareOptions)
    .then((res) => { console.log(res) })
    .catch((err) => { err && console.log(err); });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.shareData(WHATSAPP_TYPE) }
            title="Whatsapp"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.shareData(SMS_TYPE) }
            title="SMS Message"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.shareData(EMAIL_TYPE)}
            title="Email"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.shareData(MESSENGER_TYPE) }
            title="Messenger"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  buttonContainer: {
    margin: 20
  },

});
