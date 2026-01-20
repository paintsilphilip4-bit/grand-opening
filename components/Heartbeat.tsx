import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Heartbeat: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = 200;
    const height = 100;

    // Clear previous
    svg.selectAll("*").remove();

    // Define the ECG path
    const pathData = `M 0 ${height/2} L 30 ${height/2} L 40 ${height/2 - 30} L 50 ${height/2 + 30} L 60 ${height/2 - 10} L 70 ${height/2 + 10} L 80 ${height/2} L 200 ${height/2}`;

    const path = svg.append("path")
      .attr("d", pathData)
      .attr("fill", "none")
      .attr("stroke", "#334155") // Slate-700
      .attr("stroke-width", 3)
      .attr("stroke-linecap", "round")
      .attr("stroke-linejoin", "round");

    const length = path.node()?.getTotalLength() || 200;

    // Animate
    const repeat = () => {
      path
        .attr("stroke-dasharray", length + " " + length)
        .attr("stroke-dashoffset", length)
        .transition()
        .duration(2000)
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 0)
        .on("end", repeat);
    };

    repeat();

  }, []);

  return (
    <svg ref={svgRef} width="200" height="100" viewBox="0 0 200 100" className="opacity-50" />
  );
};

export default Heartbeat;