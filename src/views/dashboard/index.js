import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../../components/iconify';
// sections
import {
   AppWidgetSummary,

} from '../../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard | ResQMe </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Complaints" total={714000} icon={'clarity:list-solid'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="News" total={1352831} color="info" icon={'arcticons:top-news'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="My Emergency Checklist" total={1723315} color="warning" icon={'material-symbols:checklist'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
         <AppWidgetSummary title="Weather Monitoring" total={234} color="error" icon={'material-symbols:weather-mix'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Seismic Movement" total={714000} icon={'ri:earthquake-fill'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Fire Monitoring " total={1352831} color="info" icon={'bi:fire'} />
          </Grid>



        
        </Grid>
      </Container>
    </>
  );
}
