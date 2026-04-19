// Données intégrées — 102 clients, 234 visites
const CD = [{"id": "ABEILLE", "nom": "ABEILLE", "derniere_visite": "2026-01-08", "nb_visites": 1, "objets": ["FERTI PIVOINE"]}, {"id": "ALIONE", "nom": "ALIONE", "derniere_visite": "2026-03-17", "nb_visites": 2, "objets": ["FERTI PRINTEMPS", "VISITE FERTI"]}, {"id": "ALLAMANDE", "nom": "ALLAMANDE", "derniere_visite": "2026-01-09", "nb_visites": 2, "objets": ["DEPOT DEVIS + POINT PHYTO", "VISITE PLANTATION ECARTEUR"]}, {"id": "ANTENOR", "nom": "ANTENOR", "derniere_visite": "2026-03-03", "nb_visites": 3, "objets": ["IRRIGATION"]}, {"id": "BARNEL", "nom": "BARNEL", "derniere_visite": "2025-11-12", "nb_visites": 1, "objets": ["VISITE PROSPECTION"]}, {"id": "BEDOT", "nom": "BEDOT", "derniere_visite": "2026-01-09", "nb_visites": 1, "objets": ["CUIVRE BIO"]}, {"id": "BEDOT_LAURENT", "nom": "BEDOT LAURENT", "derniere_visite": "2025-11-27", "nb_visites": 1, "objets": ["CUIVRE"]}, {"id": "BERNARD_FABRICE", "nom": "BERNARD FABRICE", "derniere_visite": "2026-03-03", "nb_visites": 2, "objets": ["FERTI PRINTEMPS"]}, {"id": "BERNARDI", "nom": "BERNARDI", "derniere_visite": "2025-11-17", "nb_visites": 1, "objets": ["DEVIS IRRIGATION"]}, {"id": "BERNARDI_MARC", "nom": "BERNARDI MARC", "derniere_visite": "2025-10-16", "nb_visites": 1, "objets": ["POSE IRRIGATION"]}, {"id": "BERTRI", "nom": "BERTRI", "derniere_visite": "2025-11-14", "nb_visites": 2, "objets": ["PLANTATION", "VISITE"]}, {"id": "BLANC", "nom": "BLANC", "derniere_visite": "2026-03-05", "nb_visites": 4, "objets": ["PHYTOS", "OVINALP", "HERBICIDE"]}, {"id": "BLANC_ROGER", "nom": "BLANC ROGER", "derniere_visite": "2026-01-12", "nb_visites": 2, "objets": ["VISITE"]}, {"id": "BLANCARD", "nom": "BLANCARD", "derniere_visite": "2025-11-12", "nb_visites": 2, "objets": ["PALISSAGE", "SUIVI POUR FERTI"]}, {"id": "BLANCARD_PENELOPE", "nom": "BLANCARD PENELOPE", "derniere_visite": "2026-03-06", "nb_visites": 2, "objets": ["PALISSAGE"]}, {"id": "BOLLA", "nom": "BOLLA", "derniere_visite": "2026-03-18", "nb_visites": 8, "objets": ["VISITE", "LIV + PHYTO", "PHYTO", "IRRI + PALISSAGE BOUISSE", "PALISSAGE", "TRAITEMENT HVE"]}, {"id": "BOUISSE_MATTERI", "nom": "BOUISSE MATTERI", "derniere_visite": "2025-10-14", "nb_visites": 1, "objets": ["RDV PROSPECT"]}, {"id": "CATUREGLI", "nom": "CATUREGLI", "derniere_visite": "2026-03-19", "nb_visites": 7, "objets": ["IRRIGATION SERRE", "PLASTIQUE", "PLASTIQUE + IRRI SERRE", "IRRIGATION ET FUMURE", "SAV + HERBI"]}, {"id": "CAVE_COOP_PIERREFEU", "nom": "CAVE COOP PIERREFEU", "derniere_visite": "2025-11-19", "nb_visites": 1, "objets": ["ANALYSE DE SOL"]}, {"id": "CAVE_COOPERATIVE_CUERS", "nom": "CAVE COOPERATIVE CUERS", "derniere_visite": "2026-01-21", "nb_visites": 1, "objets": ["AGRISYMBIOSE"]}, {"id": "CLOS_CIBONNE", "nom": "CLOS CIBONNE", "derniere_visite": "2025-11-12", "nb_visites": 1, "objets": ["PALISSAGE PERDU"]}, {"id": "COIN_COIN", "nom": "COIN COIN", "derniere_visite": "2026-03-19", "nb_visites": 1, "objets": ["DEVIS PHYTO"]}, {"id": "COLINET", "nom": "COLINET", "derniere_visite": "2025-11-27", "nb_visites": 3, "objets": ["VISITE PROSPECT", "RDV FERTI", "FERTI PRINTEMPS OLIVIER+ VIGNE"]}, {"id": "COURTY", "nom": "COURTY", "derniere_visite": "2026-03-20", "nb_visites": 1, "objets": ["RELANCE PHYTO"]}, {"id": "CUQUEMELLE", "nom": "CUQUEMELLE", "derniere_visite": "2026-03-06", "nb_visites": 4, "objets": ["IRRIGATION", "VISITE IRRI", "VISITE IRRI SUITE PASSAGE COOPAZUR"]}, {"id": "DALAMSSO", "nom": "DALAMSSO", "derniere_visite": "2025-10-16", "nb_visites": 1, "objets": ["IRRIGATION"]}, {"id": "DALMASSO", "nom": "DALMASSO", "derniere_visite": "2026-03-04", "nb_visites": 3, "objets": ["FERTI PRINTEMPS", "PALISSAGE"]}, {"id": "DAZIANO", "nom": "DAZIANO", "derniere_visite": "2026-03-17", "nb_visites": 1, "objets": ["HERBICIDE"]}, {"id": "DELFANTI", "nom": "DELFANTI", "derniere_visite": "2026-01-08", "nb_visites": 5, "objets": ["TRANSITION HVE", "SEMI", "SUIVI PROSPECT", "RDV HVE", "VISITE PLANTIER"]}, {"id": "DEVIS", "nom": "DEVIS", "derniere_visite": "2025-11-18", "nb_visites": 1, "objets": ["IRRIGATION"]}, {"id": "DUBUIS", "nom": "DUBUIS", "derniere_visite": "2025-11-20", "nb_visites": 1, "objets": ["PALISSAGE"]}, {"id": "DUBUS", "nom": "DUBUS", "derniere_visite": "2026-03-20", "nb_visites": 4, "objets": ["PHYTO", "FERTI", "FERTI PERDU"]}, {"id": "DUTTO", "nom": "DUTTO", "derniere_visite": "2026-03-19", "nb_visites": 7, "objets": ["RENDU ANALYSE SOL + COMMANDE FERTI", "POINT DEBUT SAISON PHYTO", "POINT IRRI + PHYTO", "PHYTO", "CUIVRE", "PAIEMENT"]}, {"id": "FABIEN_MARCEL", "nom": "FABIEN MARCEL", "derniere_visite": "2025-10-15", "nb_visites": 1, "objets": ["PROSPECT"]}, {"id": "FABRE", "nom": "FABRE", "derniere_visite": "2026-01-14", "nb_visites": 1, "objets": ["FERT I"]}, {"id": "FABRE_DIDIER", "nom": "FABRE DIDIER", "derniere_visite": "2025-11-13", "nb_visites": 1, "objets": ["FERTI PRINTEMPS"]}, {"id": "FARAMBERT", "nom": "FARAMBERT", "derniere_visite": "2025-10-13", "nb_visites": 1, "objets": ["CUIVRE"]}, {"id": "FERME_PINOU", "nom": "FERME PINOU", "derniere_visite": "2026-03-19", "nb_visites": 1, "objets": ["FERTI"]}, {"id": "FIGONI", "nom": "FIGONI", "derniere_visite": "2026-03-18", "nb_visites": 3, "objets": ["PALISSAGE", "HERBICIDE"]}, {"id": "FILLE", "nom": "FILLE", "derniere_visite": "2026-01-26", "nb_visites": 1, "objets": ["PROSPECT"]}, {"id": "FLOCH", "nom": "FLOCH", "derniere_visite": "2026-01-22", "nb_visites": 2, "objets": ["VISITE MARCOTTE + PALI", "ECARTEUR + PHYTO"]}, {"id": "GAIROIRD", "nom": "GAIROIRD", "derniere_visite": "2026-03-04", "nb_visites": 4, "objets": ["VISITE", "OVINALP"]}, {"id": "GARREL", "nom": "GARREL", "derniere_visite": "2026-03-20", "nb_visites": 9, "objets": ["PALISSAGE", "PHYTO", "VISITE", "POINT ENHERBEMENT", "POINT PLANTIER MILDIOU", "POINT pour RDV HVE"]}, {"id": "GORDONNE", "nom": "GORDONNE", "derniere_visite": "2025-11-17", "nb_visites": 1, "objets": ["PROSPSECT ENGRAIS"]}, {"id": "GRAND_PRE", "nom": "GRAND PRE", "derniere_visite": "2026-03-17", "nb_visites": 1, "objets": ["PHYTO"]}, {"id": "GUILLAUME_SYLVAIN", "nom": "GUILLAUME SYLVAIN", "derniere_visite": "2025-11-26", "nb_visites": 1, "objets": ["PROSPECT"]}, {"id": "GUTTIEREZ", "nom": "GUTTIEREZ", "derniere_visite": "2026-01-13", "nb_visites": 2, "objets": ["PALISSAGE", "VISITE FERTI"]}, {"id": "HEUZE", "nom": "HEUZE", "derniere_visite": "2026-01-27", "nb_visites": 3, "objets": ["FERTI", "SEMI", "COMMANDE ENGRAIS"]}, {"id": "KAUFMAN", "nom": "KAUFMAN", "derniere_visite": "2026-01-15", "nb_visites": 1, "objets": ["PRELEVEMENT"]}, {"id": "KAUFMANN", "nom": "KAUFMANN", "derniere_visite": "2026-01-12", "nb_visites": 2, "objets": ["DEVIS ANALYSE BOIS", "PRELEVEMENT"]}, {"id": "KENNEL", "nom": "KENNEL", "derniere_visite": "2026-03-19", "nb_visites": 2, "objets": ["PHYTO", "VISITE PAIEMENT + FERTI"]}, {"id": "LANZA", "nom": "LANZA", "derniere_visite": "2026-03-03", "nb_visites": 4, "objets": ["HERBICIDE", "SUIVI OFFRE PHYTO", "PHYTO OK"]}, {"id": "LAROCHE", "nom": "LAROCHE", "derniere_visite": "2025-11-14", "nb_visites": 1, "objets": ["VISITE PROSPECTION"]}, {"id": "LAROCHE_FLORENT", "nom": "LAROCHE FLORENT", "derniere_visite": "2026-03-17", "nb_visites": 2, "objets": ["PHYTOS", "PROSPECT IRRI + FERTI"]}, {"id": "LAROCHE_FLORENT_A", "nom": "LAROCHE FLORENT A", "derniere_visite": "2026-03-03", "nb_visites": 2, "objets": ["PHYTOS + ENGRAIS"]}, {"id": "LE_TERTRE", "nom": "LE TERTRE", "derniere_visite": "2025-11-13", "nb_visites": 1, "objets": ["VISITE"]}, {"id": "LERUDE", "nom": "LERUDE", "derniere_visite": "2026-03-17", "nb_visites": 7, "objets": ["POINT PAIEMENT + FERTI + PHYTO", "FERTI PRINTEMPS", "VISITE", "ENGRAIS + PAIEMENT"]}, {"id": "LERUDE_MAXIME", "nom": "LERUDE MAXIME", "derniere_visite": "2025-11-24", "nb_visites": 1, "objets": ["VISITE COCHENILLES FIGUIER"]}, {"id": "LETERTRE", "nom": "LETERTRE", "derniere_visite": "2026-01-22", "nb_visites": 1, "objets": ["VISITE PHYTO"]}, {"id": "LEYDIER", "nom": "LEYDIER", "derniere_visite": "2025-11-10", "nb_visites": 1, "objets": ["SUIVI OFFRE FERTI"]}, {"id": "LIEUTAUD", "nom": "LIEUTAUD", "derniere_visite": "2025-11-28", "nb_visites": 3, "objets": ["RDV PB RENDEMENT FIGUIER", "ANALYSE", "RENDU ANALYSE + COMMANDE MV100"]}, {"id": "LION", "nom": "LION", "derniere_visite": "2025-11-24", "nb_visites": 1, "objets": ["FERTI FIGIUER"]}, {"id": "LOLICE", "nom": "LOLICE", "derniere_visite": "2026-03-20", "nb_visites": 2, "objets": ["PHYTO", "FERTILISATION"]}, {"id": "LOLIVADE", "nom": "LOLIVADE", "derniere_visite": "2026-01-09", "nb_visites": 1, "objets": ["FERTI OLIVIER ANGIBAUD"]}, {"id": "LOMBARD", "nom": "LOMBARD", "derniere_visite": "2025-11-28", "nb_visites": 1, "objets": ["COLLOBRIERES PALISSAGE"]}, {"id": "MARCAILLOU", "nom": "MARCAILLOU", "derniere_visite": "2026-01-23", "nb_visites": 1, "objets": ["FERTI FIGUIERS + COCH"]}, {"id": "MARIFER", "nom": "MARIFER", "derniere_visite": "2025-11-21", "nb_visites": 2, "objets": ["RDV FERT I", "VISITE FERTI"]}, {"id": "MAS_DES_BORRELS", "nom": "MAS DES BORRELS", "derniere_visite": "2026-03-03", "nb_visites": 5, "objets": ["PHYTOS + ENGRAIS", "POINT CUIVRE", "POINT PAIEMENT + FERTI", "VISITE FERTI + FACTURE"]}, {"id": "MATTERI", "nom": "MATTERI", "derniere_visite": "2026-03-20", "nb_visites": 5, "objets": ["AIRE DE LAVAGE AVEC AXE", "EAU CAVE", "AIRE LAVAGE", "IRRIGATION"]}, {"id": "MAURIN", "nom": "MAURIN", "derniere_visite": "2026-03-18", "nb_visites": 1, "objets": ["FERTI FIGUIER"]}, {"id": "MESCLANCES", "nom": "MESCLANCES", "derniere_visite": "2026-03-20", "nb_visites": 8, "objets": ["FERTI", "PHYTO", "AGRISYMBIOSE", "PALISSAGE", "RECOLTE OLIVES", "OVINALP"]}, {"id": "MONTHUY", "nom": "MONTHUY", "derniere_visite": "2026-01-14", "nb_visites": 3, "objets": ["FERTI", "FERTI PERUI"]}, {"id": "ODDERA", "nom": "ODDERA", "derniere_visite": "2026-01-29", "nb_visites": 1, "objets": ["COCHENILLES FUMAGINE"]}, {"id": "OLIVIER_LAMOTE", "nom": "OLIVIER LAMOTE", "derniere_visite": "2026-01-20", "nb_visites": 1, "objets": ["VISITE PHYTO"]}, {"id": "PALMIERI", "nom": "PALMIERI", "derniere_visite": "2026-03-06", "nb_visites": 5, "objets": ["POINT HERBI + FERTI PRINTEMPS", "VISITE HERBI + FERTI + PHYTO", "CORNIERE PALISSAGE MARCOTTE", "POINT MARCOTTE"]}, {"id": "PEREIRA", "nom": "PEREIRA", "derniere_visite": "2026-01-16", "nb_visites": 2, "objets": ["HVE + PHYTO 26", "COMMANDE ENGRAIS"]}, {"id": "PEROLINI", "nom": "PEROLINI", "derniere_visite": "2026-03-04", "nb_visites": 4, "objets": ["POINT ENHERBEMENT QUI POUSSE PAS", "PREVI PHYTO", "OVINALP"]}, {"id": "PORTANIERE", "nom": "PORTANIERE", "derniere_visite": "2025-11-19", "nb_visites": 1, "objets": ["FERTI"]}, {"id": "QUIROGA", "nom": "QUIROGA", "derniere_visite": "2026-03-18", "nb_visites": 6, "objets": ["PHYTO + HERBI", "DESHERBANT", "VISITE HERBICIDE"]}, {"id": "REVEST", "nom": "REVEST", "derniere_visite": "2026-01-19", "nb_visites": 2, "objets": ["FERTI PRINTEMPS", "FERTI"]}, {"id": "ROBERT_PHILLIPE", "nom": "ROBERT PHILLIPE", "derniere_visite": "2026-01-20", "nb_visites": 2, "objets": ["VISITE PHYTO", "IRRIGATION + PALISSAGE"]}, {"id": "ROIG", "nom": "ROIG", "derniere_visite": "2026-03-18", "nb_visites": 5, "objets": ["FERTI PRINTEMPS", "TOURNEE ANALYSE SOL / FERTI", "PRELEVEMENT", "DOSATRON", "FERTI OLIVIER"]}, {"id": "ROUX_JEAN_PAUL", "nom": "ROUX JEAN PAUL", "derniere_visite": "2025-11-27", "nb_visites": 1, "objets": ["CUIVRE + BAHCO"]}, {"id": "ROUX_JP", "nom": "ROUX JP", "derniere_visite": "2026-03-02", "nb_visites": 2, "objets": ["FONGI + HERBI ARBO"]}, {"id": "SALTETTO", "nom": "SALTETTO", "derniere_visite": "2026-01-12", "nb_visites": 1, "objets": ["DESHERBANT"]}, {"id": "SALTETTO_ALAIN", "nom": "SALTETTO ALAIN", "derniere_visite": "2026-03-20", "nb_visites": 1, "objets": ["PAIEMENT + COMPOST"]}, {"id": "SALTETTO_CLAUDE", "nom": "SALTETTO CLAUDE", "derniere_visite": "2026-01-08", "nb_visites": 3, "objets": ["ENGRAIS PRINTEMPS", "VISITE", "RDV PRESTATION"]}, {"id": "SALTETTO_JC", "nom": "SALTETTO JC", "derniere_visite": "2026-01-23", "nb_visites": 3, "objets": ["PDT + PREVI PHYTO", "PHYTO"]}, {"id": "SAPIN", "nom": "SAPIN", "derniere_visite": "2025-11-10", "nb_visites": 1, "objets": ["RDV PRESTATAIRE PRISE CONTACT"]}, {"id": "SAS_2_C_BARNEL", "nom": "SAS 2 C BARNEL", "derniere_visite": "2026-03-17", "nb_visites": 1, "objets": ["RDV PHYTO"]}, {"id": "SCARONE", "nom": "SCARONE", "derniere_visite": "2026-01-14", "nb_visites": 1, "objets": ["PHYTO BIO"]}, {"id": "SCEA_OLIVAIE", "nom": "SCEA OLIVAIE", "derniere_visite": "2026-01-06", "nb_visites": 1, "objets": ["COMMANDE GUANUMUS"]}, {"id": "SIMMONOT", "nom": "SIMMONOT", "derniere_visite": "2026-01-20", "nb_visites": 1, "objets": ["PROSPECT"]}, {"id": "SIMON", "nom": "SIMON", "derniere_visite": "2026-01-29", "nb_visites": 1, "objets": ["CHEF DE CULTURE MARTY"]}, {"id": "SULLIVAN", "nom": "SULLIVAN", "derniere_visite": "2026-01-23", "nb_visites": 1, "objets": ["FERTI + PHYTO + ANALYSE"]}, {"id": "SULLIVAN_ANOINE", "nom": "SULLIVAN ANOINE", "derniere_visite": "2026-03-04", "nb_visites": 2, "objets": ["RENDU ANALYSE SOL + COMMANDE FERTI"]}, {"id": "SUMEIRE", "nom": "SUMEIRE", "derniere_visite": "2026-03-19", "nb_visites": 1, "objets": ["PHYTOS"]}, {"id": "TESSORE", "nom": "TESSORE", "derniere_visite": "2026-01-22", "nb_visites": 2, "objets": ["VISITE PROSPECT", "ANALYSE SOL"]}, {"id": "TOURTOU", "nom": "TOURTOU", "derniere_visite": "2026-03-19", "nb_visites": 2, "objets": ["PALISSAGE", "VISITE"]}, {"id": "TURENNE", "nom": "TURENNE", "derniere_visite": "2025-10-16", "nb_visites": 1, "objets": ["FERT I"]}, {"id": "VALENTIN", "nom": "VALENTIN", "derniere_visite": "2026-01-29", "nb_visites": 1, "objets": ["FLEURS"]}, {"id": "WEIBEL", "nom": "WEIBEL", "derniere_visite": "2026-03-05", "nb_visites": 10, "objets": ["FERTI PRINTEMPS", "POTASSE UAB NOP", "VIISTE", "RDV FERTI", "SUIVI OFFRE FERTI", "GYPSE OK"]}];
const VD = [{"semaine": 10, "client": "MAS DES BORRELS", "objet": "PHYTOS + ENGRAIS", "date": "2026-03-03"}, {"semaine": 10, "client": "DALMASSO", "objet": "FERTI PRINTEMPS", "date": "2026-03-04"}, {"semaine": 10, "client": "WEIBEL", "objet": "FERTI PRINTEMPS", "date": "2026-03-02"}, {"semaine": 10, "client": "LANZA", "objet": "HERBICIDE", "date": "2026-03-03"}, {"semaine": 10, "client": "SULLIVAN ANOINE", "objet": "RENDU ANALYSE SOL + COMMANDE FERTI", "date": "2026-03-04"}, {"semaine": 10, "client": "LERUDE", "objet": "POINT PAIEMENT + FERTI + PHYTO", "date": "2026-03-02"}, {"semaine": 10, "client": "ANTENOR", "objet": "IRRIGATION", "date": "2026-03-03"}, {"semaine": 10, "client": "QUIROGA", "objet": "PHYTO + HERBI", "date": "2026-03-04"}, {"semaine": 10, "client": "MESCLANCES", "objet": "FERTI", "date": "2026-03-02"}, {"semaine": 10, "client": "LAROCHE FLORENT A", "objet": "PHYTOS + ENGRAIS", "date": "2026-03-03"}, {"semaine": 10, "client": "GAIROIRD", "objet": "VISITE", "date": "2026-03-04"}, {"semaine": 10, "client": "ROUX JP", "objet": "FONGI + HERBI ARBO", "date": "2026-03-02"}, {"semaine": 10, "client": "BERNARD FABRICE", "objet": "FERTI PRINTEMPS", "date": "2026-03-03"}, {"semaine": 10, "client": "BOLLA", "objet": "VISITE", "date": "2026-03-04"}, {"semaine": 10, "client": "PEROLINI", "objet": "POINT ENHERBEMENT QUI POUSSE PAS", "date": "2026-03-04"}, {"semaine": 10, "client": "WEIBEL", "objet": "POTASSE UAB NOP", "date": "2026-03-05"}, {"semaine": 10, "client": "GARREL", "objet": "PALISSAGE", "date": "2026-03-06"}, {"semaine": 10, "client": "CATUREGLI", "objet": "IRRIGATION SERRE", "date": "2026-03-05"}, {"semaine": 10, "client": "PALMIERI", "objet": "POINT HERBI + FERTI PRINTEMPS", "date": "2026-03-06"}, {"semaine": 10, "client": "MATTERI", "objet": "AIRE DE LAVAGE AVEC AXE", "date": "2026-03-05"}, {"semaine": 10, "client": "BLANCARD PENELOPE", "objet": "PALISSAGE", "date": "2026-03-06"}, {"semaine": 10, "client": "BLANC", "objet": "PHYTOS", "date": "2026-03-05"}, {"semaine": 10, "client": "CUQUEMELLE", "objet": "IRRIGATION", "date": "2026-03-06"}, {"semaine": 12, "client": "ALIONE", "objet": "FERTI PRINTEMPS", "date": "2026-03-17"}, {"semaine": 12, "client": "ROIG", "objet": "FERTI PRINTEMPS", "date": "2026-03-18"}, {"semaine": 12, "client": "GRAND PRE", "objet": "PHYTO", "date": "2026-03-17"}, {"semaine": 12, "client": "DUTTO", "objet": "RENDU ANALYSE SOL + COMMANDE FERTI", "date": "2026-03-18"}, {"semaine": 12, "client": "LERUDE", "objet": "FERTI PRINTEMPS", "date": "2026-03-17"}, {"semaine": 12, "client": "QUIROGA", "objet": "PHYTO + HERBI", "date": "2026-03-18"}, {"semaine": 12, "client": "LAROCHE FLORENT", "objet": "PHYTOS", "date": "2026-03-17"}, {"semaine": 12, "client": "FIGONI", "objet": "PALISSAGE", "date": "2026-03-18"}, {"semaine": 12, "client": "DAZIANO", "objet": "HERBICIDE", "date": "2026-03-17"}, {"semaine": 12, "client": "MATTERI", "objet": "EAU CAVE", "date": "2026-03-18"}, {"semaine": 12, "client": "SAS 2 C BARNEL", "objet": "RDV PHYTO", "date": "2026-03-17"}, {"semaine": 12, "client": "BOLLA", "objet": "LIV + PHYTO", "date": "2026-03-18"}, {"semaine": 12, "client": "MAURIN", "objet": "FERTI FIGUIER", "date": "2026-03-18"}, {"semaine": 12, "client": "TOURTOU", "objet": "PALISSAGE", "date": "2026-03-19"}, {"semaine": 12, "client": "MESCLANCES", "objet": "PHYTO", "date": "2026-03-20"}, {"semaine": 12, "client": "CATUREGLI", "objet": "IRRIGATION SERRE", "date": "2026-03-19"}, {"semaine": 12, "client": "GARREL", "objet": "PHYTO", "date": "2026-03-20"}, {"semaine": 12, "client": "FERME PINOU", "objet": "FERTI", "date": "2026-03-19"}, {"semaine": 12, "client": "DUBUS", "objet": "PHYTO", "date": "2026-03-20"}, {"semaine": 12, "client": "SUMEIRE", "objet": "PHYTOS", "date": "2026-03-19"}, {"semaine": 12, "client": "LOLICE", "objet": "PHYTO", "date": "2026-03-20"}, {"semaine": 12, "client": "DUTTO", "objet": "POINT DEBUT SAISON PHYTO", "date": "2026-03-19"}, {"semaine": 12, "client": "MATTERI", "objet": "AIRE LAVAGE", "date": "2026-03-20"}, {"semaine": 12, "client": "KENNEL", "objet": "PHYTO", "date": "2026-03-19"}, {"semaine": 12, "client": "COURTY", "objet": "RELANCE PHYTO", "date": "2026-03-20"}, {"semaine": 12, "client": "COIN COIN", "objet": "DEVIS PHYTO", "date": "2026-03-19"}, {"semaine": 12, "client": "SALTETTO ALAIN", "objet": "PAIEMENT + COMPOST", "date": "2026-03-20"}, {"semaine": 2, "client": "CATUREGLI", "objet": "PLASTIQUE", "date": "2026-01-06"}, {"semaine": 2, "client": "ROIG", "objet": "TOURNEE ANALYSE SOL / FERTI", "date": "2026-01-07"}, {"semaine": 2, "client": "BOLLA", "objet": "PHYTO", "date": "2026-01-05"}, {"semaine": 2, "client": "SALTETTO JC", "objet": "PDT + PREVI PHYTO", "date": "2026-01-06"}, {"semaine": 2, "client": "KAUFMANN", "objet": "DEVIS ANALYSE BOIS", "date": "2026-01-07"}, {"semaine": 2, "client": "QUIROGA", "objet": "DESHERBANT", "date": "2026-01-05"}, {"semaine": 2, "client": "SCEA OLIVAIE", "objet": "COMMANDE GUANUMUS", "date": "2026-01-06"}, {"semaine": 2, "client": "LERUDE", "objet": "VISITE", "date": "2026-01-07"}, {"semaine": 2, "client": "MAS DES BORRELS", "objet": "POINT CUIVRE", "date": "2026-01-05"}, {"semaine": 2, "client": "PEROLINI", "objet": "PREVI PHYTO", "date": "2026-01-06"}, {"semaine": 2, "client": "DELFANTI", "objet": "TRANSITION HVE", "date": "2026-01-08"}, {"semaine": 2, "client": "ALLAMANDE", "objet": "DEPOT DEVIS + POINT PHYTO", "date": "2026-01-09"}, {"semaine": 2, "client": "SALTETTO CLAUDE", "objet": "ENGRAIS PRINTEMPS", "date": "2026-01-08"}, {"semaine": 2, "client": "LOLIVADE", "objet": "FERTI OLIVIER ANGIBAUD", "date": "2026-01-09"}, {"semaine": 2, "client": "GARREL", "objet": "VISITE", "date": "2026-01-08"}, {"semaine": 2, "client": "BEDOT", "objet": "CUIVRE BIO", "date": "2026-01-09"}, {"semaine": 2, "client": "ABEILLE", "objet": "FERTI PIVOINE", "date": "2026-01-08"}, {"semaine": 3, "client": "PALMIERI", "objet": "VISITE HERBI + FERTI + PHYTO", "date": "2026-01-12"}, {"semaine": 3, "client": "GARREL", "objet": "VISITE", "date": "2026-01-13"}, {"semaine": 3, "client": "FABRE", "objet": "FERT I", "date": "2026-01-14"}, {"semaine": 3, "client": "KAUFMANN", "objet": "PRELEVEMENT", "date": "2026-01-12"}, {"semaine": 3, "client": "DUTTO", "objet": "POINT IRRI + PHYTO", "date": "2026-01-13"}, {"semaine": 3, "client": "MONTHUY", "objet": "FERTI", "date": "2026-01-14"}, {"semaine": 3, "client": "SALTETTO", "objet": "DESHERBANT", "date": "2026-01-12"}, {"semaine": 3, "client": "DALMASSO", "objet": "PALISSAGE", "date": "2026-01-13"}, {"semaine": 3, "client": "CATUREGLI", "objet": "PLASTIQUE + IRRI SERRE", "date": "2026-01-14"}, {"semaine": 3, "client": "BLANC ROGER", "objet": "VISITE", "date": "2026-01-12"}, {"semaine": 3, "client": "GUTTIEREZ", "objet": "PALISSAGE", "date": "2026-01-13"}, {"semaine": 3, "client": "SCARONE", "objet": "PHYTO BIO", "date": "2026-01-14"}, {"semaine": 3, "client": "TESSORE", "objet": "VISITE PROSPECT", "date": "2026-01-13"}, {"semaine": 3, "client": "FLOCH", "objet": "VISITE MARCOTTE + PALI", "date": "2026-01-15"}, {"semaine": 3, "client": "ROIG", "objet": "PRELEVEMENT", "date": "2026-01-15"}, {"semaine": 3, "client": "PEREIRA", "objet": "HVE + PHYTO 26", "date": "2026-01-16"}, {"semaine": 3, "client": "WEIBEL", "objet": "VIISTE", "date": "2026-01-15"}, {"semaine": 3, "client": "ROIG", "objet": "DOSATRON", "date": "2026-01-16"}, {"semaine": 3, "client": "KAUFMAN", "objet": "PRELEVEMENT", "date": "2026-01-15"}, {"semaine": 3, "client": "HEUZE", "objet": "FERTI", "date": "2026-01-15"}, {"semaine": 4, "client": "SIMMONOT", "objet": "PROSPECT", "date": "2026-01-20"}, {"semaine": 4, "client": "CAVE COOPERATIVE CUERS", "objet": "AGRISYMBIOSE", "date": "2026-01-21"}, {"semaine": 4, "client": "DUTTO", "objet": "PHYTO", "date": "2026-01-19"}, {"semaine": 4, "client": "ROBERT PHILLIPE", "objet": "VISITE PHYTO", "date": "2026-01-20"}, {"semaine": 4, "client": "MESCLANCES", "objet": "AGRISYMBIOSE", "date": "2026-01-21"}, {"semaine": 4, "client": "MESCLANCES", "objet": "PALISSAGE", "date": "2026-01-19"}, {"semaine": 4, "client": "MAS DES BORRELS", "objet": "POINT PAIEMENT + FERTI", "date": "2026-01-20"}, {"semaine": 4, "client": "TOURTOU", "objet": "VISITE", "date": "2026-01-21"}, {"semaine": 4, "client": "REVEST", "objet": "FERTI PRINTEMPS", "date": "2026-01-19"}, {"semaine": 4, "client": "OLIVIER LAMOTE", "objet": "VISITE PHYTO", "date": "2026-01-20"}, {"semaine": 4, "client": "KENNEL", "objet": "VISITE PAIEMENT + FERTI", "date": "2026-01-21"}, {"semaine": 4, "client": "LOLICE", "objet": "FERTILISATION", "date": "2026-01-22"}, {"semaine": 4, "client": "SULLIVAN", "objet": "FERTI + PHYTO + ANALYSE", "date": "2026-01-23"}, {"semaine": 4, "client": "LETERTRE", "objet": "VISITE PHYTO", "date": "2026-01-22"}, {"semaine": 4, "client": "SALTETTO JC", "objet": "PHYTO", "date": "2026-01-23"}, {"semaine": 4, "client": "TESSORE", "objet": "ANALYSE SOL", "date": "2026-01-22"}, {"semaine": 4, "client": "MARCAILLOU", "objet": "FERTI FIGUIERS + COCH", "date": "2026-01-23"}, {"semaine": 4, "client": "GARREL", "objet": "POINT ENHERBEMENT", "date": "2026-01-22"}, {"semaine": 4, "client": "FLOCH", "objet": "ECARTEUR + PHYTO", "date": "2026-01-22"}, {"semaine": 42, "client": "BOUISSE MATTERI", "objet": "RDV PROSPECT", "date": "2025-10-14"}, {"semaine": 42, "client": "FABIEN MARCEL", "objet": "PROSPECT", "date": "2025-10-15"}, {"semaine": 42, "client": "FARAMBERT", "objet": "CUIVRE", "date": "2025-10-13"}, {"semaine": 42, "client": "GARREL", "objet": "POINT PLANTIER MILDIOU", "date": "2025-10-14"}, {"semaine": 42, "client": "BERTRI", "objet": "PLANTATION", "date": "2025-10-15"}, {"semaine": 42, "client": "DUTTO", "objet": "CUIVRE", "date": "2025-10-13"}, {"semaine": 42, "client": "BLANCARD", "objet": "PALISSAGE", "date": "2025-10-14"}, {"semaine": 42, "client": "MONTHUY", "objet": "FERTI", "date": "2025-10-15"}, {"semaine": 42, "client": "PEREIRA", "objet": "COMMANDE ENGRAIS", "date": "2025-10-13"}, {"semaine": 42, "client": "BLANC ROGER", "objet": "VISITE", "date": "2025-10-14"}, {"semaine": 42, "client": "DUBUS", "objet": "FERTI", "date": "2025-10-15"}, {"semaine": 42, "client": "ALLAMANDE", "objet": "VISITE PLANTATION ECARTEUR", "date": "2025-10-13"}, {"semaine": 42, "client": "REVEST", "objet": "FERTI", "date": "2025-10-14"}, {"semaine": 42, "client": "MESCLANCES", "objet": "RECOLTE OLIVES", "date": "2025-10-15"}, {"semaine": 42, "client": "TURENNE", "objet": "FERT I", "date": "2025-10-16"}, {"semaine": 42, "client": "WEIBEL", "objet": "RDV FERTI", "date": "2025-10-17"}, {"semaine": 42, "client": "DALAMSSO", "objet": "IRRIGATION", "date": "2025-10-16"}, {"semaine": 42, "client": "MARIFER", "objet": "RDV FERT I", "date": "2025-10-17"}, {"semaine": 42, "client": "BERNARDI MARC", "objet": "POSE IRRIGATION", "date": "2025-10-16"}, {"semaine": 42, "client": "HEUZE", "objet": "SEMI", "date": "2025-10-17"}, {"semaine": 42, "client": "MAS DES BORRELS", "objet": "VISITE FERTI + FACTURE", "date": "2025-10-16"}, {"semaine": 42, "client": "DELFANTI", "objet": "SEMI", "date": "2025-10-17"}, {"semaine": 42, "client": "BOLLA", "objet": "IRRI + PALISSAGE BOUISSE", "date": "2025-10-16"}, {"semaine": 42, "client": "LIEUTAUD", "objet": "RDV PB RENDEMENT FIGUIER", "date": "2025-10-17"}, {"semaine": 42, "client": "LAROCHE FLORENT", "objet": "PROSPECT IRRI + FERTI", "date": "2025-10-16"}, {"semaine": 46, "client": "CATUREGLI", "objet": "IRRIGATION ET FUMURE", "date": "2025-11-12"}, {"semaine": 46, "client": "LEYDIER", "objet": "SUIVI OFFRE FERTI", "date": "2025-11-10"}, {"semaine": 46, "client": "BOLLA", "objet": "PALISSAGE", "date": "2025-11-12"}, {"semaine": 46, "client": "DUTTO", "objet": "PAIEMENT", "date": "2025-11-10"}, {"semaine": 46, "client": "BLANCARD", "objet": "SUIVI POUR FERTI", "date": "2025-11-12"}, {"semaine": 46, "client": "SAPIN", "objet": "RDV PRESTATAIRE PRISE CONTACT", "date": "2025-11-10"}, {"semaine": 46, "client": "DUBUS", "objet": "FERTI PERDU", "date": "2025-11-12"}, {"semaine": 46, "client": "MONTHUY", "objet": "FERTI PERUI", "date": "2025-11-12"}, {"semaine": 46, "client": "BARNEL", "objet": "VISITE PROSPECTION", "date": "2025-11-12"}, {"semaine": 46, "client": "CLOS CIBONNE", "objet": "PALISSAGE PERDU", "date": "2025-11-12"}, {"semaine": 46, "client": "LE TERTRE", "objet": "VISITE", "date": "2025-11-13"}, {"semaine": 46, "client": "WEIBEL", "objet": "SUIVI OFFRE FERTI", "date": "2025-11-14"}, {"semaine": 46, "client": "LERUDE", "objet": "FERTI PRINTEMPS", "date": "2025-11-13"}, {"semaine": 46, "client": "DELFANTI", "objet": "SUIVI PROSPECT", "date": "2025-11-14"}, {"semaine": 46, "client": "COLINET", "objet": "VISITE PROSPECT", "date": "2025-11-13"}, {"semaine": 46, "client": "GUTTIEREZ", "objet": "VISITE FERTI", "date": "2025-11-14"}, {"semaine": 46, "client": "ALIONE", "objet": "VISITE FERTI", "date": "2025-11-13"}, {"semaine": 46, "client": "LAROCHE", "objet": "VISITE PROSPECTION", "date": "2025-11-14"}, {"semaine": 46, "client": "LANZA", "objet": "SUIVI OFFRE PHYTO", "date": "2025-11-13"}, {"semaine": 46, "client": "BERTRI", "objet": "VISITE", "date": "2025-11-14"}, {"semaine": 46, "client": "FABRE DIDIER", "objet": "FERTI PRINTEMPS", "date": "2025-11-13"}, {"semaine": 47, "client": "BOLLA", "objet": "TRAITEMENT HVE", "date": "2025-11-19"}, {"semaine": 47, "client": "GORDONNE", "objet": "PROSPSECT ENGRAIS", "date": "2025-11-17"}, {"semaine": 47, "client": "BLANC", "objet": "OVINALP", "date": "2025-11-18"}, {"semaine": 47, "client": "SALTETTO JC", "objet": "PHYTO", "date": "2025-11-19"}, {"semaine": 47, "client": "SALTETTO CLAUDE", "objet": "VISITE", "date": "2025-11-17"}, {"semaine": 47, "client": "PEROLINI", "objet": "OVINALP", "date": "2025-11-18"}, {"semaine": 47, "client": "DUBUS", "objet": "FERTI", "date": "2025-11-19"}, {"semaine": 47, "client": "LERUDE", "objet": "ENGRAIS + PAIEMENT", "date": "2025-11-17"}, {"semaine": 47, "client": "MESCLANCES", "objet": "OVINALP", "date": "2025-11-18"}, {"semaine": 47, "client": "PORTANIERE", "objet": "FERTI", "date": "2025-11-19"}, {"semaine": 47, "client": "BOLLA", "objet": "IRRIGATION", "date": "2025-11-17"}, {"semaine": 47, "client": "GAIROIRD", "objet": "OVINALP", "date": "2025-11-18"}, {"semaine": 47, "client": "CAVE COOP PIERREFEU", "objet": "ANALYSE DE SOL", "date": "2025-11-19"}, {"semaine": 47, "client": "BERNARDI", "objet": "DEVIS IRRIGATION", "date": "2025-11-17"}, {"semaine": 47, "client": "DEVIS", "objet": "IRRIGATION", "date": "2025-11-18"}, {"semaine": 47, "client": "COLINET", "objet": "RDV FERTI", "date": "2025-11-17"}, {"semaine": 47, "client": "LANZA", "objet": "PHYTO OK", "date": "2025-11-20"}, {"semaine": 47, "client": "LIEUTAUD", "objet": "ANALYSE", "date": "2025-11-21"}, {"semaine": 47, "client": "WEIBEL", "objet": "GYPSE OK", "date": "2025-11-20"}, {"semaine": 47, "client": "DELFANTI", "objet": "RDV HVE", "date": "2025-11-21"}, {"semaine": 47, "client": "QUIROGA", "objet": "VISITE HERBICIDE", "date": "2025-11-20"}, {"semaine": 47, "client": "MARIFER", "objet": "VISITE FERTI", "date": "2025-11-21"}, {"semaine": 47, "client": "DUBUIS", "objet": "PALISSAGE", "date": "2025-11-20"}, {"semaine": 47, "client": "FIGONI", "objet": "HERBICIDE", "date": "2025-11-21"}, {"semaine": 47, "client": "CUQUEMELLE", "objet": "VISITE IRRI", "date": "2025-11-20"}, {"semaine": 48, "client": "ROIG", "objet": "FERTI OLIVIER", "date": "2025-11-26"}, {"semaine": 48, "client": "DELFANTI", "objet": "VISITE PLANTIER", "date": "2025-11-24"}, {"semaine": 48, "client": "PALMIERI", "objet": "CORNIERE PALISSAGE MARCOTTE", "date": "2025-11-26"}, {"semaine": 48, "client": "LERUDE MAXIME", "objet": "VISITE COCHENILLES FIGUIER", "date": "2025-11-24"}, {"semaine": 48, "client": "SALTETTO CLAUDE", "objet": "RDV PRESTATION", "date": "2025-11-26"}, {"semaine": 48, "client": "ROBERT PHILLIPE", "objet": "IRRIGATION + PALISSAGE", "date": "2025-11-24"}, {"semaine": 48, "client": "MATTERI", "objet": "IRRIGATION", "date": "2025-11-26"}, {"semaine": 48, "client": "GARREL", "objet": "POINT pour RDV HVE", "date": "2025-11-24"}, {"semaine": 48, "client": "GUILLAUME SYLVAIN", "objet": "PROSPECT", "date": "2025-11-26"}, {"semaine": 48, "client": "LION", "objet": "FERTI FIGIUER", "date": "2025-11-24"}, {"semaine": 48, "client": "CUQUEMELLE", "objet": "VISITE IRRI SUITE PASSAGE COOPAZUR", "date": "2025-11-27"}, {"semaine": 48, "client": "LOMBARD", "objet": "COLLOBRIERES PALISSAGE", "date": "2025-11-28"}, {"semaine": 48, "client": "BEDOT LAURENT", "objet": "CUIVRE", "date": "2025-11-27"}, {"semaine": 48, "client": "WEIBEL", "objet": "SUIVI OFFRE + GANIVELLE", "date": "2025-11-28"}, {"semaine": 48, "client": "ROUX JEAN PAUL", "objet": "CUIVRE + BAHCO", "date": "2025-11-27"}, {"semaine": 48, "client": "COLINET", "objet": "FERTI PRINTEMPS OLIVIER+ VIGNE", "date": "2025-11-27"}, {"semaine": 48, "client": "LIEUTAUD", "objet": "RENDU ANALYSE + COMMANDE MV100", "date": "2025-11-28"}, {"semaine": 5, "client": "HEUZE", "objet": "COMMANDE ENGRAIS", "date": "2026-01-27"}, {"semaine": 5, "client": "MESCLANCES", "objet": "FERTI + INSECTICIDES", "date": "2026-01-28"}, {"semaine": 5, "client": "WEIBEL", "objet": "FERTI PRINTEMPS", "date": "2026-01-26"}, {"semaine": 5, "client": "GARREL", "objet": "VISITE ENHERBEMENT LITIGE", "date": "2026-01-27"}, {"semaine": 5, "client": "FIGONI", "objet": "HERBICIDE", "date": "2026-01-28"}, {"semaine": 5, "client": "DUTTO", "objet": "POINT CANAL DE PROVENCE", "date": "2026-01-26"}, {"semaine": 5, "client": "ANTENOR", "objet": "IRRIGATION", "date": "2026-01-27"}, {"semaine": 5, "client": "QUIROGA", "objet": "PHYTO + HERBI", "date": "2026-01-28"}, {"semaine": 5, "client": "CATUREGLI", "objet": "SAV + HERBI", "date": "2026-01-26"}, {"semaine": 5, "client": "LERUDE", "objet": "POINT PAIEMENT + FERTI + PHYTO", "date": "2026-01-27"}, {"semaine": 5, "client": "GAIROIRD", "objet": "VISITE", "date": "2026-01-28"}, {"semaine": 5, "client": "FILLE", "objet": "PROSPECT", "date": "2026-01-26"}, {"semaine": 5, "client": "BLANC", "objet": "HERBICIDE", "date": "2026-01-29"}, {"semaine": 5, "client": "ODDERA", "objet": "COCHENILLES FUMAGINE", "date": "2026-01-29"}, {"semaine": 5, "client": "PALMIERI", "objet": "POINT MARCOTTE", "date": "2026-01-30"}, {"semaine": 5, "client": "SIMON", "objet": "CHEF DE CULTURE MARTY", "date": "2026-01-29"}, {"semaine": 5, "client": "VALENTIN", "objet": "FLEURS", "date": "2026-01-29"}, {"semaine": 6, "client": "MAS DES BORRELS", "objet": "PHYTOS + ENGRAIS", "date": "2026-02-03"}, {"semaine": 6, "client": "DALMASSO", "objet": "FERTI PRINTEMPS", "date": "2026-02-04"}, {"semaine": 6, "client": "WEIBEL", "objet": "FERTI PRINTEMPS", "date": "2026-02-02"}, {"semaine": 6, "client": "LANZA", "objet": "HERBICIDE", "date": "2026-02-03"}, {"semaine": 6, "client": "SULLIVAN ANOINE", "objet": "RENDU ANALYSE SOL + COMMANDE FERTI", "date": "2026-02-04"}, {"semaine": 6, "client": "LERUDE", "objet": "POINT PAIEMENT + FERTI + PHYTO", "date": "2026-02-02"}, {"semaine": 6, "client": "ANTENOR", "objet": "IRRIGATION", "date": "2026-02-03"}, {"semaine": 6, "client": "QUIROGA", "objet": "PHYTO + HERBI", "date": "2026-02-04"}, {"semaine": 6, "client": "MESCLANCES", "objet": "FERTI", "date": "2026-02-02"}, {"semaine": 6, "client": "LAROCHE FLORENT A", "objet": "PHYTOS + ENGRAIS", "date": "2026-02-03"}, {"semaine": 6, "client": "GAIROIRD", "objet": "VISITE", "date": "2026-02-04"}, {"semaine": 6, "client": "ROUX JP", "objet": "FONGI + HERBI ARBO", "date": "2026-02-02"}, {"semaine": 6, "client": "BERNARD FABRICE", "objet": "FERTI PRINTEMPS", "date": "2026-02-03"}, {"semaine": 6, "client": "BOLLA", "objet": "VISITE", "date": "2026-02-04"}, {"semaine": 6, "client": "PEROLINI", "objet": "POINT ENHERBEMENT QUI POUSSE PAS", "date": "2026-02-04"}, {"semaine": 6, "client": "WEIBEL", "objet": "POTASSE UAB NOP", "date": "2026-02-05"}, {"semaine": 6, "client": "GARREL", "objet": "PALISSAGE", "date": "2026-02-06"}, {"semaine": 6, "client": "CATUREGLI", "objet": "IRRIGATION SERRE", "date": "2026-02-05"}, {"semaine": 6, "client": "PALMIERI", "objet": "POINT HERBI + FERTI PRINTEMPS", "date": "2026-02-06"}, {"semaine": 6, "client": "MATTERI", "objet": "AIRE DE LAVAGE AVEC AXE", "date": "2026-02-05"}, {"semaine": 6, "client": "BLANCARD PENELOPE", "objet": "PALISSAGE", "date": "2026-02-06"}, {"semaine": 6, "client": "BLANC", "objet": "PHYTOS", "date": "2026-02-05"}, {"semaine": 6, "client": "CUQUEMELLE", "objet": "IRRIGATION", "date": "2026-02-06"}];
// ═══════════════════════════════════════════════════════════
// BERGON CRM — Application
// ═══════════════════════════════════════════════════════════

