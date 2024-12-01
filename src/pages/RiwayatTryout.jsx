import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { DashboardLayout } from '../components/molekul/Sidebar';

const RiwayatTryOut = () => {
  // Mock data for the try-out history
  const tryOutHistory = [
    {
      id: 1,
      examType: 'Try-Out Kecerdasan',
      date: '2024-10-10',
      status: 'Selesai',
    },
    {
      id: 2,
      examType: 'Try-Out Keceramatan',
      date: '2024-11-01',
      status: 'Selesai',
    },
    {
      id: 3,
      examType: 'Try-Out Kepribadian',
      date: '2024-11-15',
      status: 'Sedang Berlangsung',
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-10">
        <section className="bg-white p-6 rounded-lg shadow-lg text-blue-900">
          <h2 className="text-2xl font-semibold mb-4">Riwayat Try-Out</h2>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>No</Table.HeaderCell>
                <Table.HeaderCell>Tipe Ujian</Table.HeaderCell>
                <Table.HeaderCell>Tanggal</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Detail</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {tryOutHistory.map((history, index) => (
                <Table.Row key={history.id}>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{history.examType}</Table.Cell>
                  <Table.Cell>{history.date}</Table.Cell>
                  <Table.Cell>{history.status}</Table.Cell>
                  <Table.Cell>
                    <Link to={`/ujian/detail/${history.id}`}>
                      <Button color="blue" size="small">
                        Lihat Detail
                      </Button>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default RiwayatTryOut;
