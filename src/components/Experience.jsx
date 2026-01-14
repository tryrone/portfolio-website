import React from "react";
import { motion } from "framer-motion";
import { SectionnWrapper } from "../hoc";
import { experiences } from "../constants";

// Helper function to format date
const formatDate = (dateString) => {
  const months = {
    // Abbreviated months
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December",
    // Full month names (for months that don't have abbreviations or are already full)
    January: "January",
    February: "February",
    March: "March",
    April: "April",
    June: "June",
    July: "July",
    August: "August",
    September: "September",
    October: "October",
    November: "November",
    December: "December",
  };

  // Handle "March 2024 - Present" format
  if (dateString.includes("Present")) {
    const parts = dateString.split(" - ");
    const start = parts[0].trim();
    const startParts = start.split(" ");
    const startMonth = startParts[0];
    const startYear = startParts[1];
    const formattedStart = months[startMonth]
      ? `${months[startMonth]} ${startYear}`
      : start;
    return `${formattedStart} — Present`;
  }

  const parts = dateString.split(" - ");
  if (parts.length === 2) {
    const start = parts[0].trim();
    const end = parts[1].trim();

    const startParts = start.split(" ");
    const endParts = end.split(" ");

    const startMonth = startParts[0];
    const startYear = startParts[1] || startParts[0];
    const endMonth = endParts[0];
    const endYear = endParts[1] || endParts[0];

    const formattedStart = months[startMonth]
      ? `${months[startMonth]} ${startYear}`
      : start;
    const formattedEnd = months[endMonth]
      ? `${months[endMonth]} ${endYear}`
      : end;

    return `${formattedStart} — ${formattedEnd}`;
  }
  return dateString;
};

// Helper function to extract technologies from points
const extractTechnologies = (points) => {
  const techKeywords = {
    "React Native": ["react native", "react-native"],
    "Node.js": ["node.js", "nodejs", "node"],
    TypeScript: ["typescript", "ts"],
    JavaScript: ["javascript", "js"],
    React: ["react"],
    "Express.js": ["express.js", "express"],
    GraphQL: ["graphql"],
    "Apollo GraphQL": ["apollo"],
    Git: ["git"],
    HTML5: ["html5", "html"],
    "Socket.io": ["socket.io", "socketio"],
  };

  const foundTechs = [];
  const pointsText = points.join(" ").toLowerCase();

  for (const [tech, keywords] of Object.entries(techKeywords)) {
    if (keywords.some((keyword) => pointsText.includes(keyword))) {
      foundTechs.push(tech);
    }
  }

  return foundTechs.slice(0, 3); // Return max 3 technologies
};

// Helper function to extract location from points
const extractLocation = (points) => {
  const locationPatterns = [
    /Location:\s*([^,]+(?:,\s*[^,]+)?)/i,
    /([A-Z][a-z]+,\s*[A-Z][a-z]+)/,
  ];

  for (const pattern of locationPatterns) {
    const match = points.join(" ").match(pattern);
    if (match) {
      return match[1] || match[0];
    }
  }
  return null;
};

// Helper function to extract skills from points
const extractSkills = (points) => {
  const skillsPattern = /Skills:\s*([^.]+)/i;
  const text = points.join(" ");
  const match = text.match(skillsPattern);
  if (match) {
    // Split by · or comma and clean up
    return match[1]
      .split(/[·,]/)
      .map((skill) => skill.trim())
      .filter((skill) => skill.length > 0);
  }
  return [];
};

// Helper function to extract core responsibilities from points
const extractCoreResponsibilities = (points) => {
  const corePattern = /Core:\s*([^.]+)/i;
  const text = points.join(" ");
  const match = text.match(corePattern);
  if (match) {
    return match[1].trim();
  }

  // Also check for lines that are core responsibilities (not achievements)
  // These typically start with "Led" (team leadership) or "Contributed" (process contributions)
  // and are about team/process, not specific feature builds
  const coreResponsibilities = points.filter((point) => {
    const lower = point.toLowerCase();
    const isLedTeam =
      lower.startsWith("led") &&
      (lower.includes("team") || lower.includes("mobile team"));
    const isContributedProcess =
      lower.startsWith("contributed") &&
      (lower.includes("tdd") || lower.includes("testing"));

    return isLedTeam || isContributedProcess;
  });

  return coreResponsibilities.length > 0 ? coreResponsibilities : null;
};

// Helper function to clean and format points (remove location, skills, and core responsibilities)
const cleanPoints = (points) => {
  const coreResponsibilities = extractCoreResponsibilities(points);
  const coreTexts = coreResponsibilities
    ? Array.isArray(coreResponsibilities)
      ? coreResponsibilities
      : [coreResponsibilities]
    : [];

  return points
    .filter((point) => {
      const lower = point.toLowerCase();
      // Exclude location, skills, core labels
      if (
        lower.startsWith("location:") ||
        lower.startsWith("skills:") ||
        lower.startsWith("core:")
      ) {
        return false;
      }
      // Exclude core responsibilities that were extracted
      if (coreTexts.some((core) => point === core)) {
        return false;
      }
      return true;
    })
    .slice(0, 3); // Show max 3 points
};