let TOP = [];         // top 12 calculé
let CL = [];          // labels semaines (pour graphique)
let CV = [];          // compteurs semaines (pour graphique)
let VA = JSON.parse(localStorage.getItem('bergon_crm_app') || '[]');
let CFG = JSON.parse(localStorage.getItem('bergon_crm_cfg') || '{}');
if (!CFG.owner) CFG.owner = 'stephanezunino-bot';
if (!CFG.repo) CFG.repo = 'BERGON-CRM';
if (!CFG.file) CFG.file = 'visites.json';

// ═══ CHARGEMENT INITIAL ═══
function loadData() {
  // Données intégrées directement — pas de fetch externe
  TOP = [...CD].sort((a, b) => b.nb_visites - a.nb_visites).slice(0, 12);
  computeWeeks();
  fillHistoFilter();
  document.getElementById('loader').style.display = 'none';
  renderAll();
  initSel();
  if (CFG.token) {
    updateSyncStatus('ok', 'GitHub OK');
    setTimeout(() => syncPull(true), 600);
  } else {
    updateSyncStatus('warn', 'Local seul');
  }
}

function computeWeeks() {
  const map = {};
  VD.forEach(v => {
    const key = 'S' + v.semaine;
    map[key] = (map[key] || 0) + 1;
  });
  // Tri chronologique : S42-48 avant S2-12
  const keys = Object.keys(map).sort((a, b) => {
    const na = parseInt(a.slice(1));
    const nb = parseInt(b.slice(1));
    // S42+ (fin 2025) avant S1-20 (début 2026)
    const ra = na >= 30 ? na - 100 : na;
    const rb = nb >= 30 ? nb - 100 : nb;
    return ra - rb;
  });
  CL = keys;
  CV = keys.map(k => map[k]);
}

