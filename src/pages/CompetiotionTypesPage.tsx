import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Main from '../components/main/Main';
import post1 from '../blogs/competition-types.md';
import { useEffect, useState } from 'react';


export default function CompetitionTypesPage() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(post1)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div>
      <Container sx={{ width: '45vw'}}>
        <main>
          <Grid container spacing={5} sx={{ mt: 3, backgroundColor: '#ffffff' }}>
            <Main title="Виды соревнований" posts={[markdown]}/>
          </Grid>
        </main>
      </Container>
    </div>

  );
}
