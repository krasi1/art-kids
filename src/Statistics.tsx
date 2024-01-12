const Statistics = () => {
  return (
    //@ts-expect-error stop
    <div id="statDiv">
      <img className="graph" src="/src/assets/Graph1.png" alt="Graph 1" />
      <img
        className="graph"
        //@ts-expect-error stop
        id="graph2"
        src="/src/assets/Graph2.png"
        alt="Graph 2"
      />
    </div>
  );
};

export default Statistics;
