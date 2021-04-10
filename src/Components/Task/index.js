import React, { useState } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { Grid, Paper, IconButton, TextField } from '@material-ui/core';
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp';
import HighlightOffSharpIcon from '@material-ui/icons/HighlightOffSharp';
import CreateSharpIcon from '@material-ui/icons/CreateSharp';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';

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
                  inputProps={{fontWeight: 'bold'}}
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

const Container = styled.div`
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => props.isDragDisabled ? 'lightgrey'
    : props.isDragging ? '#ebecf0' : 'white'
  };

  display: flex;
  flex-direction: row;
  box-shadow: 0 1px 2px 0 rgb(9 30 66 / 25%);
`

const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px;
  margin-right: 8px;
`

const Description = styled(Grid)`

`

const EditTitle = styled(TextField)`
   font-weight: bold;
`

const Title = styled.div`
  font-weight: bold;
  display: ${({ edit }) => edit ? 'none' : 'block'}
`

const Content = styled.div`

`

const Icons = styled(Grid)`
  
`

const Default = styled.div`
  display: ${props => props.edit ? 'none' : 'flex'};
  flex-direction: column;
`

const Edit = styled.div`
  display: ${props => props.edit ? 'flex' : 'none'};
  flex-direction: column;
`