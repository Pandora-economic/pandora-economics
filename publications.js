/* =====================================================================
   PANDORA Economics — Liste centrale des publications (multilingue)
   ---------------------------------------------------------------------
   AJOUTER UNE ANALYSE : dupliquez un bloc en haut de la liste.
     - FR obligatoires : titre, resume (intro optionnel)
     - Traductions optionnelles : titre_en/_zh, resume_en/_zh, intro_en/_zh
     - PDF : pdf (français, défaut) + pdf_en / pdf_zh optionnels
       Si un PDF traduit manque, le site ouvre le PDF français avec une mention.
   Thèmes (clé interne, à recopier exactement) :
     "Politique monétaire" · "Marchés & taux" · "Macroéconomie" · "France"
   ===================================================================== */
window.PUBLICATIONS = [
  { num:"02", date:"2026-05-01", theme:"Macroéconomie", minutes:11,
    tags:["Carburants","Énergie","Fiscalité","Diff. en différences","International"],
    tags_en:["Fuel","Energy","Taxation","Diff-in-diff","International"],
    tags_zh:["燃油","能源","税收","双重差分","国际"],
    titre_ko:"연료 가격: 비대칭이 아닌 글로벌 충격", titre_ja:"燃料価格：非対称ではなく世界的なショック", resume_ko:"2024년에서 2026년 사이, 연료 가격 상승은 대체로 글로벌한 충격으로 나타나며 — 생산국도 영향을 받는다 — 세금보다 시장 요인에 의해 주도된다.", resume_ja:"2024年から2026年にかけて、燃料価格の上昇はおおむね世界的なショックとして現れ——生産国も影響を受け——税よりも市場要因によって牽引される。", intro_ko:"2024년에서 2026년 사이, 연료 가격은 2026년 초부터 크게 상승하여 생산국을 포함한 표본 전체에 영향을 미쳤다. 분석은 이것이 수입국만을 겨냥한 비대칭 효과가 아니라 본질적으로 글로벌한 충격이며, 세금보다 세전(시장·정제) 요소에 의해 더 크게 주도됨을 보여준다. 이중차분 분석은 호르무즈 충격이 수입국과 수출국 사이에 통계적으로 유의한 차별적 효과를 일으키지 않았음을 보여준다.", intro_ja:"2024年から2026年にかけて、燃料価格は2026年初頭から大きく上昇し、生産国を含むパネル全体に影響を及ぼした。分析は、これが輸入国だけを襲う非対称な効果ではなく本質的に世界的なショックであり、税よりも税抜（市場・精製）部分によってより大きく牽引されることを示す。差分の差分分析は、ホルムズ・ショックが輸入国と輸出国の間に統計的に有意な差別的効果をもたらさなかったことを示す。", tags_ko:["연료", "에너지", "조세", "이중차분", "국제"], tags_ja:["燃料", "エネルギー", "税制", "差分の差分", "国際"],
    titre:"Prix des carburants : un choc mondial plutôt qu'asymétrique",
    titre_en:"Fuel prices: a global rather than an asymmetric shock",
    titre_zh:"燃油价格：一场全球性而非不对称的冲击",
    resume:"Entre 2024 et 2026, la hausse des prix des carburants apparaît comme un choc largement mondial — touchant aussi les pays producteurs — porté par la composante de marché plus que par la fiscalité.",
    resume_en:"Between 2024 and 2026, the rise in fuel prices looks like a largely global shock — affecting producer countries too — driven by the market component rather than by taxation.",
    resume_zh:"2024年至2026年间，燃油价格的上涨呈现为一场主要属于全球性的冲击——产油国同样受到波及——其主因是市场因素而非税收。",
    intro:"Entre 2024 et 2026, les prix des carburants ont fortement augmenté à partir de début 2026, touchant l'ensemble du panel, y compris les pays producteurs. L'analyse révèle un choc essentiellement mondial plutôt qu'un effet asymétrique frappant les seuls importateurs, porté davantage par la composante hors taxes (marché, raffinage) que par la fiscalité. L'analyse en double différence ne met en évidence aucun effet différentiel significatif du choc d'Ormuz entre importateurs et exportateurs.",
    intro_en:"Between 2024 and 2026, fuel prices rose sharply from early 2026, affecting the whole panel, including hydrocarbon-producing countries. The analysis points to an essentially global shock rather than an asymmetric effect hitting only importers, driven more by the pre-tax (market, refining) component than by taxation. A difference-in-differences analysis finds no statistically significant differential effect of the Hormuz shock between importers and exporters.",
    intro_zh:"2024年至2026年间，燃油价格自2026年初起大幅上涨，波及整个样本国家，包括油气生产国。分析表明这主要是一场全球性冲击，而非仅冲击进口国的不对称效应，其驱动更多来自税前（市场、炼化）部分而非税收。双重差分分析未发现霍尔木兹冲击在进口国与出口国之间存在具有统计显著性的差异效应。",
    pdf:"pdfs/analyse-02.pdf", pdf_en:"pdfs/analyse-02-en.pdf", pdf_zh:"pdfs/analyse-02-zh.pdf", pdf_ko:"pdfs/analyse-02-ko.pdf", pdf_ja:"pdfs/analyse-02-ja.pdf" },
  { num:"01", date:"2026-04-01", theme:"France", minutes:4,
    tags:["Automobile","Europe","Parts de marché","CCFA"],
    tags_en:["Automotive","Europe","Market share","CCFA"],
    tags_zh:["汽车","欧洲","市场份额","CCFA"],
    titre_ko:"재편과 제약 사이의 프랑스 자동차 시장", titre_ja:"再編と制約のはざまにあるフランス自動車市場", resume_ko:"유럽 제조사가 주도해 온 프랑스 자동차 시장은 아시아의 경쟁, 신용 비용, 탈탄소 제약의 영향으로 재편되고 있다.", resume_ja:"欧州メーカーが主導してきたフランス自動車市場は、アジア勢の競争、信用コスト、脱炭素の制約を受けて再編が進んでいる。", intro_ko:"프랑스 자동차 시장은 2024년 아시아 브랜드의 일시적 약진에도 불구하고 여전히 유럽 제조사가 주도하고 있다. 가격 상승, 신용 비용 증가, 탈탄소 요건이 이제 신차 구입의 접근성을 압박하며 업계의 균형을 재편하고 있다.", intro_ja:"フランス自動車市場は、2024年のアジア系ブランドの一時的な台頭にもかかわらず、依然として欧州メーカーが主導している。価格の上昇、信用コストの増加、脱炭素の要件が、いまや新車の入手しやすさを圧迫し、業界の均衡を再編している。", tags_ko:["자동차", "유럽", "시장 점유율", "CCFA"], tags_ja:["自動車", "欧州", "市場シェア", "CCFA"],
    titre:"Le marché automobile français entre recomposition et contraintes",
    titre_en:"The French car market between recomposition and constraints",
    titre_zh:"法国汽车市场：重构与制约之间",
    resume:"Dominé par les constructeurs européens, le marché automobile français se recompose sous l'effet de la concurrence asiatique, du coût du crédit et des contraintes de décarbonation.",
    resume_en:"Still dominated by European carmakers, the French car market is being reshaped by Asian competition, credit costs and decarbonisation constraints.",
    resume_zh:"在仍由欧洲车企主导的同时，法国汽车市场正受到亚洲竞争、信贷成本与脱碳约束的重塑。",
    intro:"Le marché automobile français reste dominé par les constructeurs européens, malgré une percée temporaire des marques asiatiques en 2024. Hausse des prix, renchérissement du crédit et exigences de décarbonation pèsent désormais sur l'accessibilité du véhicule neuf et recomposent les équilibres du secteur.",
    intro_en:"The French car market remains dominated by European manufacturers, despite a temporary breakthrough by Asian brands in 2024. Rising prices, costlier credit and decarbonisation requirements now weigh on the affordability of new vehicles and are reshaping the sector's balance.",
    intro_zh:"尽管亚洲品牌在2024年实现了短暂突破，法国汽车市场仍由欧洲制造商主导。价格上涨、信贷成本上升以及脱碳要求，正在削弱新车的可负担性，并重塑该行业的格局。",
    pdf:"pdfs/analyse-01.pdf", pdf_en:"pdfs/analyse-01-en.pdf", pdf_zh:"pdfs/analyse-01-zh.pdf", pdf_ko:"pdfs/analyse-01-ko.pdf", pdf_ja:"pdfs/analyse-01-ja.pdf" },
  { num:"S1", numLabel:"RHSSH · 1(11)", date:"2025-09-11", theme:"Publication scientifique", minutes:8,
    external:"https://lescientifique.org/rhsshvolume1numero11",
    tags:["Politique économique","Investissement public et privé","Infrastructures","Indicateur composite","Économétrie","Instabilité"],
    tags_en:["Economic policies","Public and private investment","Infrastructures","Composite indicator","Econometrics","Instability"],
    titre:"Le développement, un mélange entre investissement public et privé : proposition d'un indicateur d'infrastructure publique",
    titre_en:"Development as a blend of public and private investment: proposing a public-infrastructure indicator",
    resume:"Présentation de l'IDEO, un indicateur composite (11 indicateurs) mesurant l'adéquation de l'offre publique et privée d'infrastructures — communication, électricité, transport — en intégrant les conditions environnementales et la stabilité politique.",
    resume_en:"Introducing the IDEO, a composite indicator (11 indicators) gauging the adequacy of public and private infrastructure provision — communication, electricity, transport — while accounting for environmental conditions and political stability.",
    intro:"Publié dans la Revue Haïtienne des Sciences Sociales et Humaines (RHSSH, 2025), cet article propose l'IDEO — indicateur de développement économique optimale —, qui mesure l'adéquation entre l'offre publique et privée d'infrastructures et les besoins de l'économie. Construit sur 11 indicateurs (contexte économique, écologique et social), il intègre les infrastructures de communication, d'électricité et de transport (routes, ports, aéroports), ainsi que la stabilité politique comme facteur de développement.",
    intro_en:"Published in the Revue Haïtienne des Sciences Sociales et Humaines (RHSSH, 2025), this paper proposes the IDEO — optimal economic development indicator — measuring how well public and private infrastructure provision matches an economy's needs. Built on 11 indicators (economic, ecological and social context), it integrates communication, electricity and transport infrastructure (roads, ports, airports), as well as political stability as a development factor." }
];

