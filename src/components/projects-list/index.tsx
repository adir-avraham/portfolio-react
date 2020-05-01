import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Project from '../project';



export default function ProjectsList(props: any) {

  const { projects } = props;

  return (
    
    <Container maxWidth="md">
      <Grid container  
      spacing={4}>
        {projects.map((project: any) => <Project key={project.link} {...project}/>)}
      </Grid>
    </Container>
  )

};