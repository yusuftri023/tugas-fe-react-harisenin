import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PagenotfoundContent from "./PagenotfoundContent";

export default function Pagenotfound() {
  return (
    <>
      <Header></Header>
      <PagenotfoundContent />
      <Footer position={"absolute"}></Footer>
    </>
  );
}
