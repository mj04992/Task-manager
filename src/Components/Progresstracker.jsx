function Progresstracker({ tasks }) {
  if (tasks.length === 0) {
    return <p>No tasks yet. Start adding some!</p>;
  }

  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <div style={{
      marginTop: "20px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      width: "300px"
    }}>
      <h3>Progress Tracker</h3>
      <p>
        Completed: {completedCount} / {totalCount} tasks
      </p>

      <div style={{
        backgroundColor: "#eee",
        borderRadius: "10px",
        overflow: "hidden",
        height: "15px"
      }}>
        <div
          style={{
            width: `${progressPercent}%`,
            backgroundColor: progressPercent === 100 ? "green" : "#2196f3",
            height: "100%",
            transition: "width 0.4s ease"
          }}
        />
      </div>

      <p style={{ marginTop: "8px", fontWeight: "bold" }}>
        {progressPercent}% completed
      </p>
    </div>
  );
}

export default Progresstracker;
