import React from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';  // Importing useNavigate from React Router
import { DashboardLayout } from '../components/molekul/Sidebar';

export default function ChooseTryOut() {
  const navigate = useNavigate();  // Initialize useNavigate to handle navigation

  const navigateToSubcategory = (category) => {
    navigate(`/subcategory/${category}`);  // Navigate to the subcategory page
  };

  return (
    <DashboardLayout>
      <div className="p-10">
        <section className="bg-white p-6 rounded-lg shadow-lg text-blue-900">
          <h2 className="text-2xl font-semibold mb-4">Pilih Tipe Ujian</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card 
              fluid 
              color="blue"
              className="transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-blue-200 text-blue-900"
              onClick={() => navigateToSubcategory('tni')}
            >
              <Card.Content>
                <Icon name="shield" size="large" color="blue" />
                <Card.Header>Try-Out TNI</Card.Header>
                <Card.Description>
                  Latihan soal dan simulasi ujian TNI dengan soal-soal terbaru.
                </Card.Description>
              </Card.Content>
              <Button color="blue" attached="bottom">
                Mulai Ujian
              </Button>
            </Card>

            <Card 
              fluid 
              color="blue"
              className="transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-blue-200 text-blue-900"
              onClick={() => navigateToSubcategory('polisi')}
            >
              <Card.Content>
                <Icon name="user secret" size="large" color="blue" />
                <Card.Header>Try-Out Polisi</Card.Header>
                <Card.Description>
                  Persiapkan dirimu untuk tes kepolisian dengan soal terstruktur.
                </Card.Description>
              </Card.Content>
              <Button color="blue" attached="bottom">
                Mulai Ujian
              </Button>
            </Card>

            {/* Add additional categories as necessary */}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
