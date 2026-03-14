function sectionsToText(sections) {
  return sections
    .map((section) => {
      let text = `${section.heading}\n${section.body}\n`;

      if (section.code) {
        text += `Code Example:\n${section.code}\n`;
      }

      if (section.roleTypes) {
        text += section.roleTypes
          .map((r) => `${r.type}: ${r.example}`)
          .join("\n");
      }

      if (section.ingredients) {
        text += section.ingredients
          .map((i) => `${i.label}: ${i.desc}`)
          .join("\n");
      }

      return text;
    })
    .join("\n\n");
}

export { sectionsToText };
