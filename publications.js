/* =====================================================================
   PANDORA Economics — Liste centrale des publications (multilingue)
   ---------------------------------------------------------------------
   AJOUTER UNE ANALYSE : dupliquez un bloc en haut de la liste.
     - Champs FR obligatoires : titre, resume (intro optionnel)
     - Traductions optionnelles : titre_en/_zh, resume_en/_zh, intro_en/_zh
     - PDF : pdf (français, défaut) + pdf_en / pdf_zh optionnels
       Si un PDF traduit manque, le site ouvre le PDF français avec une mention.
   Thèmes (clé interne, à recopier exactement) :
     "Politique monétaire" · "Marchés & taux" · "Macroéconomie" · "France"
   ===================================================================== */
window.PUBLICATIONS = [
  { num:"07", date:"2026-06-12", theme:"Politique monétaire",
    titre:"BCE : la pause prolongée, et après ?",
    titre_en:"The ECB's prolonged pause — what comes next?",
    titre_zh:"欧洲央行的长期暂停，之后呢？",
    resume:"La trajectoire des taux dépend désormais davantage de l'inflation des services que du prix de l'énergie.",
    resume_en:"The path of rates now depends more on services inflation than on energy prices.",
    resume_zh:"利率走向如今更多取决于服务业通胀，而非能源价格。",
    intro:"Après quatre baisses consécutives, la BCE marque une pause. Cette analyse revient sur ce qui détermine désormais le calendrier des taux, et sur les conséquences concrètes pour le crédit en zone euro.",
    intro_en:"After four consecutive cuts, the ECB hits pause. This analysis looks at what now drives the rate timetable, and the concrete consequences for credit in the euro area.",
    intro_zh:"在连续四次降息后，欧洲央行按下暂停键。本文分析当前决定利率节奏的因素，以及对欧元区信贷的具体影响。",
    pdf:"pdfs/analyse-07.pdf" /* , pdf_en:"pdfs/analyse-07-en.pdf", pdf_zh:"pdfs/analyse-07-zh.pdf" */ },

  { num:"06", date:"2026-05-28", theme:"France",
    titre:"Crédit immobilier : le tournant des taux",
    titre_en:"Mortgage credit: the turning point on rates",
    titre_zh:"房贷：利率的转折点",
    resume:"Ce que la détente du coût du crédit change réellement pour le pouvoir d'achat immobilier des ménages.",
    resume_en:"What easing borrowing costs really change for households' home-buying power.",
    resume_zh:"信贷成本下降对家庭购房能力的实际影响。",
    pdf:"pdfs/analyse-06.pdf" },

  { num:"05", date:"2026-05-14", theme:"Macroéconomie",
    titre:"Inflation de services : le dernier kilomètre",
    titre_en:"Services inflation: the last mile",
    titre_zh:"服务业通胀：最后一公里",
    resume:"La part la plus rigide de l'inflation, et pourquoi elle décide du calendrier des banques centrales.",
    resume_en:"The stickiest part of inflation, and why it sets the central banks' timetable.",
    resume_zh:"通胀中最具黏性的部分，及其为何决定央行的时间表。",
    pdf:"pdfs/analyse-05.pdf" },

  { num:"04", date:"2026-04-30", theme:"Marchés & taux",
    titre:"Dette souveraine : la prime française",
    titre_en:"Sovereign debt: the French premium",
    titre_zh:"主权债务：法国溢价",
    resume:"Lecture de l'écart de taux entre la France et l'Allemagne, et de ce qu'il dit du risque politique.",
    resume_en:"Reading the rate spread between France and Germany, and what it says about political risk.",
    resume_zh:"解读法国与德国之间的利差，及其反映的政治风险。",
    pdf:"pdfs/analyse-04.pdf" },

  { num:"03", date:"2026-04-16", theme:"Politique monétaire",
    titre:"Fed : le pivot qui se fait attendre",
    titre_en:"The Fed: the pivot that keeps us waiting",
    titre_zh:"美联储：迟迟未到的转向",
    resume:"Pourquoi le calendrier américain pèse sur les anticipations de taux en zone euro.",
    resume_en:"Why the US timetable weighs on euro-area rate expectations.",
    resume_zh:"为何美国的时间表会影响欧元区的利率预期。",
    pdf:"pdfs/analyse-03.pdf" },

  { num:"02", date:"2026-04-02", theme:"Macroéconomie",
    titre:"Énergie : la facture qui reflue",
    titre_en:"Energy: the bill recedes",
    titre_zh:"能源：回落的账单",
    resume:"L'effet de base énergétique et son impact mécanique sur l'indice des prix à la consommation.",
    resume_en:"The energy base effect and its mechanical impact on the consumer price index.",
    resume_zh:"能源基数效应及其对消费者价格指数的机械影响。",
    pdf:"pdfs/analyse-02.pdf" },

  { num:"01", date:"2026-03-19", theme:"Marchés & taux",
    titre:"OAT-Bund : lire l'écart de taux",
    titre_en:"OAT-Bund: reading the rate spread",
    titre_zh:"法债与德债：解读利差",
    resume:"Ce que le spread entre dette française et allemande dit du risque perçu sur la signature française.",
    resume_en:"What the spread between French and German debt says about perceived risk on the French signature.",
    resume_zh:"法德两国债券利差所反映的市场对法国信用的风险感知。",
    pdf:"pdfs/analyse-01.pdf" },

  { num:"00", date:"2026-03-05", theme:"France",
    titre:"Pouvoir d'achat : l'illusion nominale",
    titre_en:"Purchasing power: the nominal illusion",
    titre_zh:"购买力：名义幻觉",
    resume:"Distinguer la hausse des salaires affichée de l'évolution réelle du revenu disponible.",
    resume_en:"Telling headline wage growth apart from the real change in disposable income.",
    resume_zh:"区分名义工资增长与可支配收入的实际变化。",
    pdf:"pdfs/analyse-00.pdf" }
];

window.THEME_ORDER = ["Politique monétaire","Marchés & taux","Macroéconomie","France"];

/* langue courante (via i18n.js, sinon français) */
function _lang(){ return (window.I18N && window.I18N.lang) ? window.I18N.lang : "fr"; }

/* champ traduit avec repli sur le français : pubField(p,"titre") */
window.pubField = function(p, base){
  var l=_lang(); if(l!=="fr" && p[base+"_"+l]) return p[base+"_"+l]; return p[base]||"";
};

/* PDF de la langue courante, avec repli FR -> { url, fallback:true|false } */
window.pubPdf = function(p){
  var l=_lang();
  if(l!=="fr" && p["pdf_"+l]) return { url:p["pdf_"+l], fallback:false };
  return { url:p.pdf, fallback:(l!=="fr") };
};

/* date localisée : "2026-06-12" -> FR "12 JUIN 2026" · EN "12 Jun 2026" · ZH "2026年6月12日" */
window.fmtDate = function(iso, lang, withYear){
  lang = lang || _lang();
  var p=String(iso).split("-"), y=p[0], mo=parseInt(p[1],10), dd=p[2];
  if(lang==="zh"){ return y+"年"+mo+"月"+parseInt(dd,10)+"日"; }
  var EN=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var FR=["JANV","FÉVR","MARS","AVR","MAI","JUIN","JUIL","AOÛT","SEPT","OCT","NOV","DÉC"];
  var arr = (lang==="en")?EN:FR;
  return dd+" "+arr[mo-1]+(withYear?(" "+y):"");
};

window.pubsSorted = function(){
  return (window.PUBLICATIONS||[]).slice().sort(function(a,b){ return b.date.localeCompare(a.date); });
};
