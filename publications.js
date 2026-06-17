/* =====================================================================
   PANDORA Economics — Liste centrale des publications
   ---------------------------------------------------------------------
   POUR AJOUTER UNE ANALYSE :
   1) Déposez le PDF dans le dossier  pdfs/  (ex. pdfs/analyse-08.pdf)
   2) Ajoutez un bloc en HAUT de la liste ci-dessous (le plus récent en premier)
   3) C'est tout : l'accueil et la page Publications se mettent à jour seuls.

   Thèmes autorisés (à recopier exactement) :
     "Politique monétaire" · "Marchés & taux" · "Macroéconomie" · "France"
   Format de date : "AAAA-MM-JJ"  (ex. "2026-06-25")

   Champs OPTIONNELS :
     intro : un chapô plus long affiché sur la page de l'article (sinon = resume)
     image : une couverture, ex. "images/analyse-08.jpg" (sinon = visuel auto)
   ===================================================================== */

window.PUBLICATIONS = [
  { num:"07", date:"2026-06-12", theme:"Politique monétaire",
    titre:"BCE : la pause prolongée, et après ?",
    resume:"La trajectoire des taux dépend désormais davantage de l'inflation des services que du prix de l'énergie.",
    intro:"Après quatre baisses consécutives, la BCE marque une pause. Cette analyse revient sur ce qui détermine désormais le calendrier des taux, et sur les conséquences concrètes pour le crédit en zone euro.",
    image:"",
    pdf:"pdfs/analyse-07.pdf" },

  { num:"06", date:"2026-05-28", theme:"France",
    titre:"Crédit immobilier : le tournant des taux",
    resume:"Ce que la détente du coût du crédit change réellement pour le pouvoir d'achat immobilier des ménages.",
    pdf:"pdfs/analyse-06.pdf" },

  { num:"05", date:"2026-05-14", theme:"Macroéconomie",
    titre:"Inflation de services : le dernier kilomètre",
    resume:"La part la plus rigide de l'inflation, et pourquoi elle décide du calendrier des banques centrales.",
    pdf:"pdfs/analyse-05.pdf" },

  { num:"04", date:"2026-04-30", theme:"Marchés & taux",
    titre:"Dette souveraine : la prime française",
    resume:"Lecture de l'écart de taux entre la France et l'Allemagne, et de ce qu'il dit du risque politique.",
    pdf:"pdfs/analyse-04.pdf" },

  { num:"03", date:"2026-04-16", theme:"Politique monétaire",
    titre:"Fed : le pivot qui se fait attendre",
    resume:"Pourquoi le calendrier américain pèse sur les anticipations de taux en zone euro.",
    pdf:"pdfs/analyse-03.pdf" },

  { num:"02", date:"2026-04-02", theme:"Macroéconomie",
    titre:"Énergie : la facture qui reflue",
    resume:"L'effet de base énergétique et son impact mécanique sur l'indice des prix à la consommation.",
    pdf:"pdfs/analyse-02.pdf" },

  { num:"01", date:"2026-03-19", theme:"Marchés & taux",
    titre:"OAT-Bund : lire l'écart de taux",
    resume:"Ce que le spread entre dette française et allemande dit du risque perçu sur la signature française.",
    pdf:"pdfs/analyse-01.pdf" },

  { num:"00", date:"2026-03-05", theme:"France",
    titre:"Pouvoir d'achat : l'illusion nominale",
    resume:"Distinguer la hausse des salaires affichée de l'évolution réelle du revenu disponible.",
    pdf:"pdfs/analyse-00.pdf" }
];

/* ---- Réglages d'affichage (rarement à modifier) ---- */
window.THEME_ORDER = ["Politique monétaire","Marchés & taux","Macroéconomie","France"];
window.THEME_SHORT = { "Politique monétaire":"Pol. monétaire", "Marchés & taux":"Marchés", "Macroéconomie":"Macro", "France":"France" };

/* ---- Formatage de date "2026-06-12" -> "12 JUIN 2026" ---- */
window.frDate = function(iso, withYear){
  var M = ["JANV","FÉVR","MARS","AVR","MAI","JUIN","JUIL","AOÛT","SEPT","OCT","NOV","DÉC"];
  var p = String(iso).split("-");
  var out = p[2] + " " + (M[parseInt(p[1],10)-1] || "");
  return withYear ? out + " " + p[0] : out;
};

/* ---- Liste triée du plus récent au plus ancien ---- */
window.pubsSorted = function(){
  return (window.PUBLICATIONS || []).slice().sort(function(a,b){ return b.date.localeCompare(a.date); });
};