function fillHistoFilter() {
  const sel = document.getElementById('histo-filter');
  const weeks = [...new Set(VD.map(v => v.semaine))].sort((a, b) => {
    const ra = a >= 30 ? a - 100 : a;
    const rb = b >= 30 ? b - 100 : b;
    return ra - rb;
  });
  weeks.forEach(w => {
    const o = document.createElement('option');
    o.value = w;
    const year = w >= 30 ? '2025' : '2026';
    o.textContent = 'Semaine ' + w + ' — ' + year;
    sel.appendChild(o);
  });
}

// ═══ NAV ═══
function nav(id, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.bn').forEach(b => b.classList.remove('on'));
  document.getElementById('p-' + id).classList.add('active');
  btn.classList.add('on');
}

function openField() {
  // Retour vers Bergon Field — même repo/compte GitHub Pages
  window.location.href = 'https://stephanezunino-bot.github.io/BERGON-FIELD/';
}

// ═══ BOARD ═══
let chartAct = null;
function renderBoard() {
  const now = new Date();
  const msD = 86400000;
  const inactifs = CD.filter(c => (now - new Date(c.derniere_visite)) / msD > 60);

  // KPIs
  const moyenne = CV.length ? Math.round(CV.reduce((a, b) => a + b, 0) / CV.length) : 0;
  const derniereSem = CV.length ? CV[CV.length - 1] : 0;
  document.getElementById('k1').textContent = derniereSem;
  document.getElementById('k2').textContent = inactifs.length;
  document.getElementById('k2d').textContent = inactifs.length + ' sur ' + CD.length + ' clients';
  document.getElementById('k3').textContent = moyenne;
  document.getElementById('k4').textContent = CD.length;
  document.getElementById('bdg-inactifs').textContent = inactifs.length;
  document.getElementById('bdg-weeks').textContent = CL.length + ' semaines';

  // Graphique
  if (chartAct) chartAct.destroy();
  chartAct = new Chart(document.getElementById('chart-act'), {
    type: 'bar',
    data: {
      labels: CL,
      datasets: [{
        data: CV,
        backgroundColor: CV.map((_, i) => i === CV.length - 1 ? 'rgba(200,152,58,.9)' : 'rgba(74,156,87,.55)'),
        borderRadius: 4, borderSkipped: false
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ' ' + c.raw + ' visites' } } },
      scales: {
        x: { grid: { color: 'rgba(74,156,87,.06)' }, ticks: { color: '#7a9e7e', font: { size: 10 } } },
        y: { grid: { color: 'rgba(74,156,87,.06)' }, ticks: { color: '#7a9e7e', font: { size: 10 } } }
      }
    }
  });

  // Liste inactifs
  const li = document.getElementById('lst-inactifs');
  const sorted = inactifs.sort((a, b) => new Date(a.derniere_visite) - new Date(b.derniere_visite));
  if (!sorted.length) {
    li.innerHTML = '<div class="ar"><div class="ai">✅</div><div class="at"><strong>Aucune alerte</strong><span>Tous les clients visités récemment</span></div></div>';
  } else {
    li.innerHTML = sorted.map(c => {
      const d = Math.round((now - new Date(c.derniere_visite)) / msD);
      return '<div class="ar" onclick="showC(\'' + c.id + '\')" style="cursor:pointer"><div class="ai">🔴</div><div class="at"><strong>' + c.nom + '</strong><span>' + d + 'j sans visite · ' + c.nb_visites + ' visite(s) au total</span></div></div>';
    }).join('');
  }

  // Top fréquence
  const lt = document.getElementById('lst-top');
  const maxV = TOP[0] && TOP[0].nb_visites || 1;
  lt.innerHTML = TOP.map((c, i) => {
    const pct = Math.round(c.nb_visites / maxV * 100);
    return '<div class="fr" onclick="showC(\'' + c.id + '\')"><div style="flex:1"><div style="font-size:.85rem;font-weight:600">' + (i + 1) + '. ' + c.nom + '</div><div class="bw"><div class="bf" style="width:' + pct + '%"></div></div></div><span class="bdg gold">' + c.nb_visites + '×</span></div>';
  }).join('');
}

