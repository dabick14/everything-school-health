import React from 'react'
import styled from 'styled-components'

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className='animate pointer radius8'
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  )
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? '#707070' : '#FA6E03')};
  background-color: ${(props) => (props.border ? 'transparent' : '#FA6E03')};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? '#707070' : '#fff')};
  :hover {
    background-color: ${(props) => (props.border ? 'transparent' : '#FB4302')};
    border: 1px solid #fa6e03;
    color: ${(props) => (props.border ? '#FA6E03' : '#fff')};
  }
`
