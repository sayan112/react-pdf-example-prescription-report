import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },

  topWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  addressText: {
    color: 'white',
    marginTop: 5,
    fontSize: 10,
  },
  infoWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  infoText: {
    color: 'white',
    marginTop: 10,
    fontSize: 14,
  },

  tdmText: {
    color: 'white',
    fontSize: 8,
    alignSelf: 'flex-end',
  },
});

const Header = () => (
  <View style={styles.container}>
    <View>
      <Text style={styles.tdmText}>TDM ID:5454</Text>
    </View>
    <View style={styles.topWrapper}>
      <Text style={styles.headingText}>First Care Pharmacy</Text>
      <Text style={styles.addressText}>
        23/45, new avenue, Mettu street, Velachery, Chennai, 600032
      </Text>
    </View>
    <View style={styles.infoWrapper}>
      <View>
        <Text style={styles.infoText}>Doctor: Kunal sharma</Text>
        <Text style={styles.infoText}>DoctorId: 1234567890</Text>
      </View>
      <View>
        <Text style={styles.infoText}>Date: 17/02/2023</Text>
        <Text style={styles.infoText}>Time: 10:20 AM</Text>
      </View>
    </View>
  </View>
);

export default Header;
