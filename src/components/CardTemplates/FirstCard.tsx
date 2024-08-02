// Import necessary modules
import React from "react";
import backgroundImage from "/public/images/4.jpg";
import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";

// Register standard fonts
Font.registerHyphenationCallback((word) => [word]);

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#c2c5aa",
    flexDirection: "column",
    lineHeight: 1.4,
    alignItems: "center",
    justifyContent: "space-between", // Adjusted to evenly distribute content vertically
    position: "relative", // Ensure page is relative for absolute positioning
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingHorizontal: 50,
    paddingVertical: 150, // Adjust padding as needed
    fontFamily: "Helvetica", // Default font
    border: "20px solid blue", // Add blue border
    borderColor: "#8d99ae", // Set border color to blue
    boxSizing: "border-box", // Ensure padding and border are included in the element's total width and height
    width: 360, // A5 width in points
    height: 504, // A5 height in points
  },
  section: {
    marginVertical: 10, // Adjust vertical margin between sections
    textAlign: "center",
  },
  header: {
    fontSize: 13,
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 140,

    fontFamily: "Times-Roman", // Header font
  },
  content: {
    fontSize: 13,
    marginBottom: 10,
    fontFamily: "Helvetica", // Content font
  },
  salutation: {
    marginLeft: 40,
    fontSize: 13,
    marginBottom: 10,
    fontFamily: "Helvetica", // Content font
  },
  footer: {
    fontSize: 13,
    marginBottom: 25,
    fontFamily: "Helvetica", // Content font
  },
  description: {
    marginLeft: 80,
    marginRight: 80,
    fontSize: 11,
    lineHeight: 1.8,

    fontFamily: "Helvetica", // Content font
  },
  venue: {
    marginLeft: 150,
    fontSize: 13,
    marginBottom: 10,
    fontFamily: "Helvetica", // Content font
  },
  date: {
    // marginLeft: 80,
    fontSize: 13,
    marginBottom: 10,
    fontFamily: "Helvetica", // Content font
  },
  title1: {
    fontSize: 28,
    marginBottom: 20,
    fontFamily: "Helvetica", // Content font
    marginLeft: 130,
    // paddingLeft: 48,
  },
  title2: {
    marginTop: 10,
    fontSize: 28,
    marginBottom: 0,
    fontFamily: "Helvetica", // Content font
    marginLeft: 150,
  },
  and: {
    fontSize: 22,
    marginBottom: 0,
    fontFamily: "Helvetica", // Content font
    marginLeft: 190,
    // paddingLeft: 75,
  },
  note: {
    fontSize: 13,
    marginTop: 20,
    textAlign: "center",
    fontStyle: "italic",
    fontFamily: "Courier",
  },
  qrContainer: {
    position: "absolute",
    bottom: 65,
    right: 20,
    width: 80,
    height: 80,
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "#e76f51",
    alignItems: "center",
    justifyContent: "center",
  },
});

const WeddingCard = ({ cardInput, preview }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>
          {preview ? cardInput.heading.toUpperCase() : ""}
        </Text>
        <Text style={styles.salutation}>
          {preview ? cardInput.greet.toUpperCase() : ""}
        </Text>
        <Text style={styles.title2}>
          {preview ? cardInput.male.toUpperCase() : ""}
        </Text>
        <Text style={styles.and}>{preview ? "&" : ""}</Text>
        <Text style={styles.title1}>
          {preview ? cardInput.female.toUpperCase() : ""}
        </Text>

        <Text style={styles.content}>{`${
          preview ? cardInput.date.concat(" , 8pm sharp !") : ""
        }`}</Text>

        <Text style={styles.content}>{cardInput.details}</Text>

        <Text style={styles.content}>{`${
          preview ? `Venue : ${cardInput.venue.toUpperCase()}` : ""
        }`}</Text>
        <Text style={styles.footer}>{`${
          preview ? `for more information call ${cardInput.mobileContact}` : ""
        }`}</Text>
        <Text style={styles.venue}>{cardInput.footer}</Text>
      </View>

      {preview && (
        <View style={styles.qrContainer}>
          <Text>Scan QR Code</Text>
        </View>
      )}
    </Page>
  </Document>
);

export default WeddingCard;
