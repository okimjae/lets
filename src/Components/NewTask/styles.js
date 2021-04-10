import styled from 'styled-components';
import {IconButton, TextareaAutosize} from '@material-ui/core';

export const Container = styled.div`
    margin: 8px;
    border-radius: 8px;
    width: 220px;
    overflow: hidden;
    /* min-height: 200px; */

    display: flex;
    flex-direction: column;
    background-color: #f4f5f7;
`

export const CardTitle = styled.text`
    padding: 8px;
    background-color: #f4f5f7;
    color: #5e6c84;
    margin: 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin: 8px;
  justify-content: space-between;
  height: 100%;
`

export const InputContainer = styled.div`
    background-color: white;
    border-radius: 2px
`

export const Input = styled(TextareaAutosize)`
    border: none;
    width: 200px;
`