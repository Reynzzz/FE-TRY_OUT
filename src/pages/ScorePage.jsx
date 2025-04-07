import React from "react";
import { Table, Header, Segment, Icon, Label } from "semantic-ui-react";
import { DashboardLayout } from "../components/molekul/Sidebar";

export function ScorePage() {
  // Contoh data skor siswa
  const scores = [
    { id: 1, name: "John Doe", score: 95 },
    { id: 2, name: "Jane Smith", score: 90 },
    { id: 3, name: "Alice Johnson", score: 85 },
    { id: 4, name: "Michael Brown", score: 80 },
    { id: 5, name: "Emily Davis", score: 75 },
  ];

  // Mengurutkan skor untuk menampilkan 3 teratas
  const topScores = [...scores].sort((a, b) => b.score - a.score).slice(0, 3);

  return (
    <DashboardLayout>
    <div style={{ padding: "20px" }}>
      {/* Peringkat 3 Teratas */}
      <Segment basic>
        <Header as="h2" textAlign="center" style={{ color: "#0a284b" }}>
          <Icon name="trophy" color="yellow" /> Peringkat 3 Teratas
        </Header>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          {topScores.map((student, index) => (
            <Segment
              key={student.id}
              style={{ textAlign: "center", width: "150px" }}
              color={index === 0 ? "yellow" : index === 1 ? "grey" : "brown"}
            >
              <Label ribbon color={index === 0 ? "yellow" : index === 1 ? "grey" : "brown"}>
                #{index + 1}
              </Label>
              <Header as="h3">{student.name}</Header>
              <p>Skor: {student.score}</p>
            </Segment>
          ))}
        </div>
      </Segment>

      {/* Tabel Semua Skor */}
      <Segment basic>
        <Header as="h2" textAlign="center" style={{ color: "#0a284b" }}>
          Semua Skor Siswa
        </Header>
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>No</Table.HeaderCell>
              <Table.HeaderCell>Nama</Table.HeaderCell>
              <Table.HeaderCell>Skor</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {scores.map((student, index) => (
              <Table.Row key={student.id}>
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{student.name}</Table.Cell>
                <Table.Cell>{student.score}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Segment>
    </div>
    </DashboardLayout>
  );
}

export default ScorePage;
