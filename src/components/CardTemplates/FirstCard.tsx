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

// Import your background image
// const backgroundImage = require("/public/images/4.jpg");

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between", // Adjusted to evenly distribute content vertically
    position: "relative", // Ensure page is relative for absolute positioning
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    padding: 40, // Adjust padding as needed
    fontFamily: "Helvetica", // Default font
  },
  section: {
    marginVertical: 10, // Adjust vertical margin between sections
    textAlign: "center",
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
    textDecoration: "underline",
    fontFamily: "Times-Roman", // Header font
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: "Helvetica", // Content font
  },
  note: {
    fontSize: 12,
    marginTop: 20,
    textAlign: "center",
    fontStyle: "italic",
    fontFamily: "Courier", // Note font
  },
  qrContainer: {
    position: "absolute",
    bottom: 20, // Adjust the bottom spacing as needed
    right: 20, // Adjust the right spacing as needed
    width: 80,
    height: 80,
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
});

const WeddingCard = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={[styles.header, { fontFamily: "Times-Roman" }]}>
          Wedding Invitation
        </Text>
        <Text style={styles.content}>Dear Beloved Family and Friends,</Text>
        <Text style={styles.content}>
          We joyfully announce the union of our hearts and invite you to
          celebrate with us on our wedding day.
        </Text>
        <Text style={styles.content}>Date: Saturday, [Wedding Date]</Text>
        <Text style={styles.content}>Ceremony Venue: [Ceremony Venue]</Text>
        <Text style={styles.content}>Reception Venue: [Reception Venue]</Text>
        <Text style={styles.content}>
          Your presence would mean the world to us as we embark on this new
          chapter of our lives together.
        </Text>
        <Text style={styles.content}>
          In lieu of traditional gifts, we kindly request your support through
          contributions to our wedding fund. Your generosity will help us create
          lasting memories on our special day.
        </Text>
        <Text style={styles.content}>
          Please RSVP by [RSVP Date] to ensure we can accommodate all our guests
          comfortably.
        </Text>
        <Text style={styles.note}>With love and gratitude,</Text>
        <Text style={styles.note}>[Your Names]</Text>
      </View>

      {/* QR Code Container */}
      <View style={styles.qrContainer}>
        {/* You can place your QR code image or text here */}
        <Text>Scan QR Code</Text>
        {/* Example of an image */}
        {/* <Image src="/path/to/your/qr-code.png" /> */}
      </View>
    </Page>
  </Document>
);

export default WeddingCard;
