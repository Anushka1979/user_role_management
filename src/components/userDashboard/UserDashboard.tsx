import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const UserDashboard: React.FC = () => {
  const lineChartData = [
    { name: 'Jan', Purchases: 30 },
    { name: 'Feb', Purchases: 20 },
    { name: 'Mar', Purchases: 27 },
    { name: 'Apr', Purchases: 18 },
    { name: 'May', Purchases: 23 },
    { name: 'Jun', Purchases: 34 },
    { name: 'Jul', Purchases: 24 },
  ];

  const pieChartData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>User Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">43</Typography>
              <Typography>New Tickets</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">17</Typography>
              <Typography>Closed Today</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">7</Typography>
              <Typography>New Replies</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">27.3k</Typography>
              <Typography>Followers</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box mt={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h6">Development Activity</Typography>
                <LineChart width={600} height={300} data={lineChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Purchases" stroke="#8884d8" />
                </LineChart>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Chart Title</Typography>
                <PieChart width={300} height={300}>
                  <Pie
                    data={pieChartData}
                    cx={150}
                    cy={150}
                    labelLine={false}
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default UserDashboard;