window.THEME_ORDER = ["Politique monétaire","Marchés & taux","Macroéconomie","France","Publication scientifique"];

function _lang(){ return (window.I18N && window.I18N.lang) ? window.I18N.lang : "fr"; }
window.pubField = function(p, base){ var l=_lang(); if(l!=="fr" && p[base+"_"+l]) return p[base+"_"+l]; return p[base]||""; };
window.pubPdf = function(p){ var l=_lang(); if(l!=="fr" && p["pdf_"+l]) return { url:p["pdf_"+l], fallback:false }; return { url:p.pdf, fallback:(l!=="fr") }; };
window.fmtDate = function(iso, lang, withYear){
  lang = lang || _lang();
  var p=String(iso).split("-"), y=p[0], mo=parseInt(p[1],10), dd=p[2];
  if(lang==="zh"){ return y+"年"+mo+"月"+parseInt(dd,10)+"日"; }
  var EN=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var FR=["JANV","FÉVR","MARS","AVR","MAI","JUIN","JUIL","AOÛT","SEPT","OCT","NOV","DÉC"];
  var arr=(lang==="en")?EN:FR;
  return dd+" "+arr[mo-1]+(withYear?(" "+y):"");
};
window.pubsSorted = function(){ return (window.PUBLICATIONS||[]).slice().sort(function(a,b){ return b.date.localeCompare(a.date); }); };
