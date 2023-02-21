import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    border: 1,
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },

  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  infoText: {
    marginTop: 10,
    fontStyle: "bold",
    fontWeight:20,
    fontSize: 13,
  },

  tdmText: {
    fontSize: 8,
    alignSelf: 'flex-end',
  },
});

const PatientInfo = ({ firstName }) => (
  <View style={styles.container}>
    <View style={styles.infoWrapper}>
      <View>
        <Text style={[styles.infoText, { marginTop: 0 }]}>
          Patient Name: {firstName}
        </Text>
        <Text style={styles.infoText}>Patient Id: 1234567890</Text>
        <Text style={styles.infoText}>Address : Gurgaon , silicon vally , India </Text>
      </View>
      <View>
        <Text style={[styles.infoText, { marginTop: 0 }]}>Sex: Male</Text>
        <Text style={styles.infoText}>Age: 24</Text>
      </View>
    </View>
  </View>
);

export default PatientInfo;
