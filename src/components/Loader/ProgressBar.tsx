import { motion } from "motion/react";

export default function ProgressBar() {
  return (
    <div style={styles.container}>
      <div style={styles.outerTube}>
        <motion.div
          style={styles.innerFill}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 5.5,
            repeat: 1,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    // height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0a0a0a",
  },

  outerTube: {
    width: "400px",
    height: "10px", // 🔥 thick cylindrical feel
    borderRadius: "50px",
    padding: "1px",
    background: "rgba(255,255,255,0.1)",
    boxShadow: "0 0 5px rgba(255,255,255,0.3)", // glow border
    overflow: "hidden",
  },

  innerFill: {
    height: "100%",
    borderRadius: "50px",
    background: "white",
    boxShadow: `
      inset 0 0 10px rgba(255,255,255,0.8),
      0 0 15px rgba(255,255,255,0.6)
    `,
  },
};