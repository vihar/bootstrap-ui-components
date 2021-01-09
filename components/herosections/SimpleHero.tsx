import SimpleHeroHTML from "../../lib/hero-section/simple-hero";

function SimpleHero() {
  return (
    <>
      <div dangerouslySetInnerHTML={SimpleHeroHTML()} />
    </>
  );
}

export default SimpleHero;
