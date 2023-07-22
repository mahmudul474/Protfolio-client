import React from "react";
import Hero from "../../Components/Hero/Hero";
import PersonalSkill from "../../Components/PersonlanSkill/PersonalSkill";
import About from "../../Components/About/About";
import ExpreinchSkills from "../../Components/ExpreinchSkills/ExpreinchSkills";
import Contact from "../../Components/Contact/Contact";
import Experience from "../../Components/Experience/Experience";
import Projexts from "../../Components/Projects/Projexts";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <PersonalSkill></PersonalSkill>
      <About></About>
      <Experience></Experience>
      <ExpreinchSkills></ExpreinchSkills>
      <Projexts></Projexts>
      <Contact></Contact>
    </div>
  );
}
