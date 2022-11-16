import lineageData from "./Test.json";
const nodes = [lineageData.entity, ...lineageData.nodes];
const edges = [...lineageData.upstreamEdges, ...lineageData.downstreamEdges];
const position = { x: 0, y: 0 };
const edgeType = "smoothstep";

export const initialNodes = nodes.map((n) => ({
  id: n.id,
  type: "default",
  data: { label: n.name },
  position,
}));

export const initialEdges = edges.map((e, i) => ({
  id: i,
  source: e.fromEntity,
  target: e.toEntity,
  type: edgeType,
  animated: true,
}));