// ═══ CLIENTS ═══
function renderClients(f) {
  if (!f) f = '';
  const now = new Date();
  const msD = 86400000;
  const lst = document.getElementById('lst-clients');
  const filtered = CD.filter(c => !f || c.nom.toUpperCase().includes(f.toUpperCase().trim()));
  document.getElementById('count-lbl').textContent = filtered.length + ' client(s) — triés par ancienneté de visite';
  lst.innerHTML = filtered
    .sort((a, b) => new Date(a.derniere_visite) - new Date(b.derniere_visite))
    .map(c => {
      const d = Math.round((now - new Date(c.derniere_visite)) / msD);
      const bc = d > 60 ? 'r' : d > 30 ? 'o' : 'g';
      return '<div class="row" onclick="showC(\'' + c.id + '\')"><div><div class="rn">' + c.nom + '</div><div class="rs">' + c.nb_visites + ' visite(s) · Dernière : ' + c.derniere_visite + '</div></div><div><span class="bdg ' + bc + '">' + d + 'j</span></div></div>';
    }).join('');
}
function filterC(v) { renderClients(v); }

// ═══ DÉTAIL CLIENT (modal) ═══
function showC(id) {
  const c = CD.find(x => x.id === id);
  if (!c) return;
  const now = new Date();
  const d = Math.round((now - new Date(c.derniere_visite)) / 86400000);
  const bc = d > 60 ? 'r' : d > 30 ? 'o' : 'g';
  const histo = VD.filter(v => v.client === c.nom).sort((a, b) => b.date.localeCompare(a.date)).slice(0, 8);
  const appV = VA.filter(v => v.client_id === id).sort((a, b) => b.date.localeCompare(a.date));

  let html = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.75rem">';
  html += '<div style="font-size:.75rem;color:var(--txt2)">' + c.nb_visites + ' visite(s) · Objets habituels :</div>';
  html += '<span class="bdg ' + bc + '">' + d + 'j</span></div>';
  html += '<div class="tr" style="margin-bottom:.75rem">' + (c.objets || []).map(o => '<span class="tg">' + o + '</span>').join('') + '</div>';
  html += '<div style="font-family:\'Inconsolata\',monospace;font-size:.6rem;color:var(--txt2);text-transform:uppercase;letter-spacing:.1em;margin-bottom:.4rem">Historique CR</div>';
  html += histo.map(v => '<div style="padding:.4rem 0;border-bottom:1px solid var(--border);font-size:.8rem"><strong style="color:var(--orc)">' + v.date + '</strong> <span style="color:var(--txt2)">S' + v.semaine + ' · ' + (v.objet || '—') + '</span></div>').join('');

  if (appV.length) {
    html += '<div style="font-family:\'Inconsolata\',monospace;font-size:.6rem;color:var(--orc);text-transform:uppercase;letter-spacing:.1em;margin-top:.75rem;margin-bottom:.4rem">Saisies app (' + appV.length + ')</div>';
    html += appV.map(v => {
      let details = (v.objet || '') + ' ' + (v.result ? '→ ' + v.result : '');
      if (v.parcelle) details = '📍 ' + v.parcelle + ' · ' + details;
      return '<div style="padding:.4rem 0;border-bottom:1px solid var(--border);font-size:.8rem"><strong style="color:var(--orc)">' + v.date + '</strong> <span style="color:var(--txt2)">' + details + '</span></div>';
    }).join('');
  }

  html += '<button class="btn bp" onclick="cM();presC(\'' + id + '\')" style="margin-top:1rem">+ Nouvelle visite</button>';
  document.getElementById('m-title').textContent = c.nom;
  document.getElementById('m-body').innerHTML = html;
  document.getElementById('mov').classList.add('open');
}
function cM() { document.getElementById('mov').classList.remove('open'); }
function presC(id) {
  document.getElementById('s-client').value = id;
  nav('saisie', document.querySelectorAll('.bn')[2]);
}

