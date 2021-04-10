import React from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { Container, CardTitle, Content, InputContainer, Input } from './styles';

function NewTask() {
  return (
    <Container>
      <CardTitle>
        Novo
      </CardTitle>
      <Content>
        <InputContainer>
          <Input aria-label="empty textarea" placeholder="Título" />
          <Input rowsMin={3} aria-label="empty textarea" placeholder="Conteúdo" />
        </InputContainer>
        <Fab color="primary" aria-label="add" size="small" style={{ margin: '10px' }}>
          <AddIcon />
        </Fab>
      </Content>
    </Container>
  );
}

export default NewTask;