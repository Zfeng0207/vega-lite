// === Embed helper ===
function embed(where, specPath, opts = {}) {
  // Default Vega-Embed options: allow export but hide "Open in Vega Editor"
  return vegaEmbed(where, specPath, Object.assign({
    actions: { export: true, source: false, editor: false }
  }, opts)).catch(console.error);
}

embed('#viz-choropleth', './unemployment_rate_map.vg.json');   // Choropleth map
embed('#viz-line',        './2000_to_2022_pr.vg.json');        // National trend line
embed('#viz-bubble',      './pr_p_dgp.vg.json');               // Bubble chart (Participation vs Population & GDP)
embed('#viz-bars-pr',     './pr_by_sex.vg.json');              // Regional gender gaps
embed('#viz-bars-gdp',    './gdp_by_state.vg.json');           // GDP by state
embed('#viz-radial',      './economic_activity.vg.json');      // Donut/Radial chart (GDP composition)