// ═══ SAISIE ═══
function initSel() {
  const sel = document.getElementById('s-client');
  sel.innerHTML = '<option value="">— Sélectionner un client —</option>';
  [...CD].sort((a, b) => a.nom.localeCompare(b.nom)).forEach(c => {
    const o = document.createElement('option');
    o.value = c.id;
    o.textContent = c.nom;
    sel.appendChild(o);
  });
  document.getElementById('s-date').value = new Date().toISOString().split('T')[0];
}

function saveV() {
  const cid = document.getElementById('s-client').value;
  const date = document.getElementById('s-date').value;
  if (!cid || !date) { toast('⚠ Client et date requis'); return; }
  const v = {
    id: Date.now(),
    client_id: cid,
    date: date,
    parcelle: document.getElementById('s-parcelle').value.trim(),
    objet: document.getElementById('s-objet').value,
    result: document.getElementById('s-result').value,
    conc: document.getElementById('s-conc').value,
    notes: document.getElementById('s-notes').value,
    produits: [...document.querySelectorAll('#s-tags .tg.on')].map(t => t.textContent)
  };
  VA.push(v);
  localStorage.setItem('bergon_crm_app', JSON.stringify(VA));
  const c = CD.find(x => x.id === cid);
  if (c && date > c.derniere_visite) { c.derniere_visite = date; c.nb_visites++; }
  toast('✓ Visite enregistrée — ' + (c ? c.nom : cid));
  clearF();
  renderBoard();
  renderClients();
  if (CFG.token) syncPush(true);
}

