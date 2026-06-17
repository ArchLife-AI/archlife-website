import { AtmosphericCanvas } from "@/components/AtmosphericCanvas/AtmosphericCanvas";
import { Footer } from "@/components/Footer/Footer";
import { GlobalStyles } from "@/components/GlobalStyles/GlobalStyles";
import { Nav } from "@/components/Navigation/Navigation";

export function PageShell({ children }) {
  return (
    <div
      style={{
        background: "#0D0F12",
        minHeight: "100vh",
        color: "#F3EFE7",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <AtmosphericCanvas />
      <Nav />
      <GlobalStyles />
      {children}
      <Footer />
    </div>
  );
}
