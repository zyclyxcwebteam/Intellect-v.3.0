import React from "react";
import Layout from "../components/Layout/Layout";
import HomeBanner from "../components/Homepage/HomeBanner/HomeBanner";
import WelcomeText from "../components/Homepage/WelcomeText/WelcomeText";
import CoreServices from "../components/Homepage/CoreServices/CoreServices";
import Industries from "../components/Homepage/Industries/Industries";
import ProofOfConcept from "../components/Homepage/POC/POC";
import CompanyStats from "../components/Homepage/CompanyStats/CompanyStats";
import ClientsAndPartners from "../components/Homepage/ClientsAndPartners/ClientsAndPartners";

export default () => {
  return (
    <>
      <Layout
        showBanner
        active="home"
        title="INTELLECT Technologies"
        description="providing IT services"
      >
        <HomeBanner />
        <WelcomeText />
        <CoreServices />
        <Industries />
        <CompanyStats />
        <ProofOfConcept />
        <ClientsAndPartners />
      </Layout>
    </>
  );
};
