"use client";

import * as React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


import "../../style/modules.scss";

export default function ModulesFormations() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="faq__Group">
      <Accordion
        className="panels"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="panel"
        >
          <Typography component="span" className="titre__content">
            <div className="Items">
              {/* <span>
                <Image src={logoWord} alt="" className="moduleImage" />
              </span> */}
              <span className="titre">
                <span className="t">
                  📌 Module 1 - Qu&apos;est-ce que l&apos;IA
                  g&eacute;n&eacute;rative ?
                </span>
                {/* <span className="time">
                  <AlarmAddIcon className="iconTime" />
                   <span> 6Heures | 10 vidéos</span> 
                </span> */}
              </span>
            </div>
            {/* <span className='number'>Module 1</span> */}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="faq__description">
            <h3>
              D&eacute;couvrez ce qu&apos;est l&apos;IA
              g&eacute;n&eacute;rative, comment elle fonctionne et pourquoi elle
              transforme des secteurs entiers. Ce module pose des bases claires,
              accessibles et adapt&eacute;es au contexte africain.
            </h3>
            <br />
            <br />
            <span>✅ Contenu du module :</span>
            <li>
              <b>D&eacute;finition de l&apos;IA g&eacute;n&eacute;rative :</b>{" "}
              Comprendre le concept et ses diff&eacute;rences avec l&apos;IA
              classique
            </li>
            <li>
              <b>Fonctionnement :</b> Mod&egrave;les, entra&icirc;nement et
              principes de g&eacute;n&eacute;ration
            </li>
            <li>
              <b>Domaines d&apos;application :</b> Images, textes, vid&eacute;os,
              voix et outils cr&eacute;atifs
            </li>
            <li>
              <b>Exemples concrets en Afrique :</b> Cr&eacute;ation de visuels,
              branding, e-commerce, communication
            </li>
            <li>
              <b>Avantages &eacute;conomiques :</b> Gagner du temps,
              r&eacute;duire les co&ucirc;ts, produire sans comp&eacute;tence
              technique
            </li>
            <li>
              <b>Outils populaires :</b> Nana Banana, Midjourney, DALL-E,
              Ideogram et autres
            </li>
            <li>
              <b>Impact sur les m&eacute;tiers :</b> Nouvelles
              opportunit&eacute;s de revenus et reconversion
            </li>
            <li>
              <b>Limites actuelles :</b> Qualit&eacute;, droits, &eacute;thique
              et acc&egrave;s aux outils
            </li>
            <li>
              <b>Pourquoi se former maintenant :</b> Comp&eacute;tence rentable,
              tendance mondiale, opportunit&eacute;s imm&eacute;diates
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="panels"
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="panel"
        >
          <Typography component="span" className="titre__content">
            <div className="Items">
              {/* <span>
                <Image src={logoExcel} alt="" className="moduleImage" />
              </span> */}
              <span className="titre">
                <span className="t">📌 Module 2 — La notion de prompt</span>
                {/* <span className="time">
                  <AlarmAddIcon className="iconTime" />
                  <span> 12Heures | 24 vidéos</span> 
                </span> */}
              </span>
            </div>
            {/* <span className='number'>Module 1</span> */}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="faq__description">
            <h3>
              Ma&icirc;trisez l&apos;art de communiquer avec l&apos;IA
              gr&acirc;ce &agrave; des prompts efficaces. Vous apprendrez
              comment formuler des instructions claires pour obtenir des
              r&eacute;sultats pr&eacute;cis, professionnels et
              personnalis&eacute;s.
            </h3>
            <br />
            <br />
            <span>✅ Contenu du module :</span>
            <li>
              <b>D&eacute;finition d&apos;un prompt :</b> R&ocirc;le, importance
              et structure
            </li>
            <li>
              <b>Types de prompts :</b> Descriptif, cr&eacute;atif, technique,
              contextuel
            </li>
            <li>
              <b>Structure d&apos;un bon prompt :</b> Sujet, style, contexte,
              d&eacute;tails visuels
            </li>
            <li>
              <b>Param&egrave;tres essentiels :</b> Ratio, qualit&eacute;,
              lumi&egrave;re, angle, rendu
            </li>
            <li>
              <b>Prompting pour respecter un visage :</b> Consignes et exemples
              pratiques
            </li>
            <li>
              <b>R&eacute;duction des r&eacute;p&eacute;titions :</b> Comment
              obtenir le bon r&eacute;sultat d&egrave;s la premi&egrave;re fois
            </li>
            <li>
              <b>Erreurs courantes :</b> Prompts vagues, mots manquants,
              ambigu&iuml;t&eacute;s
            </li>
            <li>
              <b>Cas d&apos;usage :</b> Personnes, objets, campagnes, branding
            </li>
            <li>
              <b>Exemples adapt&eacute;s au contexte africain :</b> Mode,
              entrepreneuriat, contenu digital
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="panels"
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="panel"
        >
          <Typography component="span" className="titre__content">
            <div className="Items">
              {/* <span>
                <Image src={logoPowerpoint} alt="" className="moduleImage" />
              </span> */}
              <span className="titre">
                <span className="t">
                  📌 Module 3 — Génération d’images avec l’IA
                </span>
                {/* <span className="time">
                  <AlarmAddIcon className="iconTime" />
                  {/* <span> 4Heures | 10 vidéos</span> 
                </span> */}
              </span>
            </div>
            {/* <span className='number'>Module 1</span> */}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="faq__description">
            <h3>
              Apprenez &agrave; g&eacute;n&eacute;rer des images
              professionnelles avec diff&eacute;rents outils d&apos;IA. Vous verrez
              comment transformer un prompt en r&eacute;sultat concret et
              r&eacute;utilisable.
            </h3>
            <br />
            <br />
            <span>✅ Contenu du module :</span>
            <li>
              <b>Pr&eacute;sentation des plateformes :</b> Nana Banana,
              Midjourney, DALL-E, etc.
            </li>
            <li>
              <b>Cr&eacute;ation d&apos;images &agrave; partir de texte :</b>{" "}
              Cas simples et avanc&eacute;s
            </li>
            <li>
              <b>Param&eacute;trage pour rendu r&eacute;aliste :</b> Haut
              d&eacute;tail, lumi&egrave;re, r&eacute;solution
            </li>
            <li>
              <b>Respect des visages :</b> Techniques et prompts
              sp&eacute;cifiques
            </li>
            <li>
              <b>R&eacute;solution et ratios :</b> 1:1, 4:5, 16:9, 8K, HD
            </li>
            <li>
              <b>Prompt n&eacute;gatif :</b> &Eacute;viter les erreurs et
              &eacute;l&eacute;ments non souhait&eacute;s
            </li>
            <li>
              <b>Optimisation des temps :</b> Cr&eacute;er plus, corriger moins
            </li>
            <li>
              <b>Outils gratuits vs payants :</b> Avantages, limites et
              alternatives
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className="panels"
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="panel"
        >
          <Typography component="span" className="titre__content">
            <div className="Items">
              {/* <span>
                <Image src={logoOutlook} alt="" className="moduleImage" />
              </span> */}
              <span className="titre">
                <span className="t">
                  📌 Module 4 — Cas pratique avec Nana Banana
                </span>
                <span className="time">
                  {/* <AlarmAddIcon className="iconTime" />
                  {/* <span>5Heures | 10 vidéos</span> */}
                </span>
              </span>
            </div>
            {/* <span className='number'>Module 1</span> */}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="faq__description">
            <h3>
              Passez &agrave; l&apos;action avec un atelier concret sur Nana
              Banana. Vous verrez chaque &eacute;tape : de l&apos;id&eacute;e au
              r&eacute;sultat final, avec des prompts adapt&eacute;s et
              reproductibles.
            </h3>
            <br />
            <br />
            <span>✅ Contenu du module :</span>
            <li>
              <b>Interface et inscription :</b> Utilisation rapide et intuitive
            </li>
            <li>
              <b>Structure compl&egrave;te d&apos;un prompt efficace :</b> Sujet,
              style, posture, v&ecirc;tements, fond, expression
            </li>
            <li>
              <b>Ajout d&apos;une photo de r&eacute;f&eacute;rence :</b> Respect du
              visage et coh&eacute;rence faciale
            </li>
            <li>
              <b>Gestion des prompts n&eacute;gatifs :</b> Ce qu&apos;il faut exclure
            </li>
            <li>
              <b>Param&egrave;tres avanc&eacute;s :</b> 8K, ratio 1:1, angles,
              rendu r&eacute;aliste
            </li>
            <li>
              <b>G&eacute;n&eacute;ration de s&eacute;ries d&apos;images :</b>{" "}
              Templates, duplication, variation rapide
            </li>
            <li>
              <b>Corrections et ajustements :</b> Requ&ecirc;tes intelligentes
              et modifications cibl&eacute;es
            </li>
            <li>
              <b>Exportation et exploitation :</b> Formats, usages, optimisation
              r&eacute;seaux sociaux
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
