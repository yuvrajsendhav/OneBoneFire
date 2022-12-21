import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomHeader from './CustomHeader';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
const More = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.horizontalLine} />
      <View style={styles.imgUpload}>
        <Text style={styles.rp}>RP</Text>
      </View>
      <View style={styles.userData}>
        <Text style={styles.userName}>RituRaj Pandey</Text>
        <Text style={styles.userInc}>OK Botanicals Inc</Text>
        <Text style={styles.userInc}>
          Up to 15 Listings
          <Text style={{fontWeight: 'bold', color: 'black'}}>(Active)</Text>
        </Text>
      </View>

      <View style={styles.First}>
        <View style={styles.horizontalLine} />
        <View style={styles.criteriaRow}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => alert('Hello User')}>
            <Icons
              style={styles.icon}
              name="account-outline"
              color="black"
              size={30}
            />

            <Text style={styles.text}>User Account</Text>
            <Icons
              style={{marginLeft: 161, marginTop: 16}}
              name="chevron-right"
              color="black"
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.criteriaRow}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => alert('Business Profile')}>
          <Icons
            style={styles.icon}
            name="briefcase-variant-outline"
            color="black"
            size={30}
          />
          <Text style={styles.text}>Business Profile</Text>
          <Icons
            style={{marginLeft: 143, marginTop: 16}}
            name="chevron-right"
            color="black"
            size={30}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.horizontalLine} />

      <View style={styles.criteriaRow}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => alert('Contact Support')}>
          <Icons
            style={styles.icon}
            name="face-agent"
            color="black"
            size={30}
          />

          <Text style={styles.text}>Contact Support</Text>
          <Icons
            style={{marginLeft: 141, marginTop: 16}}
            name="chevron-right"
            color="black"
            size={30}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.horizontalLine} />
      <View style={styles.criteriaRow}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => alert('Terms and Conditions')}>
          <Icons
            style={styles.icon}
            name="book-open-page-variant"
            color="black"
            size={30}
          />
          <Text style={styles.text}>Terms and Conditions</Text>
          <Icons
            style={{marginLeft: 105, marginTop: 16}}
            name="chevron-right"
            color="black"
            size={30}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.horizontalLine} />
      <View style={styles.criteriaRow}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => alert('Privacy Policy')}>
          <Icons
            style={styles.icon}
            name="file-lock-outline"
            color="black"
            size={30}
          />
          <Text style={styles.text}>Privacy Policy</Text>
          <Icons
            style={{marginLeft: 155, marginTop: 16}}
            name="chevron-right"
            color="black"
            size={30}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.horizontalLine} />
    </View>
  );
};
export default More;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    marginTop: 15,
  },
  criteriaRow: {
    flexDirection: 'row',
    paddingLeft: 25,
    width: '100%',
  },

  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  text: {
    paddingLeft: 25,
    paddingBottom: 15,
    marginBottom: 15,
    paddingTop: 15,
    color: 'black',
  },
  icon: {
    paddingTop: 12,
  },
  iconContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  imgUpload: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    borderRadius: 70 / 2,
    marginTop: 30,
    backgroundColor: '#abb0b0',
  },
  rp: {
    fontSize: 30,
    marginLeft: 15,
    marginTop: 12,
    color: 'black',
  },
  userName: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  userInc: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  userDetails: {
    marginLeft: 10,
    fontSize: 18,
    marginTop: 5,
  },
  First: {
    marginTop: 10,
  },
});
