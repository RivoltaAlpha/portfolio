import { About } from "../components/About";
// import { Certifications } from "../components/Certifications";
import { CommunityEngagement } from "../components/CommunityEngagement";
import ContactSection from "../components/Contact";
import { Education } from "../components/Education";
import { Experience } from "../components/Experience";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import ProjectList from "../components/Projects";

const Portfolio: React.FC = () => {
    return (
      <div className="min-h-screen flex flex-col bg-gray-900 text-white  ">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Education />
          <Experience />
          <ProjectList />
          {/* <Certifications /> */}
          <CommunityEngagement />
          <ContactSection />
        </main>
        <Footer />
      </div>
    );
  };
  
  export default Portfolio;