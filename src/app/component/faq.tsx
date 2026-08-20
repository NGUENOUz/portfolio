"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../style/modules.scss";
import { useLanguage } from "../context/LanguageContext";

export default function Faq() {
  const { t } = useLanguage();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
    { q: t("faq.q7"), a: t("faq.a7") },
  ];

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="faq__Group">
      {faqs.map((item, i) => (
        <Accordion
          key={i}
          className="panels"
          expanded={expanded === `panel${i}`}
          onChange={handleChange(`panel${i}`)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} className="panel">
            <Typography component="span" className="titre__content">
              <span className="titre">
                <span className="t">{item.q}</span>
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="faq__description">
              <span>{item.a}</span>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
