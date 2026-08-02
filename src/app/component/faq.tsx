"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../style/modules.scss";

const faqs = [
  {
    q: "Tu travailles avec quel type de clients ?",
    a: "Je travaille avec des entrepreneurs, des PME, des créateurs de contenu, des commerçants et toute personne souhaitant développer ou digitaliser son activité. Que tu sois au démarrage ou déjà établi, je m'adapte à ta situation.",
  },
  {
    q: "Est-ce que tu travailles à distance ou en présentiel ?",
    a: "Les deux. Je travaille principalement à distance avec des clients en Afrique et à l'international. Pour les clients locaux, des sessions en présentiel sont possibles selon le projet.",
  },
  {
    q: "Combien de temps prend un projet de digitalisation complet ?",
    a: "Cela dépend de l'envergure du projet. Une présence sociale de base peut être mise en place en 1 à 2 semaines. Un projet complet (réseaux + site + stratégie + contenu) prend généralement 4 à 8 semaines.",
  },
  {
    q: "Est-ce que tu proposes des forfaits ou tu travailles au projet ?",
    a: "Les deux options sont disponibles. Je propose des forfaits mensuels pour l'accompagnement continu (gestion des réseaux, création de contenu, suivi marketing) et des tarifs au projet pour des missions ponctuelles.",
  },
  {
    q: "Que se passe-t-il après la livraison du projet ?",
    a: "Je reste disponible pour le suivi et l'optimisation. Je te forme également à utiliser les outils en autonomie. Mon objectif est que tu sois capable de faire évoluer ton business sans dépendre de moi en permanence.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "Un acompte de 50% est demandé au démarrage du projet, le solde à la livraison. J'accepte les paiements via Mobile Money (Orange, MTN), virement bancaire et d'autres moyens selon ta localisation.",
  },
  {
    q: "Est-ce que tu proposes des formations individuelles ?",
    a: "Oui. Je propose des sessions de coaching individuel sur la création de contenu, l'IA, le marketing digital et la stratégie. Les sessions se font en visio et sont adaptées à ton niveau et tes objectifs.",
  },
];

export default function Faq() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

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