function clearF() {
  ['s-client', 's-parcelle', 's-objet', 's-result', 's-conc', 's-notes'].forEach(id => document.getElementById(id).value = '');
  document.querySelectorAll('#s-tags .tg').forEach(t => t.classList.remove('on'));
}

// ═══ RAPPORT ═══
function renderRapport() {
  const now = new Date();
  const msD = 86400000;
  const inactifs = CD.filter(c => (now - new Date(c.derniere_visite)) / msD > 60);
  const appSem = VA.filter(v => (now - new Date(v.date)) / msD <= 7);
  const appMois = VA.filter(v => (now - new Date(v.date)) / msD <= 30);
  const cmds = VA.filter(v => v.result === 'Commande prise');
  const perdus = VA.filter(v => v.result === 'Perdu — concurrent');

  const dateStr = now.toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
  document.getElementById('rp-per').textContent = 'Généré le ' + dateStr + ' · Agent 360';

  document.getElementById('rp-stats').innerHTML =
    '<div class="stat-line"><span class="stat-lbl">Visites saisies app — 7j</span><span class="stat-val">' + appSem.length + '</span></div>' +
    '<div class="stat-line"><span class="stat-lbl">Visites saisies app — 30j</span><span class="stat-val">' + appMois.length + '</span></div>' +
    '<div class="stat-line"><span class="stat-lbl">Commandes concrétisées</span><span class="stat-val">' + cmds.length + '</span></div>' +
    '<div class="stat-line"><span class="stat-lbl">Pertes concurrence</span><span class="stat-val" style="color:var(--rouge)">' + perdus.length + '</span></div>' +
    '<div class="stat-line"><span class="stat-lbl">Clients 60j+ sans visite</span><span class="stat-val" style="color:var(--rouge)">' + inactifs.length + '</span></div>' +
    '<div class="stat-line"><span class="stat-lbl">Total visites (CR + app)</span><span class="stat-val">' + (VD.length + VA.length) + '</span></div>';

  // À prévoir — clients à relancer
  const rn = document.getElementById('rp-next');
  if (!inactifs.length) {
    rn.innerHTML = '<div class="ar"><div class="ai">✅</div><div class="at"><strong>Rien à prévoir</strong><span>Portefeuille à jour</span></div></div>';
  } else {
    rn.innerHTML = inactifs.slice(0, 10).map(c => {
      const d = Math.round((now - new Date(c.derniere_visite)) / msD);
      return '<div class="ar"><div class="ai">🔴</div><div class="at"><strong>' + c.nom + '</strong><span>Priorité — ' + d + 'j sans visite</span></div></div>';
    }).join('');
  }

  // Saisies app
  document.getElementById('bdg-app').textContent = VA.length;
  const ra = document.getElementById('rp-app');
  if (!VA.length) {
    ra.innerHTML = '<div class="ar"><div class="ai">📝</div><div class="at"><strong>Aucune visite saisie</strong><span>Utilisez l\'onglet Saisir</span></div></div>';
    return;
  }
  ra.innerHTML = [...VA].reverse().map(v => {
    const c = CD.find(x => x.id === v.client_id);
    let details = (v.objet || '') + (v.result ? ' → ' + v.result : '') + (v.conc ? ' · Conc: ' + v.conc : '');
    if (v.parcelle) details = '📍 ' + v.parcelle + ' · ' + details;
    return '<div class="ar"><div class="ai">★</div><div class="at"><strong>' + (c ? c.nom : v.client_id) + ' — ' + v.date + '</strong><span>' + details + '</span></div></div>';
  }).join('');
}

