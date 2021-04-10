import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Grid, IconButton } from '@material-ui/core';
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp';
import HighlightOffSharpIcon from '@material-ui/icons/HighlightOffSharp';
import CreateSharpIcon from '@material-ui/icons/CreateSharp';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import { Container, Description, EditTitle, Title, Content, Icons, Default, Edit } from './styles';

function Task({ task, index }) {
  const isDragDisabled = task.id === ''

  const [edit, setEdit] = useState(false)

  return (
    <Draggable draggableId={task.id} index={index} isDragDisabled={isDragDisabled}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}

          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          isDragDisabled={isDragDisabled}
          {...provided.dragHandleProps}
        >
          <Grid container spacing={2} style={{ alignItems: 'center' }}>
            {/* <Grid item sm={2}>
              <Handle {...provided.dragHandleProps} />
            </Grid> */}
            <Description item sm={8}>
              {edit &&
                <EditTitle
                  size="small"
                  defaultValue={task.title}
                  edit={edit}
                  inputProps={{ fontWeight: 'bold' }}
                />
              }

              <Title edit={edit}>
                {task.title}
              </Title>
              <Content>
                {task.content}
              </Content>
            </Description>
            <Icons item sm={4}>
              <Default edit={edit}>
                <IconButton color="primary" onClick={() => setEdit(true)}>
                  <CreateSharpIcon />
                </IconButton>
                <IconButton color="secondary">
                  <DeleteSharpIcon />
                </IconButton>
              </Default>
              <Edit edit={edit}>
                <IconButton color="primary">
                  <CheckCircleOutlineSharpIcon />
                </IconButton>

                <IconButton color="secondary">
                  <HighlightOffSharpIcon onClick={() => setEdit(false)} />
                </IconButton>
              </Edit>
            </Icons>
          </Grid>
        </Container>
      )}
    </Draggable>
  )

}

export default Task;