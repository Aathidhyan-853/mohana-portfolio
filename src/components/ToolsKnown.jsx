import "./ToolsKnown.css";
//import useFadeUp from "../hooks/useFadeIn"; // 👈 fade hook inga connect pannalaam

const tools = [
  "Google Keyword Planner",
  "Google Search Console",
  "Google Analytics",
  "Google Campaigns",
  "Meta Ads Manager",
  "Meta Business Suite",
  "Canva",
  "Google Tag Manager",
  "Ubersuggest",
  "Screaming Frog",
  "GravityWrite",
  "Yoast SEO",
  "WordPress",
  "Mailchimp",
];

const ToolsKnown = () => {
  //const fadeRef = useFadeUp(); //👈 nee hook kudutha udane enable pannuren

  return (
    <section className="tools-known">
      <div className="tools-wrapper">
        <p className="tools-title">TOOLS KNOWN</p>

        <div className="tools-marquee">
          <div className="tools-track">
            {[...tools, ...tools].map((tool, index) => (
              <span key={index} className="tool-item">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsKnown;