const TimelineDot = () => (
  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
    <div className="w-8 h-8 rounded-full bg-background-dark border border-primary flex items-center justify-center dot-glow">
      <div className="w-2 h-2 rounded-full bg-primary"></div>
    </div>
  </div>
);

const ExperienceCard = ({ experience, index, isLeft }) => {
  const formattedDate = formatDate(experience.date);
  const technologies = extractTechnologies(experience.points);
  const location = extractLocation(experience.points);
  const skills = extractSkills(experience.points);
  const coreResponsibilities = extractCoreResponsibilities(experience.points);
  const cleanedPoints = cleanPoints(experience.points);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col md:flex-row items-center"
    >
      {/* Date on desktop - left side for right cards, right side for left cards */}
      {!isLeft && (
        <div className="flex-1 w-full mb-8 md:mb-0 md:pr-16 text-right hidden md:block">
          <span className="text-slate-500 font-display font-bold text-lg">
            {formattedDate}
          </span>
        </div>
      )}

      {/* Timeline Dot */}
      <TimelineDot />

      {/* Card Content */}
      <div
        className={`flex-1 w-full ${
          isLeft
            ? "md:pr-16 order-2 md:order-1 pl-12 md:pl-0"
            : "md:pl-16 pl-12"
        }`}
      >
        <div className="glass-card p-8 rounded-2xl">
          {/* Date on mobile */}
          <span className="md:hidden block text-primary font-display font-bold text-sm mb-2 uppercase">
            {formattedDate}
          </span>

          <h3 className="text-2xl font-display font-bold text-white mb-1">
            {experience.title}
          </h3>
          <p className="text-primary font-medium mb-6">
            {experience.company_name}
          </p>

          {/* Location */}
          {location && (
            <div className="mb-6">
              <div className="flex items-center text-slate-400">
                <span className="material-symbols-outlined text-primary text-sm mr-3">
                  location_on
                </span>
                <span>{location}</span>
              </div>
            </div>
          )}

          {/* Skills List */}
          {skills.length > 0 && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 items-center text-slate-400 text-sm">
                {skills.map((skill, idx) => (
                  <span key={idx} className="flex items-center">
                    {skill}
                    {idx < skills.length - 1 && (
                      <span className="mx-2 text-slate-500">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Core Responsibilities */}
          {coreResponsibilities && (
            <div className="mb-6">
              <div className="flex items-start text-slate-400 mb-3">
                <span className="material-symbols-outlined text-primary text-sm mr-3 mt-1">
                  folder
                </span>
                <div className="flex-1">
                  <span className="text-white mr-2 font-medium">Core:</span>
                  <ul className="mt-2 space-y-2">
                    {Array.isArray(coreResponsibilities) ? (
                      coreResponsibilities.map((resp, idx) => (
                        <li key={idx} className="text-slate-400">
                          {resp}
                        </li>
                      ))
                    ) : (
                      <li className="text-slate-400">{coreResponsibilities}</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Points */}
          {cleanedPoints.length > 0 && (
            <ul className="space-y-4 text-slate-400">
              {cleanedPoints.map((point, idx) => {
                // Helper to render highlighted text
                const renderHighlightedText = (text) => {
                  const highlightWhite = [
                    "scalable backend solutions",
                    "scalable solutions",
                    "Agile teams",
                    "Agile",
                    "RESTful APIs",
                    "RESTful",
                    "mobile ecosystem",
                    "seamless mobile ecosystem",
                    "Microsoft Code Push",
                    "React Native design system",
                    "instant messaging features",
                    "instant messaging",
                    "functional components",
                    "daily transactions",
                  ];

                  let result = [];
                  let lastIndex = 0;
                  let textLower = text.toLowerCase();

                  // Find all white highlights
                  const whiteMatches = [];
                  highlightWhite.forEach((phrase) => {
                    const regex = new RegExp(
                      phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                      "gi"
                    );
                    let match;
                    while ((match = regex.exec(text)) !== null) {
                      whiteMatches.push({
                        start: match.index,
                        end: match.index + match[0].length,
                        text: match[0],
                        type: "white",
                      });
                    }
                  });

                  // Find all yellow highlights (numbers, percentages, dollar amounts)
                  const yellowMatches = [];
                  const yellowPattern = /(\d+%|\d+\+|\$[\d.]+[kmb]?)/gi;
                  let match;
                  while ((match = yellowPattern.exec(text)) !== null) {
                    yellowMatches.push({
                      start: match.index,
                      end: match.index + match[0].length,
                      text: match[0],
                      type: "yellow",
                    });
                  }

                  // Combine and sort all matches
                  const allMatches = [...whiteMatches, ...yellowMatches].sort(
                    (a, b) => a.start - b.start
                  );

                  // Remove overlapping matches (keep first)
                  const filteredMatches = [];
                  allMatches.forEach((match) => {
                    if (
                      !filteredMatches.some(
                        (m) => m.start <= match.start && m.end >= match.end
                      )
                    ) {
                      filteredMatches.push(match);
                    }
                  });

                  // Build result array
                  filteredMatches.forEach((match, i) => {
                    // Add text before match
                    if (match.start > lastIndex) {
                      result.push(
                        <span key={`text-${i}`}>
                          {text.substring(lastIndex, match.start)}
                        </span>
                      );
                    }
                    // Add highlighted match
                    if (match.type === "white") {
                      result.push(
                        <span
                          key={`white-${i}`}
                          className="text-white font-medium"
                        >
                          {match.text}
                        </span>
                      );
                    } else {
                      result.push(
                        <span
                          key={`yellow-${i}`}
                          className="text-primary font-medium"
                        >
                          {match.text}
                        </span>
                      );
                    }
                    lastIndex = match.end;
                  });

                  // Add remaining text
                  if (lastIndex < text.length) {
                    result.push(
                      <span key="text-end">{text.substring(lastIndex)}</span>
                    );
                  }

                  return result.length > 0 ? result : text;
                };

                return (
                  <li key={idx} className="flex items-start">
                    <span className="material-symbols-outlined text-primary text-sm mr-3 mt-1">
                      check_circle
                    </span>
                    <span>{renderHighlightedText(point)}</span>
                  </li>
                );
              })}
            </ul>
          )}

          {/* Technologies */}
          {technologies.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full border border-white/10 bg-white/5 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Date on desktop - right side for left cards */}
      {isLeft && (
        <div className="flex-1 w-full mb-8 md:mb-0 md:pl-16 text-left hidden md:block order-3">
          <span className="text-slate-500 font-display font-bold text-lg">
            {formattedDate}
          </span>
        </div>
      )}
    </motion.div>
  );
};

// Helper function to parse date for sorting
const parseDateForSorting = (dateString) => {
  const months = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  };

  // Handle "Present" - treat as very high date (most recent)
  if (dateString.includes("Present")) {
    return { year: 9999, month: 12 };
  }

  const parts = dateString.split(" - ");
  if (parts.length >= 1) {
    const start = parts[0].trim();
    const startParts = start.split(" ");
    const startMonth = startParts[0];
    const startYear = parseInt(startParts[1]) || 0;
    const monthNum = months[startMonth] || 0;
    return { year: startYear, month: monthNum };
  }
  return { year: 0, month: 0 };
};

const Experience = () => {
  // Sort all experiences by date (most recent first)
  const displayedExperiences = [...experiences].sort((a, b) => {
    const dateA = parseDateForSorting(a.date);
    const dateB = parseDateForSorting(b.date);

    // Compare by year first
    if (dateB.year !== dateA.year) {
      return dateB.year - dateA.year;
    }
    // If same year, compare by month
    return dateB.month - dateA.month;
  });

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden relative z-10">
      {/* Header */}
      <div className="mb-20 text-center md:text-left">
        <h2 className="text-primary font-display font-medium tracking-widest text-sm uppercase mb-4">
          Professional Journey
        </h2>
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white">
          Experience.
        </h1>
        <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
          A chronological look at my career growth, building scalable
          applications and leading engineering teams across various industries.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-[1px] timeline-line"></div>

        {/* Timeline Items */}
        <div className="space-y-24">
          {displayedExperiences.map((experience, index) => {
            // Alternate between left and right (even index = right, odd = left)
            const isLeft = index % 2 === 1;
            return (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
                isLeft={isLeft}
              />
            );
          })}
        </div>
      </div>

      {/* What's Next Section */}
      <div className="mt-40 text-center">
        <h4 className="text-primary font-display font-medium text-lg mb-4 tracking-[0.2em] uppercase">
          04. What's Next?
        </h4>
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white">
          Get In Touch
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-12 text-lg">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a
          href="#contact"
          className="inline-flex items-center px-10 py-4 bg-primary hover:bg-yellow-500 text-black font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(226,241,59,0.3)]"
        >
          Say Hello
          <span className="material-symbols-outlined ml-2 font-bold">mail</span>
        </a>
      </div>

      {/* Footer with tech icons */}
      <div className="mt-24 py-12 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-30 grayscale hover:opacity-60 transition-all duration-500">
            <span className="material-symbols-outlined text-3xl">api</span>
            <span className="material-symbols-outlined text-3xl">
              data_object
            </span>
            <span className="material-symbols-outlined text-3xl">cloud</span>
            <span className="material-symbols-outlined text-3xl">
              javascript
            </span>
            <span className="material-symbols-outlined text-3xl">css</span>
            <span className="material-symbols-outlined text-3xl">database</span>
            <span className="material-symbols-outlined text-3xl">terminal</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionnWrapper(Experience, "work");
