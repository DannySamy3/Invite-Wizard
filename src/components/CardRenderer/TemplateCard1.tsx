import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import FirstCard from "../CardTemplates/FirstCard";

const TemplateCard1 = () => {
  return (
    <div>
      <PDFDownloadLink document={<FirstCard />} fileName="Wed-Card.pdf" >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default TemplateCard1;
