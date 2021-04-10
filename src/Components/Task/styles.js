import styled from 'styled-components';
import { Grid, Paper, IconButton, TextField } from '@material-ui/core';

export const Container = styled.div`
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

export const Handle = styled.div`
width: 20px;
height: 20px;
background-color: orange;
border-radius: 4px;
margin-right: 8px;
`

export const Description = styled(Grid)`

`

export const EditTitle = styled(TextField)`
 font-weight: bold;
`

export const Title = styled.div`
font-weight: bold;
display: ${({ edit }) => edit ? 'none' : 'block'}
`

export const Content = styled.div`

`

export const Icons = styled(Grid)`

`

export const Default = styled.div`
display: ${props => props.edit ? 'none' : 'flex'};
flex-direction: column;
`

export const Edit = styled.div`
display: ${props => props.edit ? 'flex' : 'none'};
flex-direction: column;
`