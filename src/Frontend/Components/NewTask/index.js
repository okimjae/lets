import React from 'react';
import { Fab, TextField } from '@material-ui/core';
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
          <TextField
            size='small'
            required
            id="outlined-helperText"
            label="Título"
            defaultValue=""
            variant="outlined"
            style={{ backgroundColor: 'white', borderRadius: '2px' }}
          />
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