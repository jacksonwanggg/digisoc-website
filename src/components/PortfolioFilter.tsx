import { useState } from "react";
import TeamCard from "./TeamCard";
import ScrollReveal from "./ScrollReveal";
import {
  directorTeams,
  portfolioStructure,
  type Portfolio,
  type VPSection,
} from "../data/team";

type FilterType = "All" | VPSection | Portfolio;

export default function PortfolioFilter() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("All");

  const filteredMembers =
    selectedFilter === "All"
      ? directorTeams
      : directorTeams.filter(
          (member) =>
            member.vpSection === selectedFilter ||
            member.portfolio === selectedFilter
        );

  // Find which VP section the current filter belongs to
  const getActiveVPSection = (): VPSection | null => {
    if (selectedFilter === "All") return null;

    // Check if selectedFilter is a VP section
    const vpSection = portfolioStructure.find((s) => s.vpSection === selectedFilter);
    if (vpSection) return selectedFilter as VPSection;

    // Check if selectedFilter is a portfolio within a VP section
    for (const section of portfolioStructure) {
      if (section.portfolios.includes(selectedFilter as Portfolio)) {
        return section.vpSection;
      }
    }

    return null;
  };

  const activeVPSection = getActiveVPSection();

  return (
    <div className="portfolio-filter-section">
      <h2 className="section-title" style={{ marginBottom: "1rem" }}>
        Director <span className="gradient-text">Portfolios</span>
      </h2>
      <p className="section-subtitle" style={{ marginBottom: "2rem" }}>
        Explore our directors organized by VP sections
      </p>

      {/* VP Section Tabs */}
      <div className="portfolio-tabs">
        <button
          className={`portfolio-tab ${selectedFilter === "All" ? "active" : ""}`}
          onClick={() => setSelectedFilter("All")}
        >
          All Directors
        </button>
        {portfolioStructure.map((section) => (
          <button
            key={section.vpSection}
            className={`portfolio-tab ${
              activeVPSection === section.vpSection ? "active" : ""
            }`}
            onClick={() => setSelectedFilter(section.vpSection)}
          >
            {section.vpSection}
          </button>
        ))}
      </div>

      {/* Sub-portfolio Tabs (show when a VP section or its portfolio is selected) */}
      {activeVPSection && (
        <div className="portfolio-subtabs">
          {portfolioStructure
            .find((s) => s.vpSection === activeVPSection)
            ?.portfolios.map((portfolio) => (
              <button
                key={portfolio}
                className={`portfolio-subtab ${
                  selectedFilter === portfolio ? "active" : ""
                }`}
                onClick={() => setSelectedFilter(portfolio)}
              >
                {portfolio}
              </button>
            ))}
        </div>
      )}

      {/* Filtered Team Members Grid */}
      <div className="grid-4" style={{ marginTop: "2.5rem" }}>
        {filteredMembers.map((member, i) => (
          <ScrollReveal key={member.id} delay={i * 50}>
            <TeamCard member={member} />
          </ScrollReveal>
        ))}
      </div>

      {/* Empty State */}
      {filteredMembers.length === 0 && (
        <div style={{ textAlign: "center", padding: "3rem 0" }}>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
            No directors found in this section.
          </p>
        </div>
      )}
    </div>
  );
}
