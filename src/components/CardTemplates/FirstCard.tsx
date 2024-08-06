// Import necessary modules
import React from "react";
import backgroundImage from "/public/images/4.jpg";
import {
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
    width: 100,
    height: 100,
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "#e76f51",
    alignItems: "center",
    justifyContent: "center",
  },
  qrImage: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
  },
});

interface WeddingCardProps {
  cardInput: any;
  preview: boolean;
  qrCode: any;
  guestCardData?: any;
}

const formatDate = (date: string) => {
  const parsedDate = new Date(date);
  return isNaN(parsedDate.getTime()) ? "" : parsedDate.toDateString();
};

const WeddingCard: React.FC<WeddingCardProps> = ({
  cardInput,
  preview,
  qrCode,
  guestCardData,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>
          {preview && guestCardData && guestCardData.header_text
            ? guestCardData.header_text.toUpperCase()
            : cardInput.heading}
        </Text>
        <Text style={styles.salutation}>
          {preview && guestCardData && guestCardData.salutation
            ? guestCardData.salutation.toUpperCase()
            : cardInput.greet}
        </Text>
        <Text style={styles.title2}>
          {preview && guestCardData && guestCardData.groom
            ? guestCardData.groom.toUpperCase()
            : cardInput.male}
        </Text>
        <Text style={styles.and}>{preview ? "&" : ""}</Text>
        <Text style={styles.title1}>
          {preview && guestCardData && guestCardData.bride
            ? guestCardData.bride.toUpperCase()
            : cardInput.female}
        </Text>

        <Text style={styles.date}>{`${
          preview && guestCardData && guestCardData.date
            ? formatDate(guestCardData.date)
            : formatDate(cardInput.date)
        }`}</Text>

        <Text style={styles.description}>
          {preview && guestCardData && guestCardData.description
            ? guestCardData.description
            : cardInput.details}
        </Text>
        <Text style={styles.venue}>
          {preview &&
            `Venue : ${
              guestCardData && guestCardData.venue
                ? guestCardData.venue.toUpperCase()
                : cardInput.venue
            }`}
        </Text>
        <Text style={styles.footer}>{`${
          preview
            ? `for more information call ${
                guestCardData && guestCardData.contacts
                  ? guestCardData.contacts
                  : cardInput.mobileContact
              }`
            : ""
        }`}</Text>
      </View>
      {preview && (
        <View style={styles.qrContainer}>
          {/* @ts-ignore */}
          <Image source={{ uri: qrCode }} style={styles.qrImage} />
        </View>
      )}
    </Page>
  </Document>
);

export default WeddingCard;