// ═══ HISTORIQUE ═══
function renderHisto() {
  const f = document.getElementById('histo-filter').value;
  const data = f ? VD.filter(v => String(v.semaine) === f) : VD;
  const lst = document.getElementById('lst-histo');
  if (!data.length) {
    lst.innerHTML = '<div class="ar"><div class="at"><strong>Aucune visite</strong></div></div>';
    return;
  }
  let curS = null;
  lst.innerHTML = [...data].sort((a, b) => b.date.localeCompare(a.date)).map(v => {
    let out = '';
    if (v.semaine !== curS) {
      curS = v.semaine;
      out += '<div class="sl">Semaine ' + v.semaine + ' · ' + v.date.substring(0, 7) + '</div>';
    }
    out += '<div class="row"><div><div class="rn">' + v.client + '</div><div class="rs">' + v.date + ' · ' + (v.objet || '—') + '</div></div></div>';
    return out;
  }).join('');
}

// ═══ COPIE RAPPORT ═══
function copyR() {
  const now = new Date();
  const msD = 86400000;
  const inactifs = CD.filter(c => (now - new Date(c.derniere_visite)) / msD > 60);
  const appSem = VA.filter(v => (now - new Date(v.date)) / msD <= 7);

  let t = 'BERGON — RAPPORT CRM\n';
  t += '════════════════════════════════════\n';
  t += 'Généré le ' + now.toLocaleDateString('fr-FR') + '\n';
  t += 'Agent 360 · ' + CD.length + ' clients · ' + (VD.length + VA.length) + ' visites\n\n';

  t += 'VISITES 7 DERNIERS JOURS (' + appSem.length + ')\n';
  if (appSem.length) {
    appSem.forEach(v => {
      const c = CD.find(x => x.id === v.client_id);
      t += '· ' + (c ? c.nom : '?') + ' (' + v.date + ') — ' + (v.objet || '');
      if (v.result) t += ' → ' + v.result;
      t += '\n';
    });
  } else {
    t += '— Aucune\n';
  }

  t += '\n⚠ CLIENTS 60J+ SANS VISITE (' + inactifs.length + ')\n';
  inactifs.forEach(c => {
    const d = Math.round((now - new Date(c.derniere_visite)) / msD);
    t += '· ' + c.nom + ' — ' + d + 'j\n';
  });

  if (VA.length) {
    t += '\nTOUTES MES SAISIES APP (' + VA.length + ')\n';
    [...VA].reverse().forEach(v => {
      const c = CD.find(x => x.id === v.client_id);
      t += '· ' + (c ? c.nom : '?') + ' (' + v.date + ') — ' + (v.objet || '');
      if (v.result) t += ' → ' + v.result;
      if (v.conc) t += ' · Conc: ' + v.conc;
      t += '\n';
    });
  }

  navigator.clipboard.writeText(t).then(() => toast('✓ Rapport copié'));
}

