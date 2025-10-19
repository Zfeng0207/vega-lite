// === Embed helper ===
function embed(where, specPath, opts = {}) {
    // You can pass default theme/width/tooltip options here if you want
    return vegaEmbed(where, specPath, Object.assign({
      actions: {export: true, source: false, editor: false}
    }, opts)).catch(console.error);
  }
  
  /*
  Point these paths at your actual spec files.
  From your screenshot, you likely have something like:
    - js/choropleth_map.vg.json
    - data/pr_by_sex.vg.json          (national line OR state-sex bars — rename as needed)
    - data/economic_activity_radial.vg.json  (ring/sunburst)
    - data/participation_state_sex_bars.vg.json
    - data/gdp_by_state.vg.json
  Adjust below to match.
  */
  
  embed('#viz-choropleth', './unemployment_rate_map.vg.json'); // choropleth map
  
  embed('#viz-line',      './2000_to_2022_pr.vg.json');      // national trend lines
  // If your file is named differently, e.g. 'pr_by_sex.vg.json', change path accordingly
  
  embed('#viz-radial',    './economic_activity.vg.json');     // ring/sunburst GDP composition
  
  embed('#viz-bars-pr',   'pr_by_sex.vg.json'); // horizontal stacked bars by sex
  
  embed('#viz-bars-gdp',  './gdp_by_state.vg.json');                 // stacked GDP by state
  