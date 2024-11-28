import React, { useState } from 'react';
import { Card, Icon, Button, Modal } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../components/molekul/Sidebar';

export default function ChooseTryOut() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);  // State to manage modal visibility

  const handleStartExam = () => {
    setOpen(false);  // Close the confirmation modal
    navigate('/ujian');  // Navigate to the exam page
  };

  return (
    <DashboardLayout>
      <div className="p-10">
        <section className="bg-white p-6 rounded-lg shadow-lg text-blue-900">
          <h2 className="text-2xl font-semibold mb-4">Pilih Tipe Ujian</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Kecerdasan */}
            <Card 
              fluid 
              color="blue"
              className="transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-blue-200 text-blue-900"
            >
              <Card.Content>
                <Icon name="brain" size="large" color="blue" />
                <Card.Header>Try-Out Kecerdasan</Card.Header>
                <Card.Description>
                  Latihan soal untuk mengukur tingkat kecerdasan dan kemampuan analitis.
                </Card.Description>
              </Card.Content>
              <Button 
                color="blue" 
                attached="bottom"
                onClick={() => setOpen(true)}  // Show the confirmation modal
              >
                Mulai Ujian
              </Button>
            </Card>

            {/* Keceramatan */}
            <Card 
              fluid 
              color="blue"
              className="transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-blue-200 text-blue-900"
            >
              <Card.Content>
                <Icon name="lightning" size="large" color="blue" />
                <Card.Header>Try-Out Keceramatan</Card.Header>
                <Card.Description>
                  Latihan soal untuk mengukur kecepatan dalam memahami dan menyelesaikan masalah.
                </Card.Description>
              </Card.Content>
              <Button 
                color="blue" 
                attached="bottom"
                onClick={() => setOpen(true)}  // Show the confirmation modal
              >
                Mulai Ujian
              </Button>
            </Card>

            {/* Kepribadian */}
            <Card 
              fluid 
              color="blue"
              className="transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-blue-200 text-blue-900"
            >
              <Card.Content>
                <Icon name="user" size="large" color="blue" />
                <Card.Header>Try-Out Kepribadian</Card.Header>
                <Card.Description>
                  Tes untuk mengetahui tipe kepribadian dan bagaimana cara menghadapinya.
                </Card.Description>
              </Card.Content>
              <Button 
                color="blue" 
                attached="bottom"
                onClick={() => setOpen(true)}  // Show the confirmation modal
              >
                Mulai Ujian
              </Button>
            </Card>

          </div>
        </section>

        {/* Confirmation Modal */}
        <Modal 
          open={open} 
          onClose={() => setOpen(false)}  // Close the modal if clicked outside or on the close button
        >
          <Modal.Header>Konfirmasi</Modal.Header>
          <Modal.Content>
            <p>Anda yakin untuk memulai ujian ini?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button color="red" onClick={() => setOpen(false)}>Tidak</Button>
            <Button color="blue" onClick={handleStartExam}>Ya</Button>
          </Modal.Actions>
        </Modal>
      </div>
    </DashboardLayout>
  );
}