// ═══ CONFIG ═══
function openCfg() {
  document.getElementById('cfg-token').value = CFG.token || '';
  document.getElementById('cfg-owner').value = CFG.owner || '';
  document.getElementById('cfg-repo').value = CFG.repo || '';
  document.getElementById('cfg-file').value = CFG.file || '';
  document.getElementById('mcfg').classList.add('open');
}
function closeCfg() { document.getElementById('mcfg').classList.remove('open'); }

function saveCfg() {
  CFG.token = document.getElementById('cfg-token').value.trim();
  CFG.owner = document.getElementById('cfg-owner').value.trim();
  CFG.repo = document.getElementById('cfg-repo').value.trim();
  CFG.file = document.getElementById('cfg-file').value.trim() || 'visites.json';
  localStorage.setItem('bergon_crm_cfg', JSON.stringify(CFG));
  updateSyncStatus('ok', 'Config OK');
  toast('✓ Config enregistrée');
  closeCfg();
}

function updateSyncStatus(state, label) {
  const el = document.getElementById('sync-status');
  const dot = document.querySelector('.live-dot');
  if (el) el.textContent = label;
  if (!dot) return;
  if (state === 'ok') dot.style.background = 'var(--ok)';
  else if (state === 'warn') dot.style.background = 'var(--orange)';
  else if (state === 'err') dot.style.background = 'var(--rouge)';
}

// ═══ SYNC GITHUB ═══
async function syncPush(silent) {
  if (!CFG.token || !CFG.owner || !CFG.repo) {
    if (!silent) toast('⚠ Config GitHub manquante');
    return;
  }
  try {
    const url = 'https://api.github.com/repos/' + CFG.owner + '/' + CFG.repo + '/contents/' + CFG.file;
    let sha = null;
    const head = await fetch(url, { headers: { Authorization: 'token ' + CFG.token, Accept: 'application/vnd.github.v3+json' } });
    if (head.ok) { const d = await head.json(); sha = d.sha; }
    const content = btoa(unescape(encodeURIComponent(JSON.stringify(VA, null, 2))));
    const body = { message: 'CRM update ' + new Date().toISOString(), content: content };
    if (sha) body.sha = sha;
    const r = await fetch(url, {
      method: 'PUT',
      headers: { Authorization: 'token ' + CFG.token, 'Content-Type': 'application/json', Accept: 'application/vnd.github.v3+json' },
      body: JSON.stringify(body)
    });
    if (r.ok) {
      updateSyncStatus('ok', 'Sync ' + new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }));
      if (!silent) toast('✓ Poussé sur GitHub');
    } else {
      updateSyncStatus('err', 'Sync KO');
      if (!silent) toast('⚠ Erreur push');
    }
  } catch (e) {
    updateSyncStatus('err', 'Sync KO');
    if (!silent) toast('⚠ Erreur réseau');
  }
}

async function syncPull(silent) {
  if (!CFG.token || !CFG.owner || !CFG.repo) {
    if (!silent) toast('⚠ Config GitHub manquante');
    return;
  }
  try {
    const url = 'https://api.github.com/repos/' + CFG.owner + '/' + CFG.repo + '/contents/' + CFG.file;
    const r = await fetch(url, { headers: { Authorization: 'token ' + CFG.token, Accept: 'application/vnd.github.v3+json' } });
    if (!r.ok) {
      if (!silent) toast('⚠ Fichier introuvable sur le repo');
      return;
    }
    const d = await r.json();
    const decoded = decodeURIComponent(escape(atob(d.content)));
    const remote = JSON.parse(decoded);
    const ids = new Set(VA.map(v => v.id));
    const fresh = remote.filter(v => !ids.has(v.id));
    VA = VA.concat(fresh);
    localStorage.setItem('bergon_crm_app', JSON.stringify(VA));
    // Mettre à jour derniere_visite des clients
    VA.forEach(v => {
      const c = CD.find(x => x.id === v.client_id);
      if (c && v.date > c.derniere_visite) { c.derniere_visite = v.date; c.nb_visites++; }
    });
    updateSyncStatus('ok', 'Sync OK');
    if (fresh.length && !silent) toast('✓ ' + fresh.length + ' visite(s) récupérée(s)');
    renderAll();
  } catch (e) {
    updateSyncStatus('err', 'Sync KO');
    if (!silent) toast('⚠ Erreur pull');
  }
}

// ═══ TOAST ═══
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2400);
}

// ═══ RENDU GLOBAL ═══
function renderAll() {
  renderBoard();
  renderClients();
  renderRapport();
  renderHisto();
}

// ═══ DÉMARRAGE ═══
loadData();
