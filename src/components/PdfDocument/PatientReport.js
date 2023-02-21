import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    border: 1,
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },

  infoWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 12,
    margin:5,
   
  },

  infoText: {
    marginTop: 10,
    fontStyle: "bold",
    fontWeight: 20,
    fontSize: 13,
   margin:5
  },

  tdmText: {
    fontSize: 8,
    alignSelf: "flex-end",
  },
});

const PatientReport = () => (
  <>
    <View style={styles.container}>
      <Text style={{ marginBottom: 8 }}>Symptoms</Text>
      <View style={styles.infoWrapper}>
        <Text>1. Fatigue</Text>
        <Text>2. Hyper tension</Text>
        <Text>3. Cough</Text>
        <Text>4. Fever</Text>
      </View>
    </View>
    <View style={styles.container}>
      <View style={styles.infoWrapper}>
        <Text>Test Parameter</Text>
        <Text>Normal Value </Text>
        <Text>Test Value</Text>
        <Text>Status</Text>
      </View>
      <View style={styles.infoWrapper}>
        <Text>Sugar</Text>
        <Text>140</Text>
        <Text style={{ marginLeft: 8 }}>179</Text>
        <Text>High</Text>
      </View>
      <View style={styles.infoWrapper}>
        <Text>Blood</Text>
        <Text>120,80</Text>
        <Text style={{ textAlign: "center" }}>126,97</Text>
        <Text>High</Text>
      </View>
      <View style={styles.infoWrapper}>
        <Text>Heaat</Text>
        <Text>60-100</Text>
        <Text>70-80</Text>
        <Text>High</Text>
      </View>
      <View style={styles.infoWrapper}>
        <Text>Spo2</Text>
        <Text>100 </Text>
        <Text>99</Text>
        <Text>High</Text>
      </View>
    </View>
  </>
);

export default PatientReport;
