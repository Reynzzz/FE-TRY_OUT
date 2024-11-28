import React from "react";
import { Button, Card, Icon, Table } from "semantic-ui-react";
import { DashboardLayout } from "../components/molekul/Sidebar";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Header Section - Removed padding and added margin 0 */}
      <header
        style={{
          padding: "0 20px",
          backgroundColor: "#1a73e8", 
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "64px", // Added fixed height for consistency
        }}
      >
        <h1 style={{ margin: 0, fontSize: "1.75rem" }}>Dashboard</h1>
        <Button
          primary
          style={{
            backgroundColor: "#fff",
            color: "#1a73e8",
          }}
        >
          <Icon name="sign-out" />
          Logout
        </Button>
      </header>

      {/* Rest of the component remains unchanged */}
      <div style={{ padding: "20px" }}>
        <Card fluid>
          <Card.Content>
            <Card.Header style={{ fontSize: "1.5rem", color: "#1a73e8" }}>
              Selamat Datang, Budi Setiawan!
            </Card.Header>
            <Card.Description style={{ color: "#6b7280", marginTop: "10px" }}>
              Silakan pilih tipe ujian yang ingin kamu coba atau perbarui informasi profilmu.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div
                style={{
                  height: "96px",
                  width: "96px",
                  borderRadius: "50%",
                  backgroundColor: "#e5e7eb",
                }}
              />
              <div>
                <h2 style={{ fontSize: "1.25rem", color: "#1a73e8" }}>Budi Setiawan</h2>
                <p style={{ color: "#6b7280" }}>budi@example.com</p>
                <Button primary style={{ marginTop: "10px" }}>
                  <Icon name="edit" />
                  Edit Profil
                </Button>
              </div>
            </div>
          </Card.Content>
        </Card>

        <Card fluid style={{ marginTop: "20px" }}>
          <Card.Content>
            <Card.Header style={{ fontSize: "1.25rem", color: "#1a73e8" }}>Hasil Ujian</Card.Header>
          </Card.Content>
          <Card.Content>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Tipe Ujian</Table.HeaderCell>
                  <Table.HeaderCell>Nilai</Table.HeaderCell>
                  <Table.HeaderCell>Tanggal</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Try-Out TNI</Table.Cell>
                  <Table.Cell>85</Table.Cell>
                  <Table.Cell>2024-10-30</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Try-Out Polisi</Table.Cell>
                  <Table.Cell>78</Table.Cell>
                  <Table.Cell>2024-09-15</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Try-Out Kedinasan</Table.Cell>
                  <Table.Cell>90</Table.Cell>
                  <Table.Cell>2024-08-22</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Card.Content>
        </Card>
      </div>
    </DashboardLayout>
  );
}

