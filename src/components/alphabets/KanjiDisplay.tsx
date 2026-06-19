import GlareHover from "../ui/glare-hover";

const KanjiDisplay = () => {
  return (
    <div style={{ height: "200px", position: "relative" }}>
      <GlareHover
        width="auto"
        height="auto"
        glareColor="#ffffff"
        glareOpacity={0.1}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={1000}
        playOnce={false}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "900",
            color: "#333",
            margin: 0,
          }}
        >
          Hover Me
        </h2>
      </GlareHover>
    </div>
  );
};

export default KanjiDisplay;
