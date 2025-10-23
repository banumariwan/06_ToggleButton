import React from "react";

function StudentList() {
  const students = [
    { id: 1, name: "Banu", point: 98, rating: 9.8 },
    { id: 2, name: "Ahmad", point: 56, rating: 5 },
    { id: 3, name: "Ali", point: 78, rating: 8 },
    { id: 4, name: "Nazdar", point: 100, rating: 10 },
  ];

  const styles = {
    container: {
      background: "linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)",
      minHeight: "100vh",
      padding: "2rem",
      fontFamily: "Segoe UI, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    title: {
      color: "#333",
      marginBottom: "2rem",
      fontSize: "2rem",
      fontWeight: "bold",
    },
    card: {
      background: "white",
      padding: "1rem 2rem",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      marginBottom: "1.5rem",
      width: "300px",
      transition: "transform 0.3s, box-shadow 0.3s",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
    },
    name: {
      color: "#4A47A3",
      margin: "0",
      fontSize: "1.4rem",
    },
    info: {
      color: "#555",
      margin: "0.3rem 0",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🎓 Students List</h2>
      {students.map((student) => (
        <div
          key={student.id}
          style={styles.card}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = styles.cardHover.transform;
            e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = styles.card.boxShadow;
          }}
        >
          <h3 style={styles.name}>{student.name}</h3>
          <p style={styles.info}>📊 Points: {student.point}</p>
          <p style={styles.info}>⭐ Rating: {student.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
