import React from 'react';
import { Page, Document, StyleSheet, Text, View , Image} from '@react-pdf/renderer';
import promotionImage from '../../images/promotion.png';
import PatientInfo from "./PatientInfo";
 

import Header from './Header';
import PatientReport from './PatientReport';


// Create styles
const styles = StyleSheet.create({
  titletext: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleTextstyle: {
    marginTop: 10,
    fontStyle: "bold",
    fontWeight: 20
  },
  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },

  imageStyle: {
    width: 400,
    height: 350,
  },
});

// Create Document Component
const PdfDocument = ({ firstName }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header />
      <View style={styles.titletext}>
        <Text style={styles.titleTextstyle}>Health Report</Text>
      </View>
      <PatientInfo firstName={firstName} />
      <PatientReport />
      <View style={styles.imageWrapper}>
        <Image source={promotionImage} style={styles.promotionImageStyle} />
      </View>
    </Page>
  </Document>
);

export default PdfDocument;
