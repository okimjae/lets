import React, { useState } from 'react';
import { Fab, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { Container, CardTitle, Content, InputContainer, Input } from './styles';

function NewTask() {

  const [title, setTitle] = useState(null)
  const [content, setContent] = useState(null)

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
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined"
            style={{ backgroundColor: 'white', borderRadius: '2px' }}
          />
          <Input rowsMin={3} placeholder="Conteúdo" onChange={(e) => setContent(e.target.value)} />
        </InputContainer>
        <Fab color="primary" aria-label="add" size="small" style={{ margin: '10px' }}>
          <AddIcon onClick={() => console.log({ title, content })} />
        </Fab>
      </Content>
    </Container>
  );
}

export default NewTask;