import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon, Button, Menu, Sidebar, Segment } from "semantic-ui-react";

export function DashboardLayout({ children }) {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sidebar
        as={Menu}
        animation="push"
        visible
        vertical
        inverted
        style={{
          width: collapsed ? "60px" : "250px",
          transition: "width 0.3s ease",
          backgroundColor: "#0a284b", // Biru dongker
        }}
      >
        <Menu.Item as="a">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "white", // Warna teks
            }}
          >
            {!collapsed && (
              <span style={{ fontWeight: "bold", color: "white" }}>Try Out</span>
            )}
            <Button
              icon
              basic
              inverted
              size="small"
              onClick={toggleSidebar}
              style={{ marginLeft: "auto" }}
            >
              <Icon name={collapsed ? "angle double right" : "angle double left"} />
            </Button>
          </div>
        </Menu.Item>
        <Menu.Item onClick={() => navigate('/')} as="a" style={{ color: "white" }}>
          <Icon name="dashboard" />
          {!collapsed && <span>Dashboard</span>}
        </Menu.Item>
        <Menu.Item onClick={() => navigate('/Try-out')} as="a" style={{ color: "white" }}>
          <Icon name="graduation cap" />
          {!collapsed && <span>Tryout</span>}
        </Menu.Item>
        <Menu.Item onClick={() => navigate('/Histori-Tryout')} as="a" style={{ color: "white" }}>
          <Icon name="history" />
          {!collapsed && <span>Riwayat Tryout</span>}
        </Menu.Item>
        <Menu.Item as="a" style={{ color: "white" }}>
          <Icon name="file alternate" />
          {!collapsed && <span>Skor Ujian</span>}
        </Menu.Item>
      </Sidebar>

      {/* Main Content */}
      <Segment
  basic
  style={{
    marginLeft: collapsed ? "60px" : "250px",
    transition: "margin-left 0.3s ease",
    flex: 1,
    backgroundColor: "white", // Latar belakang konten utama
    color: "#0a284b", // Teks utama
    padding: 0, // Menghapus padding atas
    marginTop : 0
  }}
>
  <div>{children}</div>
</Segment>

    </div>
  );
}
